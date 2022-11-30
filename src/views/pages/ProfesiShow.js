import React from "react";
// import data from "../../utils/dataset"
import ProfesiCardList from "../../components/ProfesiCardList";
import { getAllProfesi, btn } from "../../utils/dataset";
import SearchEngine from "../../components/SearchEngin";
import FilterButton from "../../components/FilterButton";
import ScrollToTop from "react-scroll-to-top";

class ProfresiShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      datas: JSON.parse(localStorage.getItem("profesi-array")) || getAllProfesi(),
      filterBtn: JSON.parse(localStorage.getItem("profesi-array")) || getAllProfesi(),
      isInitializationData: true,
      btns: btn,
    };
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  componentDidMount() {
    if (this.state.isInitializationData) {
      const dataset = JSON.stringify(this.state.datas);
      JSON.stringify(localStorage.getItem("favorite-array"))
      localStorage.setItem("profesi-array", dataset);
      this.setState(() => {
        return {
          isInitializationData: false,
        };
      });
    }
    this.setState(() => {
      return {
        datas: JSON.parse(localStorage.getItem("profesi-array")),
      };
    });
  }

  onSearchHandler = (event) => {
    this.setState(() => {
      return {
        search: event.target.value,
      };
    });
  };
  
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

  render() {
    const datas = this.state.filterBtn.filter((data) =>
      data.job_title.toLowerCase().includes(this.state.search.toLowerCase())
    );

    return (
      <div className="">
        <ScrollToTop smooth color="#6f00ff" top={100}/>
        <FilterButton onFilteringBtns={this.onFilteringBtns} btns={this.state.btns}/>
        <SearchEngine
          keyword={this.state.search}
          keywordChange={this.onSearchHandler}
        />
        <ProfesiCardList list={datas} />
      </div>
    );
  }
}

export default ProfresiShow;
