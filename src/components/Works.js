import React from 'react'
import firstimg from '../assets/frontend.png';

const Works = () => {
    return (
        <section id='works'>
            <span className="workTitle">Works</span>
            <span className="worksDesc">Loads of features. Making it easier for anyone to predict the chance of suffering from brain tumor. Shows analysis done on large data sets.</span>
            <div className="workBar">
                <img src={firstimg} alt="" className="workBarImg" />
                <div className="workBarText">
                    <h2>Available on GitHub</h2>
                    <p>The web page's source code is freely available on GitHub. See the code, modify and use freely under GNU GPL-3.0 licence. Just notify the changes made to author.</p>
                </div>
            </div>


            <div className="workBar">
                <img src={firstimg} alt="" className="workBarImg" />
                <div className="workBarText">
                    <h2>Analysis Data Set and Code Available</h2>
                    <p>Data set on which the analysis is done is available. Also, the code used for analysing the data and get prediction rates is made available.</p>
                </div>
            </div>


            <div className="workBar">
                <img src={firstimg} alt="" className="workBarImg" />
                <div className="workBarText">
                    <h2>Vast and Reliable Dataset </h2>
                    <p>This database contains 76 attributes, but all published experiments refer to using a subset of 14 of them</p>
                </div>
            </div>

            <div className="workBar">
                <img src={firstimg} alt="" className="workBarImg" />
                <div className="workBarText">
                    <h2>Analysis Using Python and Jupyter Notebook </h2>
                    <p>The code used for analysis of data and getting prediction rates is pretty simple. The code is written in Python and Jupyter Notebook.</p>
                </div>
            </div>

        </section>
    )
}

export default Works