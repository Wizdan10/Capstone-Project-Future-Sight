import React from "react";
// import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import DetailProfesi from "../../components/DetailProfesi";
import { getProfesi } from "../../utils/dataset";
import NavbarMain from "../../components/NavBar";


function DetailPageWraper(){
    const {id} = useParams();
    return <DetailPage id = {id}/>
}

class DetailPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            datas:''
        }
    }

    async componentDidMount(){
        const {prof} = await getProfesi(this.props.id);
        this.setState(()=>{
            return {
                datas: prof,
            }
        })
    }
    render(){
        if (this.state.datas === 0){
            return(
                <div>
                    <NavbarMain/>
                    <p>Profession not found</p>
                </div>
            )
        }

        return (
            <div>
                <DetailProfesi {...this.state.datas}/>
            </div>
        )
    }
}

// tambahin propTypes disini

export default DetailPageWraper;