"use client";
import { avatar } from "@/assets/images/avatar-image";
import { cn, selectRandom } from "@/helper/function";
import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DragnDropPDF from "../DragnDropPDF";
import PDFViewer from "../PDFViewer";
import PDFChatInput from "./PDFChatInput";
import WelcomeUserChatContent from "./WelcomeUserChatContent";
import { useUploadPdf } from "@/service/ai-pdf-chat/useUploadPdf";
import UserChatContent from "./UserChatContent";
import { useFetchConversationById } from "@/service/ai-chat/useFetchConversationById";

const PDFChatContainer = () => {
  const userImage = selectRandom(avatar);
  const [file, setFile] = useState<File | null>();
  const [isChat, setIsChat] = useState(false);
  const [shouldFetch, setShouldFetch] = useState(false);
  const [threadId, setThreadId] = useState("");
  const { data } = useFetchConversationById(threadId, shouldFetch);
  const uploadPdfMutation = useUploadPdf(); // Initialize the mutation

  // Sử dụng useEffect để gọi API upload khi file thay đổi
  useEffect(() => {
    if (file) {
      uploadPdfMutation.mutate(file, {
        onSuccess: (data) => {
          console.log("File đã được tải lên thành công!");
          // setIsChat(true); // Chuyển qua chế độ chat sau khi tải file thành công
          setThreadId(data.threadId);
        },
        onError: () => {
          console.log("Có lỗi xảy ra trong quá trình tải lên");
        },
      });
    }
  }, [file]); // Khi file thay đổi, gọi hàm upload
  return (
    <div className="flex h-[85%] max-h-[600px] flex-col justify-between gap-2">
      <div className="p-[30px] h-full flex justify-between gap-3">
        {file && (
          <PDFViewer
            height="h-full"
            width="w-[60%]"
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
                <WelcomeUserChatContent imgUrl={userImage} />
                {/* <UserChatContent isUser={true} userImage={userImage} />
                <UserChatContent imgUrl={userImage} /> */}
              </div>
              {data?.conversation?.map((con, index) => {
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
                onClick={(): void => {
                  if (file) {
                    setIsChat(true);
                  } else {
                    toast.error("Chưa có file nhập vào");
                  }
                }}
              >
                Bắt đầu Chat
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PDFChatContainer;
