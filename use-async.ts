import { useCallback, useEffect, useReducer, useState } from "react";





const useAsync = (asyncFunction: (...data: any[]) => any, startWithPending = false) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [errors, setErrors] = useState<string[] | null>(null)
  const [result, setResult] = useState<any>(null)

  const run = useCallback(
    async (...data: any[]) => {

      setLoading(true)
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
    startWithPending && run()
  }, [])
  return {
    run,
    loading,
    errors,
    result
  };
}
export default useAsync