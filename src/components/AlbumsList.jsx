import Button from "./Button";
import Panel from "./Panel";
import Skeleton from "./Skeleton";

import { BiAddToQueue } from "react-icons/bi";
import ExpandablePanel from "./ExpandablePanel";
import { useFetchAlbumsQuery } from "../store";

const AlbumsList = ({ user }) => {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  //   console.log(data);

  function handleAddAlbum() {}
  let content;
  if (isLoading) {
    content = <Skeleton times={3} />;
  } else if (error) {
    content = <div>Error loading albums ...</div>;
  } else {
    content = data.map((album) => {
      const header = <div>{album.title}</div>;
      return (
        <ExpandablePanel key={album.id} header={header}>
          List of photos in the album
        </ExpandablePanel>
      );
    });
  }

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
          <BiAddToQueue /> Add albums
        </Button>
      </div>
      {content}
    </div>
  );
};
export default AlbumsList;
