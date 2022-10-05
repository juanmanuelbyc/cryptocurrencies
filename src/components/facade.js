import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import settingsIcon from '../assets/settingsIcon.png';
import micIcon from '../assets/micIcon.png';

const Facade = (props) => {
  const {
    image, topText, mainText, bottomText,
  } = props;
  return (
    <div className="facade">
      <div className="facadeTopSection">
        <NavLink className="backHomeButton" to="/Home">←</NavLink>
        <p className="facadeTopText">{topText}</p>
        <div className="topFacadeIcons">
          <img className="micIcon" src={micIcon} alt="mic Icon" />
          <img className="settingsIcon" src={settingsIcon} alt="settings Icon" />
        </div>
      </div>
      <div className="facadeMiddleSection">
        <div className="facadeImageContainer">
          <img className="facadeImage" src={image} alt="dddd" />
        </div>
        <div className="facadeTextsContainer">
          <h2 className="facadeMainText">{mainText}</h2>
        </div>
      </div>
      <div className="facadeBottomSection">
        <p>{bottomText}</p>
      </div>
    </div>
  );
};

Facade.propTypes = {
  topText: PropTypes.string.isRequired,
  mainText: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Facade;
