import { GoTrash } from "react-icons/go";
import { useRemovePhotoMutation } from "../store";

import Button from "./Button";

const PhotosListItem = ({ photo }) => {
  const [removePhoto, results] = useRemovePhotoMutation();
  function handleDeletePhoto() {
    removePhoto(photo);
  }

  return (
    <div
      onClick={handleDeletePhoto}
      className="relative flex justify-center gap-2 flex-wrap items-center mt-5 cursor-pointer "
    >
      <img src={photo.url} alt="random-pic" />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80  ">
        <Button loading={results.isLoading}>
          <GoTrash className="text-3xl" />
        </Button>
      </div>
    </div>
  );
};

export default PhotosListItem;
