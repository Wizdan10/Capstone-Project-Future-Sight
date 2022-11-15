import React from "react";
// import PropTypes from "prop-types";
import ProfesiCard from "./ProfesiCard";


function ProfesiCardList ({ list })
{
        return(
            <div className="profesi-list">
                {list.map((item)=>(
                    <ProfesiCard 
                        id={item.id}
                        key={item.id}
                        {...item}
                    />
                ))}
            </div>
        )
}

// ProfesiCardList.propTypes={
//     list: PropTypes.object.isRequired,
// }

export default ProfesiCardList;