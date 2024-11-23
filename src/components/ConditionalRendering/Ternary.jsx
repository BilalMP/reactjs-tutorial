import React from 'react'

const Ternary = () => {
    const isLoggedIn = true
    return (
        <>
            <div>Ternary</div>
            <Greeting isLoggedIn={isLoggedIn} />
        </>
    )
}

export default Ternary

const Greeting = (props) => {
    return (
        <p>{props.isLoggedIn ? 'hello World' : 'hello guest'}</p>
    )
}