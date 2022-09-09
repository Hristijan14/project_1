import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import DbdLogo from "../../assets/images/dbdLogo.png";

const Home = () => {
  return (
    <>
      <img className="dbd-logo" src={DbdLogo} alt="logo" />
      <div className="home-container">
        <Link to="/survivors">
          <button className="title-button">Survivors</button>
        </Link>
        <Link to="/killers">
          <button className="title-button">Killers</button>
        </Link>
      </div>
      <div className="info-container">
        <div className="para-section">
          <p>
            Dead by Daylight is a survival horror asymmetric multiplayer online
            game developed by Behaviour Interactive. It is a one-versus-four
            game in which one player takes on the role of a savage killer and
            the other four play as survivors; the killer must catch each
            survivor and sacrifice them to a malevolent force known as the
            Entity by impaling them on hooks, while the survivors must avoid
            being caught and fix five generators to open the exit gates.
          </p>
          <p>
            Alongside original characters, the game includes characters from
            various franchises such as Halloween, Left 4 Dead, The Texas
            Chainsaw Massacre, A Nightmare on Elm Street, Saw, Evil Dead, Ghost
            Face, Stranger Things, Silent Hill, Crypt TV, Resident Evil,
            Hellraiser, Ringu, and Attack on Titan.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
