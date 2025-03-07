export const fetchUser=()=>{
    return async(dispatch)=>{
        dispatch({type:"FETCH_USER_REQUEST"});
        try {
            const response=await fetch("https://jsonplaceholder.typicode.com/users")
            const data=await response.json();
            dispatch({type:"FETCH_USER_SECCESS",payload:data})
        } catch (error) {
            dispatch({type:"FETCH_DATA_FAILURE",payload:error.message})
            
        }
    }
}