import React from "react";
// import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import DetailProfesi from "../../components/DetailProfesi";
import { getProfesi } from "../../utils/dataset";

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
            <DetailProfesi {...this.state.data}/>
            <div className="likeContainer" id="likeContainer">
            </div>
            </>
        )
    }
}

function DetailPageWrap(){
    const {id} = useParams()
    return <DetailPageWraper id= {id}/>
}

// tambahin propTypes disini

export default DetailPageWrap;