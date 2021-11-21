import React from 'react';
import './About.css';

function About() {
    return (
        <div className='About'>
            <p className='About_heading'>About</p>
            <p>The Crypto.Chicks is the 2nd generation of the Crypto.Chick
                1/1 which was the first female avatar collection published
                on Opensea in May 2021. The Crypto.Chicks Collection was
                created to highlight the importance of women in the crypto
                space and reflects the individuality and uniqueness of
                every woman.
                <br />
                The collection is based on the Ethereum blockchain and
                includes 10k unique gorgeous girls. Every girl has various
                rare attributes and features, some of them occurring only
                once!
            </p>

            <div className="About_buttons">

                <button>
                    <img src="/images/discord.png" alt="" />
                    <p>DISCORD</p>
                </button>
                <button>
                    <img src="/images/twitter.png" alt="" />
                    <p>TWITTER</p>
                </button>
                <button><div className="img"></div><p>OPENSEA</p></button>
            </div>
        </div>
    )
}

export default About
