import axios from 'axios'
export const fetchToken=async ()=>{
   try{ //console.log("calling api")
  
   const config={ method:"POST",
   
   headers:{"Content-Type":"application/json"},
   body:JSON.stringify({
     firstName:"Seema",
     lastName:"Devi",
     role:"role",
     country:"india"
   })
  }
  //var a="hoho"
  return axios("http://localhost:5000/api/user/login",config).then((res)=>{
 // console.log("after api call   "+JSON.stringify(res.data.token))
     return JSON.stringify(res.data.token)})
     
   //return a
   }
   catch(e){
       console.log("I am Error"+e)
   }
}

export const fetchUsers=async (action)=>{
   try{ 
     //console.log("calling  user api")
   const token=localStorage.getItem("token")
   //console.log("checking token   "+token)
   const off=Number(Math.floor(action.offset/action.limit)+1)
   return axios.get(`http://localhost:3000/users?_page=${off}&_limit=${action.limit}`, {
      
  },  {headers: { "Content-Type": "application/json" , "authorization":JSON.parse(token)
}}).then((res) => {
    //console.log(res);
   return res.data})
   }
   catch(e){
       console.log("I am Error"+e)
   }
}


export const deleteUser=async (id)=>{
  try{ 
    //console.log("calling  user api")
  const token=localStorage.getItem("token")
 // console.log("checking token   "+token)
  const config={ method:"DELETE",
  
  headers:{"Content-Type":"application/json",
         "authorization":JSON.parse(token)},
  body:JSON.stringify({
    
  })
 }
 //var a="hoho"
 return axios(`http://localhost:3000/users/${id}`,config).then((res)=>{
 //console.log("after api call   "+JSON.stringify(res.data))

    return res.data})
    
  //return a
  }
  catch(e){
      console.log("I am Error"+e)
  }
}

export const addUser=async (user)=>{
//   try{ console.log("calling  user api")
//   const token=localStorage.getItem("token")
//   console.log("checking token seema   "+JSON.stringify(user))
//   const config={ method:"POST",
  
//   headers:{"Content-Type":"application/json",
//             'Accept': 'application/json',
//          "authorization":JSON.parse(token)},
//   body:{JSON.stringify(user)}
//  }
//  console.log("configureation   "+JSON.stringify(config))
//  return axios(`http://localhost:5000/api/user/create`,config).then((res)=>{
//  console.log("after api call   "+JSON.stringify(res.data))
//     return res.data})
//}
  //return a
  try{
    const token=localStorage.getItem("token")
     return axios.post("http://localhost:3000/users", {
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      country: user.country,
      dob:user.dob,
      age:user.age
  },  {headers: { "Content-Type": "application/json" , "authorization":JSON.parse(token)
}}).then((res) => {
    //console.log(res);
   return res.data})
  
  }
  
  catch(e){
      console.log("I am Error"+e)
  }
}

export const editUser=async (user)=>{
  try{ 
    //console.log("error  "+user)
    const token=localStorage.getItem("token")
    //console.log("error 2 "+token)
     return axios.put(`http://localhost:3000/users/${user.id}`, {
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      country: user.country,
      dob: user.dob,
      age: user.age
  },  {headers: { "Content-Type": "application/json" , "authorization":JSON.parse(token)
}}).then((res) => {
   // console.log(res.data);
   return res.data})
  
  }
  
  
  catch(e){
      console.log("I am Error"+e)
  }
}






    



