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
import React, { useState } from "react";
import axios from "axios";
import "./Test.css";

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
    formData.append("image", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:5000/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setPrediction(response.data);
      setLoading(false);
      setShowClearButton(true);
    } catch (error) {
      console.error("Error predicting:", error);
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
    <section id="prediction">
      <div className="predictionContainer">
        <span className="predictionTitle">Brain Tumor Prediction</span>
        <div className="predictionBox">
          <input
            type="file"
            onChange={handleFileChange}
            className="predictionInput"
          />
          {imagePreview && (
            <div className="predictionImagePreview">
              <img src={imagePreview} alt="Uploaded" />
            </div>
          )}
          <div className="buttonContainer">
            <button
              onClick={handlePredict}
              className="predictionButton"
              disabled={!selectedFile || loading}
            >
              {loading ? "Predicting..." : "Predict"}
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
            {prediction.prediction === "glioma" && (
              <div>
                <h5>Glioma Information:</h5>
                <p>
                  Gliomas are tumors that originate from glial cells in the
                  brain and spinal cord. They are classified into types such as
                  astrocytomas, oligodendrogliomas, and ependymomas, and graded
                  from I to IV based on their aggressiveness. Symptoms include
                  headaches, seizures, and cognitive changes. Diagnosis
                  typically involves MRI scans and biopsies. Treatment options
                  include surgery, radiation, chemotherapy, and targeted
                  therapy, with prognosis varying widely depending on the tumor
                  type and grade. Research is ongoing to develop more effective
                  treatments and improve outcomes for patients.
                </p>
              </div>
            )}
            {prediction.prediction === "meningioma" && (
              <div>
                <h5>Meningioma Information:</h5>
                <p>
                  Meningiomas are tumors that develop from the meninges, the
                  protective layers surrounding the brain and spinal cord. They
                  are typically benign and slow-growing, although some can be
                  more aggressive. Symptoms depend on the tumor's size and
                  location and may include headaches, seizures, and focal
                  neurological deficits. Diagnosis involves imaging studies like
                  MRI and CT scans, with confirmation through biopsy if
                  necessary. Treatment options include observation, surgery,
                  radiation therapy, and in some cases, targeted therapy.
                  Prognosis is generally good, especially for benign tumors that
                  can be completely removed surgically. Ongoing research aims to
                  improve treatment strategies and outcomes for meningioma
                  patients.
                </p>
              </div>
            )}
            {prediction.prediction === "notumor" && (
              <div>
                <h5>No Tumor Information:</h5>
                <p>
                  According to the model you are perfectly healty although if
                  you are feeling any symptons such as Headaches, Seizures,
                  Difficulty thinking, speaking, or finding words,etc Please
                  seek Immediate help from your physician or any nearby hospital
                </p>
              </div>
            )}
            {prediction.prediction === "pituitary" && (
              <div>
                <h5>Pituitary Tumor Information:</h5>
                <p>
                  Pituitary tumors originate in the pituitary gland, a small
                  gland at the base of the brain that regulates hormone
                  production. They can be benign or malignant, and symptoms
                  often arise due to hormone overproduction or compression of
                  surrounding structures. Common symptoms include headaches,
                  vision problems, hormonal imbalances, and neurological
                  deficits. Diagnosis involves imaging studies like MRI and CT
                  scans, hormone level tests, and visual field testing.
                  Treatment options vary depending on the tumor type, size, and
                  symptoms but may include medication, surgery, radiation
                  therapy, or a combination of these approaches. Prognosis is
                  generally good, especially for benign tumors, with early
                  detection and appropriate treatment leading to symptom relief
                  and improved quality of life. Ongoing research aims to better
                  understand the underlying causes of pituitary tumors and
                  develop more targeted and effective treatment strategies.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Test;
