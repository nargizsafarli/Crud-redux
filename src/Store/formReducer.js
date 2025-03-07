const initialState={
    user:[],
    loading:false,
    error:null,
}
const formReducer=(state=initialState,action)=>{
switch(action.type){
    case "FETCH_USER_REQUEST":
        return{...state,loading:true,error:null}

    case "FETCH_USER_SUCCESS":
        return{...state,loading:false,user:action.payload}    
    case "FETCH_DATA_FAILURE":
        return{...state,loading:false,error:action.payload}  
    default:
        return state;    
}
   
}
export default formReducer;