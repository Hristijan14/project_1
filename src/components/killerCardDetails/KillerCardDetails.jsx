import "./KillerCardDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import useFetchApi from "../../hooks/useFetchApi";
import useFetchPower from "../../hooks/useFetchPower";
import { Link } from "react-router-dom";

const KillerCardDetails = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const data = useFetchApi(
    `https://dead-by-api.herokuapp.com/api/killers/`,
    `${code}`
  );
  const power = useFetchPower(
    `https://dead-by-api.herokuapp.com/api/killers/`,
    `${code}/power`
  );

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="killerCardDetails-container">
      <div className="killer-info-container">
        {data &&
          data.data.map((killer, index) => {
            return (
              <div key={index}>
                <img src={killer.imgs.portrait} alt="killer" />
                <h2>{killer.name}</h2>
                <p>Full Name: {killer.fullName}</p>
                <p>From: {killer.dlc}</p>
                <p>Location: {killer.realm}</p>
                <div>
                  {power &&
                    power?.data?.map((kill, index) => {
                      return (
                        <div key={index} className="killer-power">
                          <h3>Power:</h3>
                          <div className="power-img-name">
                            <Link to={`/killers/${code}/addons`}>
                              <img src={kill.powerImg[0]} alt="power" />
                            </Link>
                            <h3>{kill.powerName}</h3>
                          </div>
                          <div className="power-description">
                            <h3>Power Description:</h3>
                            <p className="killer-para-section">
                              {kill.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                </div>

                <h3>Overview:</h3>
                <p className="killer-para-section">{killer.overview}</p>
                <h3>LORE:</h3>
                <p className="killer-para-section">{killer.backstory}</p>
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

export default KillerCardDetails;
