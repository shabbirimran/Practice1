
import { useAuth0 } from "@auth0/auth0-react";
import Form from "./components/Form";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Navbar from "./components/Navbar";
import Navbar1 from "./components/Navbar1";
import ProfileUser from "./components/ProfileUser";
import SearchFilter from "./components/SearchFilter";
import Temperature from "./components/Temperature";
import TodoForm from "./components/todoform/TodoForm";
import Header from "./Components1/Header";
import Banner from "./Components1/Banner";
import Activities from "./Components1/Activities";



function App() {
  // const {isLoading}=useAuth0();
  // if(isLoading){
  //   return <div> Loading...</div>
  // }
  return (
    <>
{/* //  <Temperature/>
// <SearchFilter/>  
  // <Form/>
  //<Navbar/>
  //  <Navbar1/> */}
  {/* <LoginButton/>
  <LogoutButton/>
  <ProfileUser/> */}
  {/* <TodoForm/> */}
  <Header/>
  <Activities/>
  </>
  )
}

export default App;
