import React from "react";
// import PropTypes from "prop-types";
import ProfesiItem from "./ProfesiItem";
import { Container } from "react-bootstrap";
// import Row from 'react-bootstrap/Row';

function ProfesiCardList ({ list })
{
        return(
        
            <Container >
            <div className="profesi-list">
            {
                    list.map((item)=>(
                        <ProfesiItem 
                            id={item.id}
                            key={item.id}
                            {...item}
                        />
                    ))
            }
            </div>
        </Container>
        )
}

// ProfesiCardList.propTypes={
//     list: PropTypes.object.isRequired,
// }

export default ProfesiCardList;