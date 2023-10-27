import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrash } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

const AlbumsListItem = ({ album }) => {
  const [removeAlbum, results] = useRemoveAlbumMutation();
  function handleDeleteAlbum() {
    removeAlbum(album);
  }
  const header = (
    <div className="ml-5 flex">
      <Button
        loading={results.isLoading}
        onClick={handleDeleteAlbum}
        className="mr-2"
      >
        <GoTrash className="text-red-600 h-8 w-8" />
      </Button>
      {album.title}
    </div>
  );
  return (
    <ExpandablePanel key={album.id} header={header}>
      <PhotosList album={album} />
    </ExpandablePanel>
  );
};
export default AlbumsListItem;
