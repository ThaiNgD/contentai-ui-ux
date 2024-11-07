import NoTextData from "@/assets/images/empty_folder.jpg";
import { Button } from "flowbite-react";
import Image from "next/image";
const NoTextDocument = () => {
  return (
    <>
      <Image className="mx-auto" src={NoTextData} alt="No Document" />
      <span className="text-3xl text-center font-bold">
        Không có tài liệu nào
      </span>
      <span className="text-sm text-center opacity-60">
        Bạn có thể thêm tài liệu để tạo văn bản
      </span>
      <Button className="bg-white text-black rounded-2xl shadow-md hover:bg-blue-500 font-bold hover:text-white">
        + Văn bản mới
      </Button>
    </>
  );
};

export default NoTextDocument;
