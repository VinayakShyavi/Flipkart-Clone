import {useState} from "react";
import { useEffect } from "react";


const useFetch = (request) =>
{
    let[data,setData]=useState(null);
    let[pending,setPending] = useState(true)    //to show: is data fetching in pending or not
    let[error,setError] = useState(null)
    


    useEffect(()=>{ 
        //TO ADD SOME LOADING TIME, USING "setTimeout()"
       setTimeout(()=>{
        fetch(request)
        .then((res)=>{
            if (res.ok === true) {
                return res.json();
            }
            else {
                throw Error("Data Not Found")
            }
            
        })
        .then((data)=>{setData(data);setPending(false)})
        .catch((err)=>{setError(err.message); setPending(false)})
       },1000)

    },[])

    return {data, pending, error}
}
export default useFetch;