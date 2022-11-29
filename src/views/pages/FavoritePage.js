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
          datas: JSON.parse(localStorage.getItem("favorite-array")),
          isInitializationData: false,
        };
      });
    } else {
      this.setState(() => {
        return {
          datas: JSON.parse(localStorage.getItem("favorite-array")),
        };
      });
    }
    
  }

  onClickFavoriteButtonHandler = (id, isFavorite) => {
    const allData = JSON.parse(localStorage.getItem("profesi-array"));
    const favoriteData = JSON.parse(localStorage.getItem("favorite-array"));
    const currentData = allData.filter((data) => data.id === id);
    if (!isFavorite) {
      favoriteData.push(currentData);
      localStorage.setItem("favorite-array", JSON.stringify(favoriteData));
    } else {
      const finalFavoriteData = favoriteData.filter((data) => data.id !== id)
      localStorage.setItem("favorite-array", JSON.stringify(finalFavoriteData));
    }
  };

  onSearchHandler = (event) => {
    this.setState(() => {
      return {
        search: event.target.value,
      };
    });
  };

  render() {
    // const datas = this.state.datas.filter((data) =>
    //   data.job_title.toLowerCase().includes(this.state.search.toLowerCase())
    // );

    return (
      <div className="">
        <SearchEngine
          keyword={this.state.search}
          keywordChange={this.onSearchHandler}
        />
        <ProfesiCardList list={this.state.datas} onClickFavoriteButton={this.state.onClickFavoriteButtonHandler} />
      </div>
    );
  }
}

export default FavoritePage;
