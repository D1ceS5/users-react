import axios from "axios";
import config from "../../config.json";

const SET = "SET_ALBUM"
const CLEAR = "CLEAR_ALBUM"
const albumsReducer = (state = [],action) =>{
    switch(action.type){
        case SET:{
            state = action.payload || [];
            return state
        }
        case CLEAR:{
            state = [];
            return state
        }
        default: return state
    }
}
const setAlbums = (payload) => ({type:SET,payload})
export const clearAlbums = () =>{
    return function (dispatch){
        dispatch({type: CLEAR})
    }
}
export const fetchAlbums = (uid) => {
    return function (dispatch){
        axios.get(`${config.apiBaseURL}/albums?userId=${uid}`).then((response)=>{
            dispatch(setAlbums(response.data))
        }).catch((e)=>{
            console.log("Error",e)
        })
    }
}
export default albumsReducer