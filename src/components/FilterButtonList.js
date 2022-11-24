import React from "react";
import FilterButton from "./FilterButton";

function FilterButtonList ({filter}){
    return(
        <div>
            {
                filter.map((elm)=>(
                    <FilterButton {...elm}/>
                ))
            }
        </div>
    )
}
export default FilterButtonList;