import React from "react";
import { Button } from "react-bootstrap";

function FilterButton ({onFilteringBtns}){
    return(
        <div className="filter-button">
            <Button className="button-flt" value='All' onClick={onFilteringBtns} variant="outline-secondary">All</Button>
            <Button className="button-flt" value='IT' onClick={onFilteringBtns} variant="outline-secondary">IT</Button>
            <Button className="button-flt" value='Design' onClick={onFilteringBtns} variant="outline-secondary" >Design</Button>
            <Button className="button-flt" value='Kesehatan'onClick={onFilteringBtns} variant="outline-secondary">Kesehatan</Button>
            <Button className="button-flt" value='Keuangan'onClick={onFilteringBtns} variant="outline-secondary">Keuangan</Button>
            <Button className="button-flt" value='Pariwisata'onClick={onFilteringBtns} variant="outline-secondary">Pariwisata</Button>
            <Button className="button-flt" value='Entertainment'onClick={onFilteringBtns} variant="outline-secondary">Entertainment</Button>
        </div>
        // {
        //     btn.map(()=>{
        //         return (
        //             <button value={categorys} onClick={onFilteringBtns}>{categorys}</button>
        //             )
        //     })
        // }

    )
}

export default FilterButton;
