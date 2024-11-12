import FormInputContent from "./_lib/FormInputContent";
import FormReport from "./_lib/FormReport";
import Header from "./_lib/Header";
import SelectFeature from "./_lib/SelectFeature";

const Page = () => {
  return (
    <>
      <Header />
      <div className="flex flex-auto gap-[40px] bg-[#F5F9FC] flex-col py-[40px] px-[50px]">
        <SelectFeature />
        <div className=" grid grid-cols-[35%,calc(65%-16px)] gap-4">
          <FormInputContent />
          <FormReport />
        </div>
      </div>
    </>
  );
};

export default Page;
