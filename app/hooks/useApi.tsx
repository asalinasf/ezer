import { useState, useEffect } from "react";


interface UseApiProps {
  url: string;
}

const useApi = ({ url }: UseApiProps) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try{
        const response = await fetch (`${apiUrl}${url}`)
        const json = await response.json()
        setData(json)
      }catch(err:unknown){
        if(err instanceof Error){
          setError(err)
      }else{
        setError (new Error ("An unknown error occurred"))
      }
    }finally{
        setLoading(false)
      }}
    fetchData();
  }, [url])
  return{data, loading, error}
};

export default useApi;
