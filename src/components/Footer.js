import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='Footer'>
            <div className="Footer_copyright">
                <p>©2021 CRYPTO.CHICKS</p>
            </div>

            <div className="Footer_navigator">
                <ul>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">ROADMAP</a></li>
                    <li><a href="">TEAM</a></li>
                    <li><a href="">MINT</a></li>
                </ul>
            </div>

            <div className="Footer_social">
                <img src="/images/twitter.png" alt="" />
                <img src="/images/instagram.png" alt="" />
                <img src="/images/discord.png" alt="" />
                <img src="/images/tik-tok.png" alt="" />
            </div>
        </div>
    )
}

export default Footer
