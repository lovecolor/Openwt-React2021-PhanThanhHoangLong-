import { useCallback, useEffect, useState } from "react";




const useAction = (asyncFunction: (data: any) => any) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [errors, setErrors] = useState<string[] | null>(null)
    const [result, setResult] = useState<any>(null)

    const run = useCallback(
        async function (data: any) {
            setLoading(true)
            try {

                const responseData = await asyncFunction(data);



                setLoading(false)
                setResult(responseData)

            } catch (error) {

                setLoading(false)
                setErrors([...(error.message || 'Something went wrong!')])

            }
        },
        [asyncFunction]
    );

    return {
        run,
        loading,
        result,
        errors
    };
}
export default useAction