import axios from "axios";
import config from "../../config.json";

const SET = "SET_USER"
const userReducer = (state = [],action) =>{
    switch(action.type){
        case SET:{
            state = action.payload || [];
            return state
        }
        default: return state
    }
}
const setUsers = (payload) => ({type:SET,payload})
export const fetchUsers = () => {
    return function (dispatch){
        axios.get(`${config.apiBaseURL}/users`).then((response)=>{
           dispatch(setUsers(response.data))
        }).catch((e)=>{
            console.log("Error",e)
        })
    }
}
export default userReducer