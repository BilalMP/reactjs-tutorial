import React, { useState, useEffect } from 'react'

const BasicFetching = () => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
                const json = await response.json()
                setData(json)
            } catch (error) {
                setError(error)
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            {data ? (
                <div>
                    {data.title}
                </div>
            ) : (<div>Loading...</div>)}
            {error && <div>Error: {error.message}</div>}
        </div>
    )
}

export default BasicFetching