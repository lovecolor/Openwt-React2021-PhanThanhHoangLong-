import { useCallback, useEffect, useReducer, useState } from "react";





const useAsync = (asyncFunction: (...data: any[]) => any, startWithPending = false) => {
  const [loadding, setLoadding] = useState<boolean>(false)
  const [errors, setErrors] = useState<string[] | null>(null)
  const [result, setResult] = useState<any>(null)

  const sendRequest = useCallback(
    async (...data: any[]) => {

      setLoadding(true)
      try {

        const responseData = await asyncFunction(...data);
        setResult(responseData)
      } catch (error) {
        setErrors([...(error.message || 'Something went wrong!')])
      }
    },
    [asyncFunction]
  );

  useEffect(() => {
    startWithPending && sendRequest()
  }, [])
  return {
    sendRequest,
    loadding,
    errors,
    result
  };
}
export default useAsync