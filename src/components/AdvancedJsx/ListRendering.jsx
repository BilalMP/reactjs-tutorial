import React from 'react'

const ListRendering = () => {
    const items = [
        'item1',
        'item2',
        'item3'
    ];

    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    )
}

export default ListRendering