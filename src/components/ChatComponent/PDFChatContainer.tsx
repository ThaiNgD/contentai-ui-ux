"use client";
import { avatar } from "@/assets/images/avatar-image";
import { cn, selectRandom, sortMessageByTime } from "@/helper/function";
import { useFetchConversationById } from "@/service/ai-chat/useFetchConversationById";
import { useUploadPdf } from "@/service/ai-pdf-chat/useUploadPdf";
import { useFetchUserInfo } from "@/service/auth/useFetchUserInfor";
import { Button } from "flowbite-react";
import { useState } from "react";
import { toast } from "react-toastify";
import DragnDropPDF from "../DragnDropPDF";
import PDFViewer from "../PDFViewer";
import PDFChatInput from "./PDFChatInput";
import UserChatContent from "./UserChatContent";
import WelcomeUserChatContent from "./WelcomeUserChatContent";

const PDFChatContainer = () => {
  const userImage = selectRandom(avatar);
  // const [chat, setChat] = useState();
  const { data: user } = useFetchUserInfo();
  const [file, setFile] = useState<File | null>();
  const [isChat, setIsChat] = useState(false);
  const [shouldFetch, setShouldFetch] = useState(false);
  const [threadId, setThreadId] = useState("");
  const { data } = useFetchConversationById(threadId, shouldFetch);
  const { mutate: uploadPdfMutation, isPending } = useUploadPdf();
  const startPdfChat = () => {
    if (file) {
      if (file) {
        uploadPdfMutation(file, {
          onSuccess: (data) => {
            setIsChat(true);
            toast.success("File đã được tải lên thành công!");
            setThreadId(data.threadId);
          },
          onError: () => {
            toast.error("Có lỗi xảy ra trong quá trình tải lên");
          },
        });
      }
    } else {
      toast.error("Chưa có file nhập vào");
    }
  };

  return (
    <div className="flex h-[85%] max-h-[600px] flex-col justify-between gap-2">
      <div className="p-[30px] h-full flex justify-between gap-3">
        {file && (
          <PDFViewer
            height="h-full"
            width="w-[55%]"
            fileSrc={URL.createObjectURL(file)}
          />
        )}
        <div
          className={cn(
            "flex flex-col justify-between gap-3",
            file ? "w-[45%]" : "w-full"
          )}
        >
          {isChat ? (
            <>
              <div className="flex flex-col h-full overflow-auto pb-4 gap-4">
                <WelcomeUserChatContent
                  userName={user && user?.name ? user.name : user?.email}
                  imgUrl={userImage}
                />
                {sortMessageByTime(
                  data?.conversation ? data?.conversation : []
                ).map((con, index) => {
                  return (
                    <UserChatContent
                      key={index}
                      isUser={con.role !== "assistant"}
                      message={con.message}
                      imgUrl={userImage}
                      timeStamp={con.timestamp}
                    />
                  );
                })}
              </div>

              <PDFChatInput
                setShouldFetch={setShouldFetch}
                threadId={threadId}
              />
            </>
          ) : (
            <>
              <DragnDropPDF setFile={setFile} />
              <Button
                className="w-fit self-center px-[50px] bg-blue-500 rounded-xl shadow-lg hover:shadow-none hover:translate-y-0.5 border-blue-500"
                onClick={startPdfChat}
              >
                {isPending ? (
                  <div className="loading size-[24px]"></div>
                ) : (
                  "Bắt đầu Chat"
                )}
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PDFChatContainer;
