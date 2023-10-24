import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const ExpandablePanel = ({ header, children }) => {
  const [expanded, setExpanded] = useState(false);
  function handleClick() {
    setExpanded(!expanded);
  }
  return (
    <div className="mb-2 rounded border w-full">
      <div className="flex p-2 gap-2 justify-between items-center ">
        <div className="flex items-center justify-between">{header}</div>
        <div onClick={handleClick} className="cursor-pointer">
          {expanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>
      {expanded && <div className="p-2 border-t flex">{children}</div>}
    </div>
  );
};
export default ExpandablePanel;
