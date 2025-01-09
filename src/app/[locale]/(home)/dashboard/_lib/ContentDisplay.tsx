import DeatailContent from "@/components/ContentComponent/DeatailContent";

const ContentDisplay = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mb-[60px] gap-6">
      <div className="flex shadow-lg border rounded-lg flex-col">
        <h1 className="text-xl px-5 py-3 font-bold">Contents</h1>
        <hr />
        <DeatailContent />
        <hr />
        <DeatailContent />
        <hr />
        <DeatailContent />
        <hr />
        <DeatailContent />
        <hr />
        <DeatailContent />
      </div>
      <div className="flex shadow-lg border rounded-lg flex-col">
        <h1 className="text-xl px-5 py-3 font-bold">Favorite Content</h1>
        <hr />
        <DeatailContent />
        <hr />
        <DeatailContent />
        <hr />
        <DeatailContent />
        <hr />
        <DeatailContent />
        <hr />
        <DeatailContent />
      </div>
    </div>
  );
};

export default ContentDisplay;
