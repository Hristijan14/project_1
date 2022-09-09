import React from "react";
import "./SurvivorItemsAddOns.css";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const SurvivorItemsAddOns = () => {
  const navigate = useNavigate();
  const itemaddons = useFetch(
    `https://dead-by-api.herokuapp.com/api/items/addons`
  );

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="killerPerks-container">
      <button className="perk-button" onClick={goBack}>
        Back
      </button>
      {itemaddons &&
        itemaddons?.data?.map((addon, index) => {
          return (
            <div key={index} className="killerPerks-section">
              <div className="killerPerks-icon-name">
                <img src={addon?.icon} alt="addon" />
                <h3>Name: {addon?.name}</h3>
                <h3>Item Type: {addon.itemType}</h3>
              </div>
              <p className="killer-para-section">
                Description: {addon?.description}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default SurvivorItemsAddOns;
