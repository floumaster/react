import React, { useContext } from 'react'
import Context from './context'

function WayBoxes() {
    const {wayBoxes} = useContext(Context);
    return(
        wayBoxes.map((currval, index, arr)=>{
            let classn = index!==arr.length-1 ? 'default-link-div':'left-link-div'
            return (
            <div className={classn} key={index} style={{width: `${100/arr.length}%`, alignContent:'center'}}>
                <h2>{currval[0]}</h2>
                <img src={currval[1]} alt="box-logo" style={{width: `90%`, display:'block', marginLeft: 'auto', marginRight: 'auto'}}/>
                <a className="a-discription">{currval[2]}</a>
                <a className="a-btn">{currval[3]}</a>
            </div>)
        })
    );
}

export default WayBoxes;