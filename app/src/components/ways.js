import React, { useContext } from 'react'
import Context from './context'
import WayBoxes from './wayBoxes'

function Ways() {
    return(
        <div className="ways">
            <div className="ways-text">
                <h4>NEW HERE? LET US SHOW YOU AROUND!</h4>
                <h2>Here are three ways to shop:</h2>
            </div>
            <div className="types">
                <WayBoxes/>
            </div>
        </div>
    );
}

export default Ways;