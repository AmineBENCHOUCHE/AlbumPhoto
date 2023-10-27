import Button from "./Button";
import Skeleton from "./Skeleton";

import { BiAddToQueue } from "react-icons/bi";
import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import AlbumsListItem from "./AlbumsListItem";

const AlbumsList = ({ user }) => {
  //fetch data
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  // console.log(data);

  // Add album
  const [addAlbum, results] = useAddAlbumMutation();

  // Remove Album

  function handleAddAlbum() {
    addAlbum(user);
    console.log(results);
  }

  let content;
  if (isFetching) {
    content = <Skeleton times={3} className="w-full h-10" />;
  } else if (error) {
    content = <div>Error loading albums ...</div>;
  } else {
    content = data.map((album) => {
      return <AlbumsListItem key={album.id} album={album} />;
    });
  }

  return (
    <div className="flex flex-col justify-between items-center w-full">
      <div className="flex justify-between items-center w-full m-2 ">
        <h3 className="text-lg font-semibold ml-2">Albums for {user.name}</h3>
        <Button
          loading={results.isLoading}
          primary
          rounded
          onClick={handleAddAlbum}
          className="flex gap-2  items-center hover:bg-blue-700"
        >
          <BiAddToQueue /> Add albums
        </Button>
      </div>
      {content}
    </div>
  );
};
export default AlbumsList;
