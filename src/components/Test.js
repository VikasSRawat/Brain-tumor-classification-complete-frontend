/*import React, { useState } from 'react';
import axios from 'axios';
import './Test.css';

function Test() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handlePredict = async () => {
        setLoading(true);
        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
            const response = await axios.post('http://localhost:5000/predict', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setPrediction(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error predicting:', error);
            setLoading(false);
        }
    };

    return (
        <section id='prediction'>
            <div className="predictionContainer">
                <span className="predictionTitle"> Brain Tumor Prediction</span>
                <div className="predictionBox">
                    <input type="file" onChange={handleFileChange} className="predictionInput" />
                    {imagePreview && (
                        <div className="predictionImagePreview">
                            <img src={imagePreview} alt="Uploaded" />
                        </div>
                    )}
                    <button onClick={handlePredict} className="predictionButton" disabled={!selectedFile || loading}>
                        {loading ? 'Predicting...' : 'Predict'}
                    </button>
                    {prediction && (
                        <div className="predictionResult">
                            <h6>Prediction: {prediction.prediction}</h6>
                            <p>Confidence: {prediction.confidence.toFixed(2)}</p>
                        </div>
                    )}
                </div>
                {prediction && (
                    <div className="predictionInfo">
                        {prediction.prediction === 'glioma' && (
                            <div>
                                <h5>Glioma Information:</h5>
                                <p>Information about glioma.</p>
                            </div>
                        )}
                        {prediction.prediction === 'meningioma' && (
                            <div>
                                <h5>Meningioma Information:</h5>
                                <p>Information about meningioma.</p>
                            </div>
                        )}
                        {prediction.prediction === 'notumor' && (
                            <div>
                                <h5>No Tumor Information:</h5>
                                <p>Information when no tumor is detected.</p>
                            </div>
                        )}
                        {prediction.prediction === 'pituitary' && (
                            <div>
                                <h5>Pituitary Tumor Information:</h5>
                                <p>Information about pituitary tumor.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Test;
*/
import React, { useState } from 'react';
import axios from 'axios';
import './Test.css';

function Test() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);
    const [showClearButton, setShowClearButton] = useState(false);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handlePredict = async () => {
        setLoading(true);
        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
            const response = await axios.post('http://localhost:5000/predict', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setPrediction(response.data);
            setLoading(false);
            setShowClearButton(true);
        } catch (error) {
            console.error('Error predicting:', error);
            setLoading(false);
        }
    };

    const handleClear = () => {
        setSelectedFile(null);
        setPrediction(null);
        setImagePreview(null);
        setShowClearButton(false);
    };

    return (
        <section id='prediction'>
            <div className="predictionContainer">
                <span className="predictionTitle">Brain Tumor Prediction</span>
                <div className="predictionBox">
                    <input type="file" onChange={handleFileChange} className="predictionInput" />
                    {imagePreview && (
                        <div className="predictionImagePreview">
                            <img src={imagePreview} alt="Uploaded" />
                        </div>
                    )}
                    <div className="buttonContainer">
                        <button onClick={handlePredict} className="predictionButton" disabled={!selectedFile || loading}>
                            {loading ? 'Predicting...' : 'Predict'}
                        </button>
                        {showClearButton && (
                            <button onClick={handleClear} className="clearButton">
                                Clear
                            </button>
                        )}
                    </div>
                    {prediction && (
                        <div className="predictionResult">
                            <h6>Prediction: {prediction.prediction}</h6>
                            <p>Confidence: {prediction.confidence.toFixed(2)}</p>
                        </div>
                    )}
                </div>
                {prediction && (
                    <div className="predictionInfo">
                        {prediction.prediction === 'glioma' && (
                            <div>
                                <h5>Glioma Information:</h5>
                                <p>Information about glioma.</p>
                            </div>
                        )}
                        {prediction.prediction === 'meningioma' && (
                            <div>
                                <h5>Meningioma Information:</h5>
                                <p>Information about meningioma.</p>
                            </div>
                        )}
                        {prediction.prediction === 'notumor' && (
                            <div>
                                <h5>No Tumor Information:</h5>
                                <p>Information when no tumor is detected.</p>
                            </div>
                        )}
                        {prediction.prediction === 'pituitary' && (
                            <div>
                                <h5>Pituitary Tumor Information:</h5>
                                <p>Information about pituitary tumor.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Test;
