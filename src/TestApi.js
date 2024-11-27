import React, { useEffect, useState } from 'react'
import axios from 'axios'
const TestApi = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        const fetchData = async() => {
            try{
                const response = await axios.get('https://retoolapi.dev/RcbaoW/data')
                console.log(response.data)
                setData(response.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
    },[])
  return (
    <div>
        
    <h1>Hi</h1>
    <ul>
        {data.map((item, index)=>(
            <li key={index}>{item.name}</li>
        ))}
    </ul>
    </div>
  )
}

export default TestApi