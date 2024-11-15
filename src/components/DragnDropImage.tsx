"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/helper/function";
import Image from "next/image";
import { useRef, useState } from "react";
import { TbCloudUpload } from "react-icons/tb";
import { toast } from "react-toastify";

interface DragnDropImageProps {
  isImage: boolean;
  desc?: string;
  acceptedFile?: string;
}
const DragnDropImage = ({
  isImage = true,
  desc = "Chỉ cho phép chọn JPG,PNG,WEPG",
  acceptedFile = "image/*",
}: DragnDropImageProps) => {
  const inputRef = useRef(null);
  const [file, setFile] = useState<string>("");
  const [isFileEnter, setIsFileEnter] = useState(false);
  const handleDivClick = (): void => {
    (inputRef.current as unknown as HTMLInputElement)?.click();
  };
  //disabled-eslint-next-line
  const onInputChange = (e: any): void => {
    const fileInput = e.target.files;
    if (!fileInput[0].type.includes("image/")) {
      toast.error("File không phải là ảnh!!");
    } else if (fileInput && fileInput.length > 0) {
      setFile(URL.createObjectURL(fileInput[0]));
      setIsFileEnter(true);
    }
  };
  return (
    <div
      className={cn(
        "border p-[20px] w-full border-dashed bg-white hover:bg-blue-300/85  min-h-[280px] hover:opacity-40 flex flex-col items-center justify-center rounded-lg",
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
      onDrop={(e) => {
        e.preventDefault();
        setIsFileEnter(false);
        if (e.dataTransfer.items) {
          [...e.dataTransfer.items].forEach((item) => {
            if (item.kind === "file") {
              const file = item.getAsFile();
              console.log(file);
              if (file && file.type.includes("image/")) {
                const blobUrl = URL.createObjectURL(file);
                setFile(blobUrl);
              } else {
                toast.error("File không phải là ảnh!!");
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
          <Image
            alt="Image"
            src={file}
            width={48}
            height={48}
            className="h-auto max-h-[200px] w-auto"
          />
          {file}
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <TbCloudUpload size={40} />
          <p className="font-semibold">
            Thả hoặc chọn {isImage ? "ảnh" : "video"} vào đây
          </p>
          <span className="text-sm ">{`(${desc}}`}</span>
        </div>
      )}
    </div>
  );
};

export default DragnDropImage;
