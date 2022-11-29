import React from "react";
// import data from "../../utils/dataset"
import ProfesiCardList from "../../components/ProfesiCardList";
import { favoriteData } from "../../utils/dataset";
import SearchEngine from "../../components/SearchEngin";

class FavoritePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      datas: [],
      isInitializationData: true,
    };
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  componentDidMount() {
    if (this.state.isInitializationData) {
      const dataset = JSON.stringify(favoriteData());
      localStorage.setItem("favorite-array", dataset);
      this.setState(() => {
        return {
          isInitializationData: false,
        };
      });
    }
    this.setState(() => {
      return {
        datas: JSON.parse(localStorage.getItem("favorite-array")),
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

  render() {
    console.log(this.state.datas);
    const datas = this.state.datas.filter((data) =>
      data.job_title.toLowerCase().includes(this.state.search.toLowerCase())
    );

    return (
      <div className="">
        <SearchEngine
          keyword={this.state.search}
          keywordChange={this.onSearchHandler}
        />
        <ProfesiCardList list={datas} />
      </div>
    );
  }
}

export default FavoritePage;
