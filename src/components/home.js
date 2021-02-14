import React from 'react';
import Header from './header'
import Context from './context'
import DescriptionCard from './descriptionCard'
import Slogans from './slogans'
import Ways from './ways'
import Download from './download'
import Popular from './popular'
import Footer from './footer'

function HomePage(){
    return(
        <div>
            <Header/>
            <DescriptionCard/>
            <Slogans/>
            <Ways/>
            <Download/>
            <Popular/>
            <Footer/>
        </div>
    );
}

export default HomePage;