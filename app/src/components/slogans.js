import React, { useContext } from 'react'
import Context from './context'

function Slogans(){
    const {curr_ending} = useContext(Context);
    return (
        <div className="slogans">
            <div className="content" style={{backgroundImage: 'url(slogans.png)'}}>
                <a>We make gift boxes that people <strong className="ending">{curr_ending}.</strong></a>
                <a className="a-btn">SHOP OUR GIFT BOXES</a>
            </div>
        </div>
    );
}

export default Slogans;