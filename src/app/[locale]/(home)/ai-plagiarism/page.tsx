import FormInputContent from "./_lib/FormInputContent";
import Header from "./_lib/Header";

const Page = () => {
  return (
    <>
      <Header />
      <div className="py-[40px] px-[175px] grid grid-cols-[55%,45%] divide-x">
        <FormInputContent />
        <FormInputContent />
      </div>
    </>
  );
};

export default Page;
