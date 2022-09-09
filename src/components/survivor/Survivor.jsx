import React from "react";
import "./Survivor.css";
import useFetch from "../../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";

const Survivor = () => {
  const data = useFetch("https://dead-by-api.herokuapp.com/api/survs");
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="killer-container">
      <Link to="/survivors/perks">
        <button className="title-button">Perks</button>
      </Link>
      <Link to="/survivors/items">
        <button className="title-button">Items</button>
      </Link>
      <div className="killer">
        {data &&
          data.data.map((survs) => {
            return (
              <div key={survs.code}>
                <Link to={`/survivors/${survs.code}`}>
                  <img src={survs.imgs.portrait} alt="survivor" />
                </Link>
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

export default Survivor;
