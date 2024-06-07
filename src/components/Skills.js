import React from 'react';
import './Skills.css';
import firsticon from '../assets/phone.jpg';
import secondicon from '../assets/costs.jpg';
import thirdicon from '../assets/bulb.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span span className="skillTitle">Features</span>

            <div className="skillBar">
                <img src={firsticon} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Mobile Optimise</h2>
                    <p>Optimized for viewing on different platforms and devices. Looks the same on every mobile, laptops, PCs and tablets. A smooth, continous flow</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={secondicon} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Decrease Costs</h2>
                    <p>Examine your brain related reports by yourself. Predict the chance of having a brain tumor free of cost.</p>
                </div>
            </div>


            <div className="skillBar">
                <img src={thirdicon} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Smart Idea</h2>
                    <p>Great accuracy. Accurate prediction rates. Analysis and prediction based on large samples of data.</p>
                </div>
            </div>
        </section>
    )
}

export default Skills;