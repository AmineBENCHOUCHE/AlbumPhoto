import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const ExpandablePanel = ({ header, children }) => {
  const [expanded, setExpanded] = useState(false);
  function handleClick() {
    setExpanded(!expanded);
  }
  return (
    <div className="mb-3 rounded border w-full bg-gray-100  px-10 py-2">
      <div className="flex p-2 gap-2 justify-between items-center bg-white  hover:font-semibold hover:scale-y-110">
        <div className="flex items-center justify-between">{header}</div>
        <div onClick={handleClick} className="cursor-pointer">
          {expanded ? (
            <GoChevronDown className="hover:scale-[2]" />
          ) : (
            <GoChevronLeft className="hover:scale-[2]" />
          )}
        </div>
      </div>
      {expanded && <div className="p-2 border-t flex">{children}</div>}
    </div>
  );
};
export default ExpandablePanel;
