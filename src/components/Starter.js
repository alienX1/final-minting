import React from 'react';
import './Starter.css';

function Starter() {

    return (
        <div id='mint' className='Starter'>
            <div className="Starter_vedio">
                <img src="https://www.cryptochicks.app/images/prefaceMain/chicks.gif" alt="" />
            </div>

            <div className="Starter_text">
                <p className='Stater_header'>Sold Out</p>

                <p id="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
                    quaerat excepturi, perspiciatis officiis non maxime esse deserunt
                    asperiores modi distinctio harum totam magni. Voluptatum
                    nesciunt eius quasi, minima cumque facilis?</p>

                <div className='Starter_navigator'>
                    <button className="Mint_btn">
                        <div className="Starter_image"></div>
                        <h4>OPENSEA</h4>
                    </button>
                    <button className="mint_stat">
                        <img src="/images/pic.jpg" alt="" />
                        <p>MINT COUNT 1000/1000</p>
                    </button>
                </div>
            </div>

            <div className="Starter_images">
                <img src="https://www.cryptochicks.app/images/prefaceMain/chicks.gif" alt="" />
            </div>
        </div>
    )
}

export default Starter;
