const initState={
    messages:[
        {deleted:false, idMessage:"qgksBHxk9s8hvr9sRUCP", idUser:"hEEI5d8zp6rkoLAdiXdP", messageDetail:"Hello World this is a messge written to the client forum", forum:"Client"},
        {deleted:false, idMessage:"Fno7c3mWS8av4Zlnn6ds", idUser:"nWM1tXP5zM62VnFDbhqs", messageDetail:"Hello World this is a messge written to the provider forum", forum:"Provider"},
    ]
}

const messageReducer=(state=initState, action)=>{
    return state
}

export default messageReducer;