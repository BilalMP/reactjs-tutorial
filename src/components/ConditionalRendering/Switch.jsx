import React from 'react'

const Switch = () => {
    return (
        <div>
            Switch
            <Greeting user="guest" />
            <Greeting user="admin" />
            <Greeting />
        </div>
    )
}

export default Switch

const Greeting = (props) => {
    switch (props.user) {
        case 'guest':
            return <p>hello guest</p>;
        case 'admin':
            return <p>hello admin</p>;
        default:
            return <p>hello user</p>;
    }
}