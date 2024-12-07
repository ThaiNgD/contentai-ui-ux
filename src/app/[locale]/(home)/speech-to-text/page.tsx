"use client";
import DragnDropImage from "@/components/DragnDropFile";
import { Button } from "flowbite-react";
import FormReport from "./_lib/FormReport";
import Header from "./_lib/Header";
import { useState } from "react";
import { useTranscribeAudio } from "@/service/ai-speech-to-text/useTranscribeAudio";

const Page = () => {
  const [file, setFile] = useState<File | null>();
  const [transcribedText, setTranscribedText] = useState("");
  const TranscribeAudio = useTranscribeAudio();

  const handleTranscribeAudio = () => {
    if (file)
      TranscribeAudio.mutate(file, {
        onSuccess: (data) => {
          setTranscribedText(data.transcribedText);
          console.log("data", data);
        },
      });
  };

  console.log("transcribedText", transcribedText);

  return (
    <>
      <Header />
      <div className="py-[40px] flex-auto bg-[#F5F9FC] px-[50px] grid grid-cols-[35%,calc(65%-16px)] gap-4">
        <div className="p-[20px] bg-white justify-center flex flex-col gap-3">
          <DragnDropImage
            setFile={setFile}
            acceptedFile="audio/*"
            title="Chọn hoặc thả file âm thanh ở đây"
            desc="Chỉ chọn file .mp3,.mp4"
            type="audio"
          />
          <Button
            className="rounded-full self-center border-blue-500 font-bold !text-xl bg-blue-500 shadow-lg hover:shadow-none duration-200 hover:translate-y-0.5 w-fit px-[50px]"
            onClick={() => {
              handleTranscribeAudio();
            }}
          >
            Convert
          </Button>
        </div>
        <FormReport transcribedText={transcribedText} />
      </div>
    </>
  );
};

export default Page;
