export const REQUEST_API_DATA="REQUEST_API_DATA"
export const RECEIVE_API_DATA="RECEIVE_API_DATA"
export const REQUEST_API_USERS="REQUEST_API_USERS"
export const RECEIVE_API_USERS="RECEIVE_API_USERS"
export const REQUEST_REMOVE_USER="REQUEST_REMOVE_USER"
export const RECEIVE_REMOVE_USER="RECEIVE_REMOVE_USER"
export const REQUEST_ADD_USER="REQUEST_ADD_USER"
export const RECEIVE_ADD_USER="RECEIVE_ADD_USER"
export const REQUEST_EDIT_USER="REQUEST_EDIT_USER"
export const RECEIVE_EDIT_USER="RECEIVE_EDIT_USER"

export const receiveApiToken=token=>(
    {
        type:RECEIVE_API_DATA,
        token:token
    }
)

export const receiveApiUsers=Users=>(
    {
        type:RECEIVE_API_USERS,
        Users:Users
    }
)

export const receiveRemoveUser=my_id=>(
    {
        type:RECEIVE_REMOVE_USER,
        id:my_id
    }
)

export const receiveAddUser=user=>(
    {
        type:RECEIVE_ADD_USER,
        user:user
    }
)
export const receiveEditUser=user=>(
    {
        type:RECEIVE_EDIT_USER,
        user:user
    }
)