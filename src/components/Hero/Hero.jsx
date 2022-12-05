import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import Heart from '../../assets/heart.png';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Calories from '../../assets/calories.png';
import NumberCounter from 'number-counter';
import { motion } from 'framer-motion';

const Hero = () => {
    const transition = { type: 'spring', duration: 3 }
    const mobile = window.innerWidth <= 768 ? true : false;

    return (
        <div className="hero">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                <div className='the-best-ad'>
                    <motion.div
                        initial={{ left: mobile ? '160px' : '238px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    >
                    </motion.div>
                    <span>Najlepszy klub sportowy w mieście</span>
                </div>
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Kształtuj </span>
                        <span>Swoje</span>
                    </div>
                    <div>
                        <span>Idealne Ciało</span>
                    </div>
                    <div>
                        <span>
                            some text
                        </span>
                    </div>
                </div>
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter end={150} start={50} delay='4' preFix='+' />
                        </span>
                        <span>wspierajacych</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={45} start={5} delay='4' preFix='+' />
                        </span>
                        <span>trenerow</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={1150} start={250} delay='2.5' preFix='+' />
                        </span>
                        <span>uczestnikow</span>
                    </div>
                </div>
                <div className="hero-buttons">
                    <button className="btn">Zapisz sie juz dzis</button>
                    <button className="btn">Dowiedz sie wiecej</button>
                </div>
            </div>
            <div className='right-h'>
                <button className="btn">Dolacz teraz</button>
                <motion.div
                    initial={{ right: '-1rem' }}
                    whileInView={{ right: '4rem' }}
                    transition={transition}
                    className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Uderzenia serca na minute</span>
                    <span>112</span>
                </motion.div>
                <img src={hero_image} alt="" className='hero-image' />
                <motion.img
                    initial={{ right: '11rem' }}
                    whileInView={{ right: '20rem' }}
                    transition={transition}
                    src={hero_image_back} alt="" className='hero-image-back' />
                <motion.div
                    initial={{ right: '37rem' }}
                    whileInView={{ right: '28rem' }}
                    transition={transition}
                    className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Spalone kalorie</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero