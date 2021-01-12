import React,{Component} from 'react'
import logo from "../photos/logo.png";
import { Link } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import '../sidebarCss.scss'
import { StepButton } from '@material-ui/core';

function TopFooter(props){
   const [button,setButton]=React.useState(false);
       console.log("TopFooter")
       return(<div>
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
                         
                          <div className="middle">
                          <div className="Sidebar">
                           <a onClick={()=>setButton(!button)}>
                           <div className="hambug"></div>
                           <div className="hambug"></div>
                           <div className="hambug"></div>
                           </a>
                         {button && <ProSidebar>
                            <Menu iconShape="square">
                              <MenuItem icon={<faGem />}><Link to="/users" className="links">show Users</Link></MenuItem>
                              <MenuItem icon={<faGem />}><Link to="/user/register" className="links">add User</Link></MenuItem>
                              <MenuItem icon={<faGem />}><Link to="/Profile" className="links">change Profile</Link></MenuItem>
                              <MenuItem icon={<faGem />}><Link to="/" className="links">Logout</Link></MenuItem>
                            </Menu>
                          </ProSidebar>}
                              </div>
                              <h1>hello</h1>
                              </div>


                       </div>  
       )
}
export default React.memo(TopFooter)






 



                            
                            
  