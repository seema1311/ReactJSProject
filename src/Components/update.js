import React from 'react'
import def from "../photos/default.png";
import { Link } from 'react-router-dom';
function Update(props){
    const name=React.useRef();
    const username=React.useRef();
    const password=React.useRef();
    const phone1=React.useRef();
    const DOB=React.useRef();
    const AGE=React.useRef();
    function setAge(){
    
      var date = new Date(DOB.current.value);
              var today = new Date();
  
              var timeDiff = Math.abs(today.getTime() - date.getTime());
              var age = String(Math.ceil(timeDiff / (1000 * 3600 * 24)/365));
              document.getElementById("a").value=age;
  }
function handleUpdate()
{    
        const user=String(username.current.value)
        const pass=String(password.current.value)
        const full=String(name.current.value)
        const phone=String(phone1.current.value)
        const dob=String(DOB.current.value)
        const age=String(AGE.current.value)
        const newuser={id:props.user.id,
                    firstName:"",
                    lastName:"",
                    role:"",
                    country:"",
                    dob:"",
                    age:""}
        if(user)
           newuser.lastName=user;
        else newuser.lastName=props.user.lastName;

        if(pass)
           newuser.role=pass;
        else newuser.role=props.user.role;

        if(phone)
           newuser.country=phone;
        else newuser.country=props.user.country;

        if(full)
           newuser.firstName=full;
        else newuser.firstName=props.user.firstName;

        if(dob)
           newuser.dob=dob;
        else newuser.dob=props.user.dob;

        if(age)
           newuser.age=age;
        else newuser.age=props.user.age;
        
        props.updateRequest(newuser)
        props.onUpdate()
           
}
return (<div>
            
    <div className="form1">
   
    <form onSubmit={handleUpdate}>
    <h5 style={{textAlign:"left"}}>first name :</h5>
    <input type="text" defaultValue={props.user.firstName}ref={name}/>
    <h5 style={{textAlign:"left"}}>last name :</h5>
    <input type="text" defaultValue={props.user.lastName}  ref={username}/>
    <h5 style={{textAlign:"left"}}>role :</h5>
    <input type="text" defaultValue={props.user.role} ref={password}/>
    <h5 style={{textAlign:"left"}}>country :</h5>
    <input type="text" defaultValue={props.user.country} ref={phone1}/>
    <h5 style={{textAlign:"left"}}>dob :</h5>
    <input type="date" defaultValue={props.user.dob} ref={DOB}  onChange={setAge}/>
    <h5 style={{textAlign:"left"}}>age :</h5>
    <input type="text"id="a" defaultValue={props.user.age} ref={AGE}/>
    <button >Update</button>
    
    </form>
    </div>
 </div>
)
}
export default Update