import React,{useState} from 'react'

const State = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>State - count</p>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>Add one</button>
        </div>
    )
}

export default State