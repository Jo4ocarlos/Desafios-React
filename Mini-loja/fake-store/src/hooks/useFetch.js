import { useEffect, useState } from "react"

export const useFetch = (url)=>{

    const [data, setData] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    useEffect(()=>{

        try {
            const fetchData = async ()=>{
            const response = await fetch(url)
            const json = await response.json()

            setData(json)

        }
            fetchData()

        } catch (error) {
            console.log(`o erro é ${error}`)
        }
      
        
    }, [])
return {data}
 
}