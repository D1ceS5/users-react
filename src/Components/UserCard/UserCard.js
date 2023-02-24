import userIcon from "../../images/user.svg"
import phoneIcon from "../../images/phone.svg"
import emailIcon from "../../images/email.svg"
import companyIcon from "../../images/company.svg"
import siteIcon from "../../images/site.svg"
import locationIcon from "../../images/location.svg"
import "./UserCard.scss"
import {fetchAlbums} from "../../State/Reducers/albumReducer";
import {useDispatch} from "react-redux";
function UserCard({user}) {
    const dispatch = useDispatch()
    function openPosts() {
        window.location = `${user.id}/posts`
    }
    function openAlbums(){
        dispatch(fetchAlbums(user.id));
    }
    return (
        <div className='user-card' >
            <div className='user-data' >
                <div><b>USER</b></div>
                <div className='sub-data' >
                    <div>
                        <img alt="icon" className='user-icon' src={userIcon}/>
                        <b>Name:</b> {user.name}
                    </div>
                    <div>
                        <img alt="icon" className='user-icon' src={phoneIcon}/>
                        <b>Tel:</b>{user.phone}
                    </div>
                    <div>
                        <img alt="icon" className='user-icon' src={emailIcon}/>
                        <b>Email:</b>{user.email}
                    </div>
                </div>
                <div><b>COMPANY DETAILS</b></div>
                <div className='sub-data' >
                    <div>
                        <img alt="icon" className='user-icon' src={companyIcon}/>
                        <b>Company Name:</b>{user.company.name}
                    </div>
                    <div>
                        <img alt="icon" className='user-icon' src={siteIcon}/>
                        <a href={user.website} >{user.website}</a>
                    </div>
                    <div>
                        <img alt="icon" className='user-icon' src={locationIcon}/>
                        <b>Location:</b><a href={`http://maps.google.com/maps?q=${user.address.city},${user.address.suite},${user.address.zipcode}`} >{`${user.address.city},${user.address.suite},${user.address.zipcode}`}</a>
                    </div>
                </div>
                <div className='buttons-cont'>
                    <button onClick={openPosts} >POSTS</button>
                    <button onClick={openAlbums} >ALBUMS</button>
                </div>
            </div>
        </div>
    );
}

export default UserCard;
