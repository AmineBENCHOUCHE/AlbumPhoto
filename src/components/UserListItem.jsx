
import Button from "./Button"
import { GoTrash } from "react-icons/go"
import { VscTriangleDown } from "react-icons/vsc"
import { removeUser } from "../store"
import { useThunk } from "../hooks/useThunk"

const UserListItem = ({user}) => {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser)
    const handleDelete = () => {
        doRemoveUser(user)  
    }
    
    return (
    <div key={user.id} className="mb-2 rounded border w-full">
                <div className="flex p-2 gap-2 justify-between items-center">
                    <Button loading={isLoading} onClick={handleDelete}>
                        <GoTrash className="text-red-600 h-8 w-8"/>
                    </Button>
                    {error && <div>Error deleting user ...</div>}
                    {user.name}
                    <VscTriangleDown className="ml-auto"/>
                </div>
            </div> 
        
  )
}
export default UserListItem

