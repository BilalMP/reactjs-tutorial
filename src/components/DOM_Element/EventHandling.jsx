import React from 'react'

const EventHandling = () => {
    const handleClick = () => {
        console.log("Button Clicked")
    }
    return (
        <div>
            <p>Event Handling</p>
            <button onClick={handleClick}>
                Click Me
            </button>
        </div>
    )
}

export default EventHandling