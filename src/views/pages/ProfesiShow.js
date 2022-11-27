import React from "react";
// import data from "../../utils/dataset"
import ProfesiCardList from "../../components/ProfesiCardList";
import {getAllProfesi} from "../../utils/dataset";
import SearchEngine from "../../components/SearchEngin";
import FilterButton from "../../components/FilterButton";

class ProfresiShow extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            search: "",
            datas : getAllProfesi(),
            filterBtn: getAllProfesi(),
            
        };
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onSearchHandler = (event) =>{

        this.setState(()=>{
            return{
                search: event.target.value
            }
        })
        
    }

    onFilteringBtns = (e)=>{
        let filtered;
        console.log(e.target.value)
        if(e.target.value === "All"){
            filtered = this.state.datas;
        }
        else{
            filtered = this.state.datas.filter(elm=>elm.company_industry===e.target.value)
        }

        this.setState({
            filterBtn: filtered
        })
    }

    render(){
        const datas = this.state.filterBtn.filter(
            (data)=>data.job_title.toLowerCase().includes(
                this.state.search.toLowerCase()))

        return(
            <div className="">
                <FilterButton onFilteringBtns={this.onFilteringBtns} />
                <SearchEngine keyword={this.state.search} keywordChange={this.onSearchHandler} />
                <ProfesiCardList list = {datas}/>
            </div>
        )
    }

}

export default ProfresiShow
