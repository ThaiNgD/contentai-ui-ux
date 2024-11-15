"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/helper/function";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { FaFilePdf } from "react-icons/fa6";
import { TbCloudUpload } from "react-icons/tb";
import { toast } from "react-toastify";
interface DragnDropPDFProps {
  desc?: string;
  acceptedFile?: string;
  setFile?: Dispatch<SetStateAction<File | null | undefined>>;
}
const DragnDropPDF = ({
  desc = "Chọn file .pdf",
  acceptedFile = "application/pdf",
  setFile: setSelectedFile,
}: DragnDropPDFProps) => {
  const inputRef = useRef(null);
  const [file, setFile] = useState<string>("");
  const [isFileEnter, setIsFileEnter] = useState(false);
  const handleDivClick = (): void => {
    (inputRef.current as unknown as HTMLInputElement)?.click();
  };
  //disabled-eslint-next-line
  const onInputChange = (e: any): void => {
    const fileInput = e.target.files;
    console.log(fileInput);
    if (!fileInput[0].type.includes("/pdf")) {
      toast.error("File không phải là PDF");
    } else if (fileInput && fileInput.length > 0) {
      setSelectedFile?.(fileInput);
      setFile(URL.createObjectURL(fileInput[0]));
      setIsFileEnter(false);
    }
  };
  return (
    <div
      className={cn(
        "border p-[20px] h-full w-full border-dashed bg-white hover:bg-blue-300/85  min-h-[280px] hover:opacity-40 flex flex-col items-center justify-center rounded-lg",
        isFileEnter && "bg-blue-300/85 opacity-40"
      )}
      role="button"
      onClick={handleDivClick}
      onDragOver={(e): void => {
        e.preventDefault();
        setIsFileEnter(true);
      }}
      onDragLeave={(): void => {
        setIsFileEnter(false);
      }}
      onDragEnd={(e) => {
        e.preventDefault();
        setIsFileEnter(false);
      }}
      onDragOverCapture={(e) => {
        e.preventDefault();
        setIsFileEnter(false);
      }}
      onDrop={(e) => {
        e.preventDefault();
        setIsFileEnter(false);
        if (e.dataTransfer.items) {
          [...e.dataTransfer.items].forEach((item) => {
            if (item.kind === "file") {
              const file = item.getAsFile();
              setSelectedFile?.(file);
              console.log(file);
              if (file && file.type.includes("/pdf")) {
                const blobUrl = URL.createObjectURL(file);
                setFile(blobUrl);
              } else {
                toast.error("File không phải là PDF");
              }
            }
          });
        } else {
          [...e.dataTransfer.files].forEach((file, i) => {
            console.log(`… file[${i}].name = ${file.name}`);
          });
        }
      }}
    >
      <input
        accept={acceptedFile}
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={onInputChange}
      />
      {file ? (
        <div className="flex items-center flex-col gap-2">
          <FaFilePdf size={80} className="text-orange-500" />
          {file}
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <TbCloudUpload size={40} />
          <p className="font-semibold">Thả hoặc chọn file PDF ở đây</p>
          <span className="text-sm ">{`(${desc})`}</span>
        </div>
      )}
    </div>
  );
};

export default DragnDropPDF;
