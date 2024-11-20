import React from 'react'

const SpreadingProps = () => {

    const myProps = {
        className: "myClass",
        id: "myId"
    }

    return (
        <div {...myProps}>
            Hello World
        </div>
    )
}

export default SpreadingProps