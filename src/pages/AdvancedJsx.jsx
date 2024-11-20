import React from 'react'
import Conditional from '../components/AdvancedJsx/Conditional'
import ListRendering from '../components/AdvancedJsx/ListRendering'
import InlineExpression from '../components/AdvancedJsx/InlineExpression'
import ComplexExpression from '../components/AdvancedJsx/ComplexExpression'
import SpreadingProps from '../components/AdvancedJsx/SpreadingProps'
import Parent from '../components/AdvancedJsx/Parent'

const AdvancedJsx = () => {
    return (
        <>
            <Conditional />
            <ListRendering />
            <InlineExpression />
            <ComplexExpression />
            <SpreadingProps />
            <Parent/>
        </>
    )
}

export default AdvancedJsx