import React from "react";
import { Button } from "react-bootstrap";

function FilterButton({ onFilteringBtns, btns }) {
  return (
    <div className="filter-button">
      {btns.map((btn, index) => {
        return (

          <Button 
            key={index}
            value={btn}
            className="button-flt"
            onClick={onFilteringBtns}
            variant="outline-secondary"
          >
            {btn}
          </Button>
        );
      })}
    </div>
  );
}

export default FilterButton;
