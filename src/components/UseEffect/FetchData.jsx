import React,{useEffect,useState} from 'react'

const FetchData = () => {

    const [data, setData] = useState([])
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(res => res.json())
            .then(data => setData(data))
    },[])

    return (
        <div>
            FetchData
            <p>{data.title}</p>
        </div>
    )
}

export default FetchData