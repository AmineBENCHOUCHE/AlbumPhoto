import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers } from "../store/thunks/fetchUsers";
import Skeleton from "./Skeleton";

import { BsPersonFillAdd } from "react-icons/bs";
import Panel from "../components/Panel";
import Button from "../components/Button";
import { addUser } from "../store";
import { useThunk } from "../hooks/useThunk";
import UserListItem from "./UserListItem";

const UserList = () => {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doAddUser, isCreatingUser, creatingUsersError] = useThunk(addUser);

  //  const [isLoadingUSers, setIsLoadingUsers] = useState(false);
  //  const [loadingUSersError, setLoadingUsersError] = useState(null);

  //  const [isCreatingUsers, setIsCreatingUsers] = useState(false);
  //  const [creatingUsersError, setCreatingUsersError] = useState(null);

  const { data } = useSelector((state, action) => {
    return state.users;
  });
  //  const {isLoading, data, error} = useSelector((state, action) => {
  //     return state.users
  //  })

  useEffect(() => {
    doFetchUsers();
    //    setIsLoadingUsers(true)
    //    dispatch(fetchUsers())
    //     .unwrap()
    //     // .then(() => {}) NOT NEDDED
    //     .catch((err) => setLoadingUsersError(err))
    //     .finally(() =>   setIsLoadingUsers(false)
    //     );
  }, [doFetchUsers]);

  function handleAddUser() {
    doAddUser(addUser);
    // setIsCreatingUsers(true)
    // dispatch(addUser())
    //     .unwrap()
    //     .catch((err) => setCreatingUsersError(err))
    //     .finally(() => setIsCreatingUsers(false))
  }

  let content;
  if (isLoadingUsers) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (loadingUsersError) {
    content = loadingUsersError && <p>Error fetching data...</p>;
  } else if (data?.length !== 0) {
    content = data.map((user) => {
      return <UserListItem key={user.id} user={user} />;
    });
  }

  return (
    <div className="flex flex-col justify-center items-center my-10">
      <Panel className="flex justify-between items-center m-3 px-10 mb-10">
        <h1 className="font-bold text-xl">List of Users</h1>
        <Button
          loading={isCreatingUser}
          primary
          rounded
          onClick={handleAddUser}
          className="flex gap-2 items-center hover:bg-blue-700 "
        >
          <BsPersonFillAdd /> Add users
        </Button>

        {creatingUsersError && " Error creating user ..."}
      </Panel>
      {content}
    </div>
  );
};
export default UserList;
