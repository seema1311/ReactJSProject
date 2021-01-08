import React,{Component} from 'react'
import logo from "../photos/logo.png";
import { Link } from 'react-router-dom';
function TopFooter(props){
    
       return(
        <div className="top">
                          <div className="shiftleft">
                          <img className="photo" src={props.user.photo} alt="profile" id="profile"/>
                          <h2>{props.user.username}</h2>
                          </div>
                          <div className="shiftmiddle">
                            <Link to="/users" className="links">show Users</Link>
                            <Link to="/user/register" className="links">add User</Link>
                            <Link to="/Profile" className="links">change Profile</Link> 
                            </div>
                          <div className="shiftright">
                          <img className="logo" src={logo} alt="Logo" id="logo"></img>
                          <h4 onClick={props.onLogout}>Logout</h4>
                          </div>
                          
                          
                       
                          
                       </div>  
       )
}
export default TopFooter
  