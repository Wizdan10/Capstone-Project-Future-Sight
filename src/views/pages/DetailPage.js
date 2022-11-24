import React from "react";
// import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import DetailProfesi from "../../components/DetailProfesi";
import { getProfesi, favoriteData } from "../../utils/dataset";
import FavoriteProfDb from "../../data/favorite-prof-idb";

class DetailPageWraper extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            data: getProfesi(props.id)            
        }
    }
    render(){
        return(
            <>
            <DetailProfesi {...this.state.data} onFavorite={favoriteData} />
            </>
        )
    }
}

function DetailPageWrap(){
    const {id} = useParams()
    const onFavoriteHandler = (id)=>{
        FavoriteProfDb.putProf(id)
    }
    return <DetailPageWraper id= {id} onFavorite={onFavoriteHandler}/>
}

// tambahin propTypes disini

export default DetailPageWrap;