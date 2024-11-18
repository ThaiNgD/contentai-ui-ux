import { SelectField } from "@/components/CustomField/SelectField";
import { Button } from "flowbite-react";
import { AiFillOpenAI } from "react-icons/ai";
const APIContainer = () => {
  return (
    <div className="bg-white flex flex-col gap-[30px] p-[50px] rounded-lg shadow-md">
      <div className="flex items-center font-bold gap-2">
        <AiFillOpenAI size={24} />
        Open AI
      </div>
      <div className="grid grid-cols-2 gap-[30px]">
        <SelectField
          label="OpenAI Secret Key"
          isRequired
          isVertical
          clsLabelWrapper="italic font-bold mb-1"
          name=""
          className="!bg-[#F5F9FC] !shadow-inner"
        />
        <SelectField
          label="Personal OpenAI API Key "
          isRequired
          isVertical
          clsLabelWrapper="italic font-bold mb-1"
          name=""
          className="!bg-[#F5F9FC] !shadow-inner"
        />
        <SelectField
          label="Openai API Key Usage Mode"
          isRequired
          clsLabelWrapper="italic font-bold mb-1"
          isVertical
          name=""
          className="!bg-[#F5F9FC] !shadow-inner"
        />
      </div>
      <Button className="rounded-full w-fit px-[40px] bg-blue-500 shadow-md hover:shadow-none font-bold hover:translate-y-0.5 border-blue-500">
        Kho API
      </Button>
    </div>
  );
};

export default APIContainer;
