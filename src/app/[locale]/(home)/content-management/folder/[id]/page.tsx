import FolderDisplay from "./_lib/FolderDisplay";
import Header from "./_lib/Header";
import NoTextDocument from "./_lib/NoTextDocument";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string | number }>;
}) {
  const id = (await params).id;
  const folder_name = typeof id === "string" && decodeURIComponent(id);
  return (
    <>
      <Header title={`Folder ${folder_name}`} />
      <hr />
      <div className="flex-auto flex flex-col my-[50px] 2xl:px-[175px] px-[15px]">
        <FolderDisplay />
        <div className="flex-auto flex flex-col mb-[40px] gap-3 items-center justify-center">
          <NoTextDocument />
        </div>
      </div>
    </>
  );
}
