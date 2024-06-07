import React from 'react'
import './intro.css';
import bg from '../assets/brain.jpg'
import { Link } from 'react-scroll'
const Intro = () => {
    return (
        <section id="intro">
            <div className='introContent'>
                <span className="hello">Hello,</span>
                <span className="introText">Guilding Patients And <br />Empowering Care!!</span>
                <p className="introPara">Predict your chance of having a brain tumor because<br /> prevention is better than cure! </p>
                <Link ><button className="btn">Predict </button></Link>
            </div>
            <img src={bg} alt="Profile" className='bg' />
        </section>

    )
}

export default Intro