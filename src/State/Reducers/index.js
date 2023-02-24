import { combineReducers } from 'redux'
import userReducer from "./usersReducer"
import albumsReducer from "./albumReducer";

const reducers = combineReducers({
    users:userReducer,
    albums: albumsReducer
})

export default reducers