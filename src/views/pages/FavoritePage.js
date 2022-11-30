import React from "react";
import { Container } from "react-bootstrap";
// import data from "../../utils/dataset"
import ProfesiCardList from "../../components/ProfesiCardList";
import SearchEngine from "../../components/SearchEngin";
import NothingFavorite from "./NothingFavorite";
import ScrollToTop from "react-scroll-to-top";

class FavoritePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      datas:
        JSON.parse(localStorage.getItem("favorite-array")) ||
        localStorage.setItem("favorite-array", JSON.stringify([])),
      isInitializationData: true,
    };
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  componentDidMount() {
    if (this.state.isInitializationData) {
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
      const finalFavoriteData = favoriteData.filter((data) => data.id !== id);
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
    const datas = this.state.datas.filter((data) =>
      data.job_title.toLowerCase().includes(this.state.search.toLowerCase())
    );

    return (
      <>
      <ScrollToTop smooth color="#6f00ff" />
        <Container>
        <div className="favorite-title">
        <h2 className="text-dark d-flex justify-content-center mt-3">Your Favorites</h2>
        </div>
        <SearchEngine
          keyword={this.state.search}
          keywordChange={this.onSearchHandler}
        />
        </Container>
        {datas.length !== 0 ?<ProfesiCardList list={datas} />:<NothingFavorite/>}
      </>
    );
  }
}

export default FavoritePage;
