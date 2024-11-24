import React,{useContext} from 'react'
import { counterContext } from '../../context/context'

const Basic = () => {

    const count = useContext(counterContext)

    return (
        <div>
            <p>Basic</p>
            <p>{count.count}</p>
        </div>
    )
}

export default Basic