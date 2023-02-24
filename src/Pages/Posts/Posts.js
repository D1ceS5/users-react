import axios from "axios";
import config from "../../config.json"
import Loader from "../../Components/Loader/Loader";
import "./Posts.scss"
import {useEffect, useState} from "react";
import Post from "../../Components/Post/Post";

function Posts() {

    const [loading,setLoading] = useState(false)
    const [posts,setPosts] = useState({
        list: []
    })
    function goBack(){
        window.location = "/users"
    }
    useEffect(()=>{
        if(!posts || posts.list.length === 0){
            setLoading(true);
            let params = window.location.pathname.substring(1).split('/')
            axios.get(`${config.apiBaseURL}/posts?userId=${params[0]}`).then((response)=>{
                setPosts((prev)=>{
                    return {
                        ...prev,
                        list: response.data
                    }
                })
                setLoading(false)
            })
        }
    },[loading])

    return (
        (loading)? <Loader />
            :<div>
                <button className='back-btn' onClick={goBack} >GO BACK</button>
                <div className="posts-wrapper" >
                    {posts.list.map(p=><Post post={p} key={p.id} />)}
                </div>
            </div>
    );
}

export default Posts;