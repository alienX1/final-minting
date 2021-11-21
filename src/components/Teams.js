import React from 'react';
import './Teams.css'

function Teams() {
    return (
        <div className='Teams'>
            <p className='Team_heading'>Teams</p>
            <div className="Ceo">
                <div className="Team_ceo">
                    <img src="/images/ceo.jpg" alt="" />
                </div>
                <div className='Ceo_detail'>
                    <img className='crown' src="/images/crown.png" alt="" />
                    <p className='Ceo_tag'>NAME</p>
                    <p>CEO</p>
                    <div className="Ceo_social">
                        <img src="/images/twitter.png" alt="" />
                        <div className="img"></div>
                    </div>
                </div>
            </div>

            <div className="Team_member">
                <div className="team_one">
                    <div className="Team_member_list">
                        <div className="Team_employee">
                            <img src="/images/ceo.jpg" alt="" />
                        </div>
                        <div className='Employee_detail'>
                            <p className='Employee_name'>NAME</p>
                            <p>CEO</p>
                            <div className="Employee_social">
                                <img src="/images/twitter.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="Team_member_list">
                        <div className="Team_employee">
                            <img src="/images/ceo.jpg" alt="" />
                        </div>
                        <div className='Employee_detail'>
                            <p className='Employee_name'>NAME</p>
                            <p>CEO</p>
                            <div className="Employee_social">
                                <img src="/images/twitter.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="team_two">
                    <div className="Team_member_list">
                        <div className="Team_employee">
                            <img src="/images/ceo.jpg" alt="" />
                        </div>
                        <div className='Employee_detail'>
                            <p className='Employee_name'>NAME</p>
                            <p>CEO</p>
                            <div className="Employee_social">
                                <img src="/images/twitter.png" alt="" />
                                <img src="/images/discord.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="Team_member_list">
                        <div className="Team_employee">
                            <img src="/images/ceo.jpg" alt="" />
                        </div>
                        <div className='Employee_detail'>
                            <p className='Employee_name'>NAME</p>
                            <p>CEO</p>
                            <div className="Employee_social">
                                <img src="/images/twitter.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teams
