import React from "react";
import "./SurvivorCardDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import useFetchApi from "../../hooks/useFetchApi";

const SurvivorCardDetails = () => {
  const { scode } = useParams();
  const navigate = useNavigate();
  const data = useFetchApi(
    `https://dead-by-api.herokuapp.com/api/survs/`,
    `${scode}`
  );

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="survivorCardDetails-container">
      <div className="killer-info-container">
        {data &&
          data.data.map((surv, index) => {
            return (
              <div key={index}>
                <img src={surv.imgs.portrait} alt="surv" />
                <h2>{surv.name}</h2>
                <p>From DLC: {surv.dlc}</p>
                <p>Nationality: {surv.nationality}</p>
                <p>Role: {surv.role}</p>
                <h3>Overview:</h3>
                <p className="killer-para-section">{surv.overview}</p>
                <h3>LORE:</h3>
                <p className="killer-para-section">{surv.backstory}</p>
              </div>
            );
          })}
      </div>
      <button className="title-button" onClick={goBack}>
        Back
      </button>
    </div>
  );
};

export default SurvivorCardDetails;
