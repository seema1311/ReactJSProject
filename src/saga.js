import {all,call,put,takeLatest} from "redux-saga/effects"
import {REQUEST_API_DATA,REQUEST_API_USERS,REQUEST_REMOVE_USER,REQUEST_ADD_USER,REQUEST_EDIT_USER,receiveEditUser,receiveApiToken,receiveRemoveUser,receiveApiUsers,receiveAddUser} from "./redux/sagaActions"
import {fetchToken,fetchUsers,deleteUser,addUser,editUser} from "./api"

function* getApiToken(action){
    //console.log("hey i am saga")
    try{
        const token=yield call(fetchToken);
       // console.log("token token  "+token)
        yield put(receiveApiToken(token));
    }
    catch(e){
        console.log("i am also error" +e)
    }
}
function* getApiUsers(action){
    //console.log("hey i am user saga "+JSON.stringify(action))
    try{
        const users=yield call(fetchUsers,action);
      //  console.log("users  "+users)
        yield put(receiveApiUsers(users));
    }
    catch(e){
        console.log(" users i am also error" +e)
    }
}
function* getRemoveUser(action){
   // console.log("hey i am user saga")
    try{
        const user=yield call(deleteUser,action.id);
      //  console.log("users  "+user.id)
        yield put(receiveRemoveUser(action.id));
    }
    catch(e){
        console.log(" users i am also error" +e)
    }
}
function* getAddUser(action){
   // console.log("hey i am user saga")
    try{
        const user=yield call(addUser,action.user);
    //    console.log("users  "+user)
        yield put(receiveAddUser(user));
    }
    catch(e){
        console.log(" users i am also error" +e)
    }
}
function* getEditUser(action){
    //console.log("hey i am user saga"+JSON.stringify(action.user))
    try{
        const user=yield call(editUser,action.user);
       // console.log("users  "+user)

        yield put(receiveEditUser(user));

    }
    catch(e){
        console.log(" users i am also error" +e)
    }
}

export default function* mySaga(){
    yield all([takeLatest(REQUEST_API_DATA,getApiToken), takeLatest(REQUEST_API_USERS,getApiUsers)
    ,takeLatest(REQUEST_REMOVE_USER,getRemoveUser),takeLatest(REQUEST_ADD_USER,getAddUser),takeLatest(REQUEST_EDIT_USER,getEditUser)])
    //yield takeLatest(REQUEST_API_USERS,getApiUsers);
}

