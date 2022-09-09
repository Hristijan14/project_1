import React from "react";
import useFetchPower from "../../hooks/useFetchPower";
import "./KillerPowerAddOns.css";
import { useParams, useNavigate } from "react-router";

const KillerPowerAddOns = () => {
  const navigate = useNavigate();
  const { code } = useParams();
  const addons = useFetchPower(
    `https://dead-by-api.herokuapp.com/api/killers/`,
    `${code}/addons`
  );

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="killerPower-addons">
      <button className="addons-button" onClick={goBack}>
        Back
      </button>
      {addons &&
        addons?.data?.map((addon, index) => {
          return (
            <div key={index} className="addons-container">
              <div className="addons-img-name">
                <img src={addon?.icon} alt="Addon" />
                <p>Name: {addon.name}</p>
                <small>Rarity: {addon.rarity}</small>

                <div className="addons-para-section">
                  <h2>Enhancement:</h2>
                  <p className="addons-para">{addon.description}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default KillerPowerAddOns;
