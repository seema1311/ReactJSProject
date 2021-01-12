 export function requestRemoveUser(index){
    //console.log("remove called")
     return { type : 'REQUEST_REMOVE_USER',
              id: index
            }
 }
  export function requestAddUser(user){
   // console.log("adduser called")
      return { type :'REQUEST_ADD_USER',
               user : user
            }
}

export function requestEditUser(user){
 // console.log("edituser called")
    return { type :'REQUEST_EDIT_USER',
             user : user
          }
}

export function requestApiToken(){
 // console.log("request Api Token called")
       return {
         type:'REQUEST_API_DATA',
       }
}

export function requestApiUsers(off,lim){
 // console.log("request Api Users called  "+off + lim)
       return {
         type:'REQUEST_API_USERS',
         offset:off,
         limit:lim
       }
}