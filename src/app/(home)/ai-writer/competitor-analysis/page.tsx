import CKEditor from "./_lib/CKEditor";
import InputContent from "./_lib/InputContent";

const page = () => {
  return (
    <div className="grid grid-cols-[35%,1fr,65%] px-[175px] py-[40px] gap-[30px] ">
      <InputContent />
      <div className="border-l"></div>
      <CKEditor />
    </div>
  );
};

export default page;
