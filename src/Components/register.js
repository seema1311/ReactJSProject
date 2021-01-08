import React from 'react'
function Register(props){
    let age=""
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
            age = String(Math.ceil(timeDiff / (1000 * 3600 * 24)/365));
            document.getElementById("age").value=age;
}
function handleRegister()
{   
        const last=String(username.current.value)
        const role=String(password.current.value)
        const first=String(name.current.value)
        const country=String(phone1.current.value)
        const dob=String(DOB.current.value)
        const age=String(AGE.current.value)
        const newuser={
                    firstName:first,
                    lastName:last,
                    role:role,
                    country:country,
                dob:dob,
            age:age}
        if(first && last&& role && country)
        {   
            props.onRegister(newuser)}
           
}
return (<div>
            
    <div className="form1">
    <h1>Register page </h1>
    <form onSubmit={handleRegister}>
    <h5 style={{textAlign:"left"}}>first name :</h5>
    <input type="text"  ref={name}/>
    <h5 style={{textAlign:"left"}}>last name :</h5>
    <input type="text"  ref={username}/>
    <h5 style={{textAlign:"left"}}>role :</h5>
    <input type="text"  ref={password}/>
    <h5 style={{textAlign:"left"}}>country :</h5>
    <input type="text"  ref={phone1}/>
    <h5 style={{textAlign:"left"}}>DOB :</h5>
    <input type="date" ref={DOB} onChange={setAge} />
    <h5 style={{textAlign:"left"}}>age :</h5>
    <input type="text" id="age" ref={AGE}/>
    <button >Add</button>
    
    </form>
    </div>
 </div>
)
}
export default Register