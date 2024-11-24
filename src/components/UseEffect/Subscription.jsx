import React, { useEffect } from 'react'
import io from 'socket.io-client';

const Subscription = () => {
    useEffect(() => {
        const socket = io('http://localhost:3000'); // Replace with your server URL

        socket.on('connect', () => {
            console.log('Connected to server');
        });

        socket.on('message', (message) => {
            console.log('Received message:', message);
            // Handle the received message here
        });

        return () => {
            socket.disconnect(); // Clean up on unmount
        };
        
    }, [])

    return (
        <div>Subscription</div>
    )
}

export default Subscription