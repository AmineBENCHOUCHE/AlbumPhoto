import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";
import Button from "./Button";
import { BiAddToQueue } from "react-icons/bi";
import Skeleton from "./Skeleton";
import PhotosListItem from "./PhotosListItem";

const PhotosList = ({ album }) => {
  const { data, error, isFetching } = useFetchPhotosQuery(album);
  console.log("data", data);
  console.log("isFetching", isFetching);
  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  function handleAddPhoto() {
    addPhoto(album);
    console.log(addPhotoResults);
  }

  let content;
  if (isFetching) {
    content = (
      <Skeleton
        times={4}
        className="w-25 h-25 !flex justify-between items-center"
      />
    );
  } else if (error) {
    content = <div>Error fetching photos...</div>;
  } else {
    content = data.map((photo) => (
      <PhotosListItem key={photo.id} photo={photo} />
    ));
  }

  return (
    <div className="w-full">
      <div
        onClick={handleAddPhoto}
        className="flex justify-between w-full items-center m-2"
      >
        <h3 className="text-lg font-bold">Photos in Album {album.title}</h3>
        <Button
          primary
          rounded
          className="flex gap-2 items-center hover:bg-blue-700"
          loading={addPhotoResults.isLoading}
        >
          <BiAddToQueue />
          Add Photo
        </Button>
      </div>
      <div className="flex justify-center gap-2 flex-wrap items-center ">
        {content}
      </div>
    </div>
  );
};
export default PhotosList;
