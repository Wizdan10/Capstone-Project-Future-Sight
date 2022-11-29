import React from "react";
// import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import DetailProfesi from "../../components/DetailProfesi";

function getDataById(id) {
  const allData = JSON.parse(localStorage.getItem("profesi-array"));
  const currentData = allData.find((data) => data.id === id);
  return currentData;
}

class DetailPageWraper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: getDataById(props.id),
    };
  }

  render() {
    return (
      <>
        <DetailProfesi {...this.state.data} />
      </>
    );
  }
}

function DetailPageWrap() {
  const { id } = useParams();
  return <DetailPageWraper id={id} />;
}

// tambahin propTypes disini

export default DetailPageWrap;
