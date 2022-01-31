import { useState, useRef, useEffect } from "react"

export const useFetch = (url) => {

    const isMount = useRef(true)

    const [state, setState] = useState({
        data: '', 
        loading: true, 
        error: '',
    })
    
    
    useEffect(()=>{
        return () => {
            isMount.current = false
        }    
    },[])

    useEffect(()=>{
        
      setState({
         data: '', 
         loading: true, 
         error: '',
      }) 

      if(isMount){
        fetch(url)
        .then(resp=> resp.json())
        .then(data=>{
           setState({
              data: data,
              loading: false,
              error: ''
           })
        })
      }
    }, [url])

    return state
}