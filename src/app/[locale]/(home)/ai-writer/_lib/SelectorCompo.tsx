"use client";

interface SelectorCompo {
  title: string;
  onClick: () => void;
}
const SelectorCompo = ({ title, onClick }: SelectorCompo) => {
  return (
    <div
      className="border p-2 rounded-xl text-sm"
      role="button"
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default SelectorCompo;
