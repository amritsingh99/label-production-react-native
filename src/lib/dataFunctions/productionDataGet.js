import { useState, useEffect } from "react"  

export function getData() {
    const [data2, setData2] = useState([])
  
    useEffect(() => {
      async function GetData() {
        // const response = await fetch('http://54.65.23.155:5001/findAll')
        const response = await fetch('http://localhost:5001/findAll')
        const data = await response.json()
        setData2(data)
      }
      GetData()
    }, [])
    
    return data2;  
  }