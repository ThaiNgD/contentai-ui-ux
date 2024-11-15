import FormInputAudio from "./_lib/FormInputAudio";
import FormReport from "./_lib/FormReport";
import Header from "./_lib/Header";

const Page = () => {
  return (
    <>
      <Header />
      <div className="py-[40px] flex-auto bg-[#F5F9FC] px-[50px] grid grid-cols-[35%,calc(65%-16px)] gap-4">
        <FormInputAudio />
        <FormReport />
      </div>
    </>
  );
};

export default Page;
