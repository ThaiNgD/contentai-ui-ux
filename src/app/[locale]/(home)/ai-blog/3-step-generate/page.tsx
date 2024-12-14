"use client";
import { configAIBlogStep } from "@/config/configAIBlog";
import { useState } from "react";
import ChildHeader from "../_lib/ChildHeader";
import InputKeyword from "./_lib/InputKeyword";
import InputOutlineForm from "./_lib/InputOutlineForm";
import InputPostForm from "./_lib/InputPostForm";
import SelectorStep from "./_lib/SelectorStep";

const Page = () => {
  const [steps, setSteps] = useState(configAIBlogStep);
  const [idea, setIdea] = useState<string>("");
  const [outline, setOutline] = useState<string>("");
  const setStepsOutline = (): void => {
    setSteps((prevs) => {
      return prevs.map((prev, index) => {
        return {
          ...prev,
          isActive: index === 1,
        };
      });
    });
  };
  const setStepsPost = (): void => {
    setSteps((prevs) => {
      return prevs.map((prev, index) => {
        return {
          ...prev,
          isActive: index === 2,
        };
      });
    });
  };

  const setStepsIndex = (index: number): void => {
    setSteps((prevs) => {
      return prevs.map((prev, id: number) => {
        return {
          ...prev,
          isActive: id === index,
        };
      });
    });
  };
  return (
    <>
      <ChildHeader
        title="Viết bài theo 3 bước"
        description="Tạo một bài viết theo quy chuẩn SEO hoàn chỉnh sau khi gộp cả 3 bước."
      />
      <div className="flex flex-col flex-auto bg-[#F1F9FC]">
        <SelectorStep steps={steps} setStepsIndex={setStepsIndex} />
        {steps.filter((step) => {
          return step.isActive;
        })[0].step === 1 && (
          <InputKeyword setIdea={setIdea} setStepsOutline={setStepsOutline} />
        )}
        {steps.filter((step) => {
          return step.isActive;
        })[0].step === 2 && (
          <InputOutlineForm
            idea={idea}
            setOutline={setOutline}
            setStepsPost={setStepsPost}
          />
        )}
        {steps.filter((step) => {
          return step.isActive;
        })[0].step === 3 && <InputPostForm outline={outline} />}
      </div>
    </>
  );
};

export default Page;
