import React from 'react'

const EventHandlingArgument = () => {
    const handlerEvent = (event, message) => {
        console.log(event)
        console.log(message)
    }
    return (
        <div>
            <p>Event Handling Argument</p>
            <button onClick={(event)=>handlerEvent(event, "Button Clicked")}>Click me </button>
        </div>
    )
}

export default EventHandlingArgument