import React from 'react'
import Pagination from './Pagination'
import Update from "./update";
import Popover from '@material-ui/core/Popover';
import def from "../photos/default.png";

var off=0;
var lim=5;

function Users(props){
        console.log("User render")
        const [page,setPage]=React.useState(1)
        const [user,setUser]=React.useState({})
        const [update,setUpdate]=React.useState(false)
        const [button,setButton]=React.useState("show")
        const [popUser,setPopUser]=React.useState({})
        const [anchorEl, setAnchorEl] = React.useState(null);
       const [show,setShow]=React.useState(false)
        const handleClick = (event,user) => {
            console.log("click")
          setAnchorEl(true);
          setPopUser(user)
        };
      
        const handleClose = () => {
          console.log("close")
          setAnchorEl(null);
          setPopUser({})
        };
      
        const open = Boolean(anchorEl);
        const id = open ? 'simple-popover' : undefined;

        const onPageChanged = React.useCallback(data => {
            const { currentPage, totalPages, pageLimit } = data;
            const offset = (currentPage - 1) * pageLimit;
            console.log("calling backend  "+JSON.stringify(data) )
            //page=currentPage;
           setPage(currentPage)
            off=offset;
            lim=pageLimit;
            props.requestApiUsers(offset,pageLimit)
          },[page,user,update,button,show])

        function handleShowUser(){
                console.log("show user "+show)
                setShow(!show);
                if(button==="show")
                setButton("hide")
                else
                 setButton("show")}
        function handleUpdate(user) {
            setUser(user)
            setUpdate(true)
           
           
        }
        return (<div> 
            {!update && <div>
            <div className="form1-show">
            <button  onClick={handleShowUser}>{button}</button></div>
            {show && <div className="product-display">
            <div className="pages">
            <Pagination currPage={page} totalRecords={50} pageLimit={5} pageNeighbours={1} onPageChanged={(data)=>{onPageChanged(data)}} />
            </div>
                <table>
                <thead>
            <tr >
            <th >ID</th>
            <th >firstName</th>
            <th >lastName</th>
            <th >role</th>
            <th >Country</th>
            <th>Update</th>
            <th>Remove</th>
            
            </tr>
            </thead>
            <tbody>
            {  
               props.users.map((user,index)=>
               <tr aria-describedby={id}   onClick={()=>handleClick(this,user)}>
               <td>{index+off+1}</td>
               <td>{user.firstName}</td>
               <td>{user.lastName}</td>
               <td>{user.role}</td>
               <td>{user.country}</td>
               <td><button onClick={()=>handleUpdate(user)}>Update</button></td>
               <td><button onClick={()=>{props.requestRemoveUser(user.id);props.requestApiUsers(off,lim);props.history.push("/users");}}>Delete</button></td>
               </tr>
               
               )     
            }
            <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
      <div className="popOut">
      
      <div className="pop">
      <h2>{popUser.firstName} {popUser.lastName}</h2>
      
      <div className="popList">
      <h6>Role:</h6>
      <p> {popUser.role}</p>
      </div>
      <div className="popList">
      <h6>Country:</h6>
      <p> {popUser.country}</p>
      </div>
      <div className="popList">
      <h6>Dob:</h6>
      <p> {popUser.dob}</p>
      </div>
      <div className="popList">
      <h6>Age:</h6>
      <p> {popUser.age} {show}</p>
      </div>
      </div>
      <img className="photo" src={def} alt="profile" id="profile"/>
      </div>
      </Popover>
            </tbody>
            </table>
                </div>}
                </div>}
                {
                    update&&<Update user={user} onUpdate={()=>{setUser({});setUpdate(false)}} updateRequest={(user)=>props.requestEditUser(user)}/>
                }
                </div>
            )   
}
export default React.memo(Users)






 
