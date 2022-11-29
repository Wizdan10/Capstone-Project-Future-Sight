import React from "react";
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function ProfesiItem({ id, job_title, imageProfesi }) {
  return (
    <div className="card-profesi">
      <div className="profesi">
        <div className="image-profesi">
          <img className="img-_" src={imageProfesi} alt={job_title} />
        </div>

        <div className="title-job">
          <Link to={`/profesi/${id}`}>{job_title}</Link>
        </div>
      </div>
    </div>
  );
}

// ProfesiItem.propTypes={
//     id: PropTypes.string.isRequired,
//     job_title: PropTypes.string.isRequired,
//     imageProfesi: PropTypes.string.isRequired,
// };

export default ProfesiItem;
