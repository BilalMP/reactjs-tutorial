import React from 'react'
import Parent from '../components/Destructuring/Parent'
import State from '../components/Destructuring/State'
import Nested from '../components/Destructuring/Nested'

const Destructuring = () => {
    const user = {
        name: "John Doe",
        age: 30,
        address: {
            city: "London",
            state: "England"
        }
    }
    return (
        <>
            <Parent />
            <State />
            <Nested user={user} />
        </>
    )
}

export default Destructuring