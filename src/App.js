import {BrowserRouter,Routes,Route} from "react-router-dom";
import Users from "./Pages/Users/Users";
import {useSelector,useDispatch} from "react-redux";

import {useEffect} from "react";
import {fetchUsers} from "./State/Reducers/usersReducer";
import Header from "./Components/Header/Header";
import Posts from "./Pages/Posts/Posts";
function App() {
    const {users} = useSelector((state)=>state);
    const dispatch = useDispatch()

    useEffect(()=>{
      if(!users || users.length === 0) dispatch(fetchUsers())
    },[users])


  return (
      <>
          <BrowserRouter>
              <Header></Header>

              <Routes>
                  <Route path="/" element={<Users />}/>
                  <Route path="/users" element={<Users />}/>
                  <Route path="/:uid/posts" element={<Posts />}/>
                  <Route path="*" element={<Users />}/>
              </Routes>
          </BrowserRouter>
      </>

  );
}

export default App;
