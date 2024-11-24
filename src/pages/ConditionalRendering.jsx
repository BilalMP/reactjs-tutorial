import React from 'react'
import IfElse from '../components/ConditionalRendering/IfElse'
import Ternary from '../components/ConditionalRendering/Ternary'
import Operator from '../components/ConditionalRendering/Operator'
import Switch from '../components/ConditionalRendering/Switch'
import Map from '../components/ConditionalRendering/Map'

const ConditionalRendering = () => {
    return (
        <div>
            <IfElse />
            <Ternary />
            <Operator />
            <Switch />
            <Map />
        </div>
    )
}

export default ConditionalRendering