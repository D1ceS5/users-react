import {useSelector} from "react-redux";
import Loader from "../../Components/Loader/Loader";
import UserCard from "../../Components/UserCard/UserCard";
import "./Users.scss"
import Albums from "../../Components/Albums/Albums";

function Users() {
    const state = useSelector((state)=>state);
    const {users,albums} = state
    return (
        (!users && users.length === 0)? <Loader />
        :<>
            <Albums open={albums.length > 0} albums={albums} />
            <div className="users-wrapper" >
                {users.map(u=> <UserCard key={u.id} user={u}/>)}
            </div>
        </>

    );
}

export default Users;