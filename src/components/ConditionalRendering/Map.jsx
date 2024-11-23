import React from 'react'

const items = [
    { id: 1, name: 'Item 1', isAvailable: true },
    { id: 2, name: 'Item 2', isAvailable: false },
    { id: 3, name: 'Item 3', isAvailable: true },
];

const Map = () => {
    return (
        <div>
            Map
            <ItemList items={items} />
        </div>
    )
}

export default Map

const ItemList = (props) => {
    return (
        <div>
            <ul>
                {props.items.map((item, index) => (
                    <li key={index}>
                        {item.isAvailable ? (
                            <p>{item.name}</p>
                        ) : (
                            <p>Out of stock</p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}