import React, {Component,lazy,Suspense} from 'react';
import TopFooter from './HeaderAndFooter';
import {Route} from 'react-router-dom'
import Register from "./register";
import Login from "./Login";
import Home from "./home"
import Photo from "./photos";
import {_photos} from "../data/photo"
import def from "../photos/default.png";
import ErrorBoundary from './error'
const Users=lazy(()=>import('./users'))

function Main(props){
        console.log("Main")
        const [isLogin,setIsLogin]=React.useState(false);
        const [currentUser,setCurrentUser]=React.useState({
                id:"",
                username:"",
                password: "",
                fullname: "",
                photo: ""
                })
                React.useEffect(() => {
                        console.log("useEffect")
                       localStorage.setItem("token",props.token)
                        })
function userUpdateProfile(x){
        const currUser=currentUser.username;
        props.users.map(user => {if(user.username===currUser)
                                           user.photo=x
        })
        setCurrentUser({
                id:"",
                username:"",
                password: "",
                fullname: "",
                photo:x   
        })    
    }
function userLogin(user,pass){
            
            props.requestApiToken();
            
            setIsLogin(true)
            setCurrentUser({
                id:"",
                username:user,
                password: "",
                fullname: "",
                photo:def  
        })
            return true;
   }
   const logout= React.useCallback(()=>{
           console.log("logging out")
           setIsLogin(false);
        localStorage.removeItem("token");
        props.history.push("/")},[])
  
  const getuser=React.useCallback(()=>{props.requestApiUsers(0,5)},[])
     return (<div>
        <ErrorBoundary>
             {!isLogin?<div className="login"></div>:<TopFooter user={currentUser} onLogout={logout}/>}
             <Route exact path ="/" render= {({history})=> (
             <Login data={props.users} onLogin={(user,pass)=>{
                     if(userLogin(user,pass))
                     history.push("/home")
             }}/>
             )}/>
             <Route exact path ="/user/register" render= {({history})=> (
                <Register onRegister={(user)=>{props.requestAddUser(user);history.push("/home")}}/>
                )}/>
                  
             <Route exact path ="/home" render= {({history})=> (
                     <div className="middle">
                <Home />
                </div>
                )}/>  
                <Route exact path ="/Profile" render= {({history})=> (
                        <Photo posts={_photos}  onUpdate={(x)=>{userUpdateProfile(x);history.push("/home")}}/>
                        )}/> 
                <Route exact path ="/users" render= {({history})=> (
                
                <Suspense fallback={<div>Loading....</div>}>  
                    
                <Users onGetUsers={getuser}  {...props}/>
                
                </Suspense>
                
               )}/> 
                
             <div className="footer"></div>
             </ErrorBoundary>
             </div>)
      
}
export default Main