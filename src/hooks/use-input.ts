import { useState } from "react"

const useInput=(validateValue:any)=>{
    const [value,setValue]=useState("")
    const [isTouched,setIsTouched]=useState(false)
    const valueIsValid=validateValue(value)
    const hasError=!valueIsValid&&isTouched
    const valueChangeHandler=(e:any)=>{
        setValue(e.target.value)
    }
    const ipBlurHandler=()=>{
        setIsTouched(true)
    }
    const reset=()=>{
        setValue("")
    }
    return {
        value,
        isValid:valueIsValid,
        hasError,
        valueChangeHandler,
        ipBlurHandler,
        reset,

    }
}
export default useInput