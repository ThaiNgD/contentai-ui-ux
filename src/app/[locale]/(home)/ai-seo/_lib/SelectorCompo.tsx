"use client";

interface SelectorCompo {
  title: string;
  onClick: () => void;
}
const SelectorCompo = ({ title, onClick }: SelectorCompo) => {
  return (
    <div
      className="border hover:bg-blue-500 hover:text-white p-1 px-2 rounded-xl text-xs font-thin"
      role="button"
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default SelectorCompo;
