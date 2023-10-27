import Button from "./Button";
import { GoTrash } from "react-icons/go";
import { removeUser } from "../store";
import { useThunk } from "../hooks/useThunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

const UserListItem = ({ user }) => {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);
  const handleDelete = () => {
    doRemoveUser(user);
  };
  const header = (
    <>
      <Button
        loading={isLoading}
        onClick={handleDelete}
        className="hover:border-2 hover:border-red-300 hover:rounded"
      >
        <GoTrash className="text-red-600 h-8 w-8" />
      </Button>
      {error && <div>Error deleting user ...</div>}
      {user.name}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
};
export default UserListItem;
