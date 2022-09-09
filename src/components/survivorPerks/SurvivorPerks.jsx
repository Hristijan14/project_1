import React from "react";
import "./SurvivorPerks.css";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const SurvivorPerks = () => {
  const data = useFetch("https://dead-by-api.herokuapp.com/api/perks/surv");
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="killerPerks-container">
      <button className="perk-button" onClick={goBack}>
        Back
      </button>
      {data?.data?.map((perk, index) => {
        return (
          <div key={index} className="killerPerks-section">
            <div className="killerPerks-icon-name">
              <img src={perk.icon} alt="perk" />
              <h3>Name: {perk.name}</h3>
            </div>
            <p className="killer-para-section">
              Description: {perk.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default SurvivorPerks;
