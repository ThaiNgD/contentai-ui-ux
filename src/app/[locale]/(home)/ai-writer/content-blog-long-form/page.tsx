"use client";
import CustomEditor from "@/components/CKEditorComponent/CustomEditor";
import { useAiContentBlogLongForm } from "@/service/aiwriter/useAiContentBlogLongForm";
import ChildHeader from "../_lib/ChildHeader";
import InputContent from "./_lib/InputContent";

const Page = () => {
  const { data, mutate: mutateFn, isPending } = useAiContentBlogLongForm();
  return (
    <>
      <ChildHeader
        title="Tạo bài Blog chi tiết"
        description="Tạo bài blog dài và phần FAQ, bao gồm tiêu đề, bảng, hình ảnh (marksdown), với từ khóa chính"
      />
      <div className="grid grid-cols-[35%,1fr,65%] h-[calc(100%-200px)] px-[175px] py-[40px] gap-[30px] ">
        <InputContent submitForm={mutateFn} isPending={isPending} />
        <div className="border-l"></div>
        <CustomEditor data={data?.result} />
      </div>
    </>
  );
};

export default Page;
