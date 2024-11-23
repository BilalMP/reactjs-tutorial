import React from 'react'

const IfElse = () => {
    const isLoggedIn = true;

    return (
        <div>
            <p>If Else</p>
            <Greeting isLoggedIn={isLoggedIn} />
        </div>
    );
}
export default IfElse

const Greeting = (props) => {
    if (props.isLoggedIn) {
        return <p>hello World</p>;
    } else {
        return <p>hello guest</p>;
    }
}