import { FaBars } from "react-icons/fa";
const ResponsiveHeaderRoute = ({ onClickDiv }: { onClickDiv: () => void }) => {
  return (
    <div className="md:hidden w-[50px]">
      <button
        className="text-white px-3 py-2 rounded-full bg-gray-300 hover:bg-gray-500 focus:outline-none"
        onClick={onClickDiv}
      >
        <FaBars size={16} />
      </button>
    </div>
  );
};

export default ResponsiveHeaderRoute;
