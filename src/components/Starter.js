import React from 'react';
import './Starter.css';

function Starter() {
    return (
        <div id='mint' className='Starter'>

            {/* Insert Vedio Here by replacing image  */}
            <div className="Starter_vedio">
                <img src="/images/girl2.jpg" alt="" />
            </div>

            <div className="Starter_text">
                <p className='Stater_header'>Sold Out</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
                    quaerat excepturi, perspiciatis officiis non maxime esse deserunt
                    asperiores modi distinctio harum totam magni. Voluptatum
                    nesciunt eius quasi, minima cumque facilis?</p>

                <div className='Starter_navigator'>
                    <button>
                        <div className="Starter_image"></div>
                        <h4>OPENSEA</h4>
                    </button>
                    <div className="mint_stat">
                        {/* insert image you want in src */}
                        <div className="Starter_image"></div>
                        <p>MINT COUNT 10000/10000</p>
                    </div>
                </div>
            </div>

            {/* Insert Vedio Here by replacing image  */}
            <div className="Starter_images">
                <img src="/images/girl2.jpg" alt="" />
            </div>
        </div>
    )
}

export default Starter
