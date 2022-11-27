import React from 'react'
import './Programs.css';
import { programsData } from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';

const Programs = () => {
    return (
        <div className="Programs" id='programs'>
            <div className="programs-header">
                <span className='stroke-text'>Poznaj</span>
                <span>Programy</span>
                <span className='stroke-text'>jakie przygotowaliśmy</span>
            </div>
            <div className="programs-categories">
                {programsData.map((program) => (
                    <div className="category">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now">
                            <span>Dolacz do nas</span>
                            <img src={RightArrow} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Programs