import React from 'react'
import Spread from '../components/ArrayImmutability/Spread'
import Concat from '../components/ArrayImmutability/Concat'
import Slice from '../components/ArrayImmutability/Slice'
import Splice from '../components/ArrayImmutability/Splice'
import Map from '../components/ArrayImmutability/Map'
import Filter from '../components/ArrayImmutability/Filter'

const ArrayImmutability = () => {
    return (
        <>
            <Spread />
            <Concat />
            <Slice />
            <Splice />
            <Map />
            <Filter />
        </>
    )
}

export default ArrayImmutability