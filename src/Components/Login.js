import React from 'react'
import { Link } from 'react-router-dom';
function Login(props){
        const username=React.useRef();
        const password=React.useRef();
        function handleLogin(){

             props.onLogin(username.current.value,password.current.value)
        }
       return(<div>
          
            <div className="form">
            <h1>Login page</h1>
            <form>
            <input type="text" placeholder="username" ref={username}/>
            <input  type="password" placeholder="password" ref={password}/>
            <button onClick={handleLogin}>Login</button>
            </form>
            </div>
        </div>)
}
export default Login

// {
            //  !this.props.valid ?<p style={{color:"red"}}>Login error !!!!</p>:<div></div>
            // }