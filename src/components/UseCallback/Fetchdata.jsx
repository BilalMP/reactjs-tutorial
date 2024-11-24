import React, { useState,useEffect, useCallback } from 'react'

const Fetchdata = () => {

    const [data, setData] = useState(null)

    const fetchData = useCallback(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => setData(data))
    },[])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    useEffect(() => {
        console.log("data updated", data)
    }, [data])
    
    return (
        <div>Fetchdata</div>
    )
}

export default Fetchdata