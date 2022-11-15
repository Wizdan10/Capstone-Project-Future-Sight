import React from "react";
// import PropTypes from "prop-types"
import ProfesiItem from "./ProfesiItem";


function ProfesiCard ({ id, imageProfesi, job_title})
{
    return(
        <div className="profesi-card">
            <ProfesiItem
                id={id}
                imageProfesi={imageProfesi}
                job_title={job_title}
            />
        </div>
    )
}

// ProfesiCard.propTypes={
//       PropTypes.oneOfType([PropTypes.object]).isRequired,
// }

export default ProfesiCard