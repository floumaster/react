import React, { useContext } from 'react'
import Context from './context'

function PopularBoxes() {
    const {popularBoxes} = useContext(Context);
    return(
        popularBoxes.map((currval, index, arr)=>{
            let classn = index!==arr.length-1 ? 'default-link-div':'left-link-div'
            return (
            <div className={classn} key={index} style={{width: `${100/arr.length}%`, alignContent:'center'}}>
                <img src={currval[0]} alt="box-logo" style={{width: `65%`, display:'block', marginLeft: 'auto', marginRight: 'auto'}}/>
                <h2>{currval[1]}</h2>
                <hr className="line"/>
                <a className="a-btn">{currval[2]}</a>
            </div>)
        })
    );
}

export default PopularBoxes;