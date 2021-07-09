import { useCallback, useReducer } from "react";

function asyncReducer(state:{
    loading:boolean,
    result:any,
    errors:string[]|null
}, action:any) {
    if (action.type === 'SEND') {
      return {
        result: null,
        errors: null,
        loading: true,
      };
    }
  
    if (action.type === 'SUCCESS') {
      
      return {
        result: action.responseData,
        errors: null,
        loading: false,
      };
    }
  
    if (action.type === 'ERROR') {
      return {
        result: null,
        errors: action.errorMessage,
        loading: false,
      };
    }
  
    return state;
  }



const useAsync=(asyncFunction:()=>any)=>{
    const [asyncState, dispatch]=useReducer(asyncReducer,{
        
        result: null,
        errors: null,
        loading:  false,
      })
      const sendRequest = useCallback(
        async function () {
          dispatch({ type: 'SEND' });
          try {
    
            const responseData = await asyncFunction();
            
            
           
            
            dispatch({ type: 'SUCCESS', responseData });
          } catch (error) {
    
            
            dispatch({
              type: 'ERROR',
              
              errorMessage: [...(error.message || 'Something went wrong!')],
            });
          }
        },
        [asyncFunction]
      );
      return {
        sendRequest,
        ...asyncState,
      };
}
export default useAsync