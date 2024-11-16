import Header from "./_lib/Header";
import VisionContainer from "./_lib/VisionContainer";

const Page = () => {
  return (
    <>
      <Header />
      <div className="2xl:px-[175px] px-[15px] flex-auto p-[20px] bg-[#F5F9FC] ">
        <VisionContainer />
      </div>
    </>
  );
};

export default Page;
