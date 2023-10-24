import Button from "./Button";
import Panel from "./Panel";
import { BiAddToQueue } from "react-icons/bi";
import ExpandablePanel from "./ExpandablePanel";

const AlbumsList = ({ user }) => {
  function handleAddAlbum() {}
  return (
    <div className="flex flex-col justify-between w-full">
      <div className="flex justify-between items-center w-full ">
        Albums for {user.name}
        <Button
          loading={false}
          primary
          onClick={handleAddAlbum}
          className="flex gap-2 items-center"
        >
          <BiAddToQueue /> Add users
        </Button>
      </div>
    </div>
  );
};
export default AlbumsList;
