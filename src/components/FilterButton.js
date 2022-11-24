import React from "react";
import { Button } from "react-bootstrap";

function FilterButton ({ company_industry }){
    return(
        <div className="filter-button">
            <Button variant="outline-primary">{company_industry}</Button>{' '}
        </div>
    )
}

export default FilterButton;
