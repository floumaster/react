import React, { useContext } from 'react'
import Context from './context'
import PopularBoxes from './popularBoxes'

function Popular() {
    return (
        <div className="popular-wrapper">
            <a>Popular Products</a>
            <div className="box-wrapper">
                <PopularBoxes/>
            </div>
        </div>
    );
}

export default Popular;