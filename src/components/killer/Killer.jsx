import React from "react";
import "./Killer.css";
import useFetch from "../../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";

const Killer = () => {
  const data = useFetch("https://dead-by-api.herokuapp.com/api/killers");
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="killer-container">
      <Link to="/killers/perks">
        <button className="title-button">Perks</button>
      </Link>
      <div className="killer">
        {data &&
          data.data.map((killer) => {
            return (
              <div key={killer.code}>
                <Link to={`/killers/${killer.code}`}>
                  <img src={killer.imgs.portrait} alt="killer" />
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

export default Killer;
