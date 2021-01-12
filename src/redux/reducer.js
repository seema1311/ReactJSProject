import _users from '../data/users'
//the name of the function should be same as the name of the state
const initial={
  users:_users,
  token:""
}
const postReducer=function users(state =initial , action){
     // console.log(`reducer call with ${action.type} and data ${JSON.stringify(action.user)}`);
    // return state
     switch(action.type){
         case 'RECEIVE_REMOVE_USER': const afterDelete=state.users.filter(user=>user.id!=action.id)
         console.log("afterDelete "+afterDelete)
         return {users:afterDelete,token:state.token}
         case 'RECEIVE_EDIT_USER':  state.users.forEach(function(item, i) { if (item.id == action.user.id) state.users[i] = action.user; });
                console.log("after update    "+JSON.stringify(state.users))
         return {users:state.users,token:state.token}
         case 'RECEIVE_ADD_USER': return {users:[action.user, ...state.users],token:state.token}
         case 'RECEIVE_API_DATA': return {users:state.users,token:action.token}
         case 'RECEIVE_API_USERS': return {users:action.Users,token:state.token}
         default: return state
     }

}

export default postReducer