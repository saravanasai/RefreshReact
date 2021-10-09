import { useEffect,useState } from "react"

const useFetch = (url)=>{

  const [data,setData]=useState(null);
  const [is_pending,setpending]=useState(true);
  const [error,seterror]=useState(null);
   
     

    useEffect(()=>{

      const abortCon=new AbortController();

        fetch(url,{signal: abortCon.signal})
        .then(res=>{
          if(!res.ok)
          {
             throw Error('Could not get Resource');
          }
          return res.json();
        }).then(data=>{
           setData(data);
           setpending(false);
           seterror(null);
        }).catch(err=>{
           if(err.name==="AbortError")
           {
              console.log("fetch aborted");
           }
           else
           {
            setpending(false);
            seterror(err.message);
           }  
        })
      
        return ()=>abortCon.abort();
        
   },[url]);


   return {data,is_pending,error};

}

export default useFetch;