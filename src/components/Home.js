import React from 'react';
import About from './About';
import Roadmap from './Roadmap';
import Starter from './Starter';
import Teams from './Teams';
import Timer from './Timer';
import FAQ from './FAQ';
import CurasolMulti from './CurasolMulti';

function Home() {
    return (
        <div>
            <Timer />

            <Starter />
            <hr />
            <About />
            <hr />
            <CurasolMulti/>
            <hr />
            <Roadmap />
            <hr />
            <FAQ />

            <hr />
            <Teams />
            <hr />
        </div>
    )
}

export default Home
