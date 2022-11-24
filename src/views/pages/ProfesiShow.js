import React from "react";
// import data from "../../utils/dataset"
import ProfesiCardList from "../../components/ProfesiCardList";
import {getAllProfesi} from "../../utils/dataset";
import SearchEngine from "../../components/SearchEngin";

class ProfresiShow extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            search: "",
            datas : getAllProfesi(),
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

    render(){
        const datas = this.state.datas.filter(
            (data)=>data.job_title.toLowerCase().includes(
                this.state.search.toLowerCase()))

        return(

            <div className="">
                <SearchEngine keyword={this.state.search} keywordChange={this.onSearchHandler}/>
                <ProfesiCardList list = {datas}/>
            </div>
        )
    }

}

export default ProfresiShow