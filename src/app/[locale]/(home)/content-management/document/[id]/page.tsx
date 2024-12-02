import CustomEditor from "@/components/CKEditorComponent/CustomEditor";
import Header from "./_lib/Header";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string | number }>;
}) {
  const id = (await params).id;
  return (
    <>
      <Header title={`${id}`} />
      <hr />
      <div className="flex-auto flex flex-col my-[50px] 2xl:px-[175px] px-[15px]">
        {/* <FolderDisplay />
        <div className="flex-auto flex flex-col mb-[40px] gap-3 items-center justify-center">
          <NoTextDocument />
        </div> */}
        <CustomEditor clsHeight="h-[700px]" />
      </div>
    </>
  );
}
