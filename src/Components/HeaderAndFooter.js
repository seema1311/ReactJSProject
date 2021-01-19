import React,{Component} from 'react'
import logo from "../photos/logo.png";
import { Link } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import '../sidebarCss.scss'
import VisibilityIcon from '@material-ui/icons/Visibility';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ViewListIcon from '@material-ui/icons/ViewList';
function TopFooter(props){
   const [button,setButton]=React.useState(false);
       console.log("TopFooter")
       return(<div>
                         <div className="top">
                        
                          <div className="shiftleft">
                          <img className="photo" src={props.user.photo} alt="profile" id="profile"/>
                          <div className="name"><FiberManualRecordIcon/>{props.user.username}</div>
                  
                          
                          </div> 
                          
                          
                          <div className="shiftmiddle">
                            <Link to="/users" className="links">show Users</Link>
                            <Link to="/user/register" className="links">add User</Link>
                            <Link to="/Profile" className="links">change Profile</Link> 
                            </div>
                          <div className="shiftright">
                          <img className="logo" src={logo} alt="Logo" id="logo"></img>
                          <h4 onClick={props.onLogout}>Logout <PowerSettingsNewIcon/></h4>
                          
                          </div>
                          </div>
                         
                          <div className="middle">
                          {button && <div className="hambug1" onClick={()=>{setButton(!button)}}>&#8592;
                          </div>}
                          { !button && <div onCli className="hambug" onClick={()=>{setButton(!button)}}>&#9776;
                          </div>}
                          <div className="Sidebar">
                           
                         
                           
                         {button && <ProSidebar>
                            <Menu iconShape="square">
                              <MenuItem icon={<VisibilityIcon/>}><Link to="/users" className="links">show Users</Link></MenuItem>
                              <MenuItem icon={<PersonAddIcon/>}><Link to="/user/register" className="links">add User</Link></MenuItem>
                              <MenuItem icon={<AccountCircleIcon />}><Link to="/Profile" className="links">change Profile</Link></MenuItem>
                              <MenuItem icon={<ViewListIcon />}><Link to="/todo" className="links">Todos</Link></MenuItem>
                              <MenuItem icon={<ExitToAppIcon/>}><Link to="/" onClick={props.onLogout} className="links">Exit</Link></MenuItem>
                            </Menu>
                          </ProSidebar>}
                              </div>
                              
                              </div>


                       </div>  
       )
}
export default React.memo(TopFooter)

//8921






 



                            
                            
  