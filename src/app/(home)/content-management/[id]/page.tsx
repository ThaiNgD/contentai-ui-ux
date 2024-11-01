import FolderDisplay from "./_lib/FolderDisplay";
import Header from "./_lib/Header";
import NoTextDocument from "./_lib/NoTextDocument";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string | number }>;
}) {
  const id = (await params).id;
  return (
    <>
      <Header title={`Folder ${id}`} />
      <hr />
      <div className="flex-auto flex flex-col my-[50px] px-[175px]">
        <FolderDisplay />
        <div className="flex-auto flex flex-col mb-[40px] gap-3 items-center justify-center">
          <NoTextDocument />
        </div>
      </div>
    </>
  );
}
