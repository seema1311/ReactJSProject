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

class Main extends Component{
        isLogin=false;
        currentUser={
        id:"",
        username:"",
        password: "",
        fullname: "",
        photo: ""
        }

   componentDidUpdate(){
           console.log("DidUpdate   "+this.props.users)
           localStorage.setItem("token",this.props.token)
   }
   userUpdateProfile(x){
        
        const currUser=this.currentUser.username;
        this.props.users.map(user => {if(user.username===currUser)
                                           user.photo=x
        })
        this.currentUser.photo=x;
        console.log(this.props.users)
    }
    userUpdatePass(x){
        
        const currUser=this.currentUser.username;
        this.props.users.map(user => {if(user.username===currUser)
                                           user.password=x
        })
    }
    userUpdateUser(x){
        
        const currUser=this.currentUser.username;
        this.props.users.map(user => {if(user.username===currUser)
                                           user.username=x
        })
    }
    userLogin(user,pass){
            console.log(user)
            this.props.requestApiToken();
            
            this.isLogin=true;
            this.currentUser.photo=def;
            this.currentUser.username=user;
            return true;
   }
   render()
  {      const { match, location, history } = this.props
     return (<div>
        <ErrorBoundary>
             {!this.isLogin?<div className="login"></div>:<TopFooter user={this.currentUser} onLogout={()=>{
                     this.isLogin=false;
                     localStorage.removeItem("token")
                     this.currentUser={
                        id:"",
                        username:"",
                        password: "",
                        fullname: "",
                        photo: ""
                     }
                     history.push("/")
             }}/>}
             <Route exact path ="/" render= {({history})=> (
             <Login data={this.props.users} onLogin={(user,pass)=>{
                     if(this.userLogin(user,pass))
                     history.push("/home")
             }}/>
             )}/>
             <Route exact path ="/user/register" render= {({history})=> (
                <Register onRegister={(user)=>{this.props.requestAddUser(user);history.push("/home")}}/>
                )}/>
                  
             <Route exact path ="/home" render= {({history})=> (
                <Home />
                )}/>  
                <Route exact path ="/Profile" render= {({history})=> (
                        <Photo posts={_photos}  onUpdate={(x)=>{this.userUpdateProfile(x);history.push("/home")}}/>
                        )}/> 
                <Route exact path ="/users" render= {({history})=> (
                
                <Suspense fallback={<div>Loading....</div>}>       
                <Users onGetUsers={()=>{this.props.requestApiUsers(0,5)}}  {...this.props}/>
                </Suspense>
                
               )}/> 
                
             <div className="footer"></div>
             </ErrorBoundary>
             </div>)
    }   
}
export default Main