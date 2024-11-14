"use client";

interface SelectedCompo {
  title: string;
}
const SelectedCompo = ({ title }: SelectedCompo) => {
  return (
    <div
      className="border bg-blue-500 text-white p-1 px-2 rounded-xl text-xs font-thin"
      role="button"
    >
      {title}
    </div>
  );
};

export default SelectedCompo;
