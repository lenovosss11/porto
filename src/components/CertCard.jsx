import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
// import { motion } from "framer-motion";
const CertCard = (props) => {
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1, transition: { duration: 0.8 } },
  // };
  return (
    <div className="cert-card">
      <div className="cert-img">
        <img src={props.img} alt={props.name} />
      </div>
      <div className="cert-title">
        <h2>{props.name}</h2>
      </div>
      <div className="cert-description">
        <p>{props.description}</p>
      </div>
      <div className="cert-links">
        {props.link && (
          <div>
            <a href={props.link} target="_blank" className="search" rel="noreferrer">
              <FaSearch />
            </a>
            <a href={props.preview}>
              <FaExternalLinkAlt />
            </a>
          </div>
        )}
      </div>

      {/* <div className="project-tags">
        <div className="project-tag">
          {projects.stack.map((project, index) => (
            <p key={index}>hello</p>
          ))}
        </div>
      </div> */}
    </div>
  );
};

CertCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
};

export default CertCard;
