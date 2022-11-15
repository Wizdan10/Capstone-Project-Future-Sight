import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


function ProfesiItem ({ id, job_title, imageProfesi, })
{
    return(
        
        <div className="card-profesi">
            <Row xs={1} sm={2} md={3}  >
                {Array.from({ length: 6 }).map((_) => (
                    <Col>
                        <Card>
                    <div className="profesi">
                        <div className="image-profesi">
                            <img src={imageProfesi} alt={job_title} />
                        </div>
                        <div className="title-job">
                                    <p><Link to={`/Profesi/${id}`}>
                                        {job_title}
                                    </Link></p>
                        </div>
                    </div>
                        </Card>
                </Col>
                ))}
            </Row>
        </div>
    )
}

// ProfesiItem.propTypes={
//     id: PropTypes.string.isRequired,
//     job_title: PropTypes.string.isRequired,
//     imageProfesi: PropTypes.string.isRequired,
// };

export default ProfesiItem;