import React from 'react'
function Delete(props){
    
        const old=React.useRef();
        function handleUser(){
       
            
            const new1=String(old.current.value)
            
            props.onDelete(new1)
               
        }
     
        return (<div>
            
            <div className="form1">
            <h1>Enter id of User</h1>
            <form >
            <input type="text" placeholder="Current Password" ref={old}/>
            <button onClick={handleUser}>delete</button>
            
            </form>
            </div>
         </div>
        )   
}
export default Delete