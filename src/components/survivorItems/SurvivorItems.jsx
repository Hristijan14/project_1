import React from "react";
import "./SurvivorItems.css";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const SurvivorItems = () => {
  const navigate = useNavigate();
  const items = useFetch(`https://dead-by-api.herokuapp.com/api/items`);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="killerPerks-container">
      <button className="perk-button" onClick={goBack}>
        Back
      </button>
      <Link to={"/survivors/items/addons"}>
        <button className="title-button">AddOns</button>
      </Link>
      {items?.data?.map((item, index) => {
        return (
          <div key={index} className="killerPerks-section">
            <div className="killerPerks-icon-name">
              <img src={item?.icon} alt="item" />
              <h3>Name: {item?.name}</h3>
            </div>
            <p className="killer-para-section">
              Description: {item?.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default SurvivorItems;
