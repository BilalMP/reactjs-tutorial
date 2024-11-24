import React,{useState} from 'react'
import { counterContext } from '../context/context'
import Basic from '../components/ContextProvider/Basic'

const ContextProvider = () => {
    const [count, setCount] = useState(10)
    return (
        <counterContext.Provider value={{ count, setCount }}>
            <Basic />
        </counterContext.Provider>
    )
}

export default ContextProvider