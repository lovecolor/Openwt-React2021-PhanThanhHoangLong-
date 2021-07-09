import { useCallback, useEffect, useState } from "react";
import useAsync from "./use-async";

const useAction  = (asyncFunction: (...data:any[]) => any)  => {
    let isTrue=true
    // let loading=false
    // let result=null
    // let errors=null
    let dataFunc=()=>asyncFunction("p1")
    // setDataFunc(()=>asyncFunction("p1"))
    const {loading,errors,result,sendRequest}=useAsync(isTrue?()=>asyncFunction("p2"):()=>asyncFunction("p1"))
    const run = async  (...data:any[])=> {
            // setLoading(true)
            // try {

            //     const responseData = await asyncFunction(data);
            //     setLoading(false)
            //     setResult(responseData)

            // } catch (error) {

            //     setLoading(false)
            //     setErrors([...(error.message || 'Something went wrong!')])

            // }
            
            // setDataFunc(()=>asyncFunction(data))
            // sendRequest(data)
            // setDataFunc(()=>asyncFunction(...data))
            
            dataFunc=()=>asyncFunction("p2")
            isTrue=!isTrue
            sendRequest()
        }
       
    ;
    
    
    return {
        run,
        loading,
        result,
        errors
    };
}
export default useAction


