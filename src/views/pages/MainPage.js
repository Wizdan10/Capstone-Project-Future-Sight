import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import { putAccessToken, getUserLogged } from "../../utils/network-data";
import ProfresiShow from "./ProfesiShow";
import NavbarMain from "../../components/Navbar";
import NotFound404 from "./NotFoundPage";
import DetailPageWraper from "./DetailPage";

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
    };
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }
  async componentDidMount() {
    const { data } = await getUserLogged();
    this.setState(() => {
      return {
        authedUser: data,
        initializing: false,
      };
    });
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null,
      };
    });
    putAccessToken("");
  }

  render() {
    if(this.state.initializing){
      return null
    }

    if(this.state.authedUser === null){
      return (
        <Routes>
          <Route path="/" element={<LoginPage loginSuccess={this.onLoginSuccess} />}/>
        </Routes>
      );
    }

    return(
      <>
      <NavbarMain logout={this.onLogout} name={this.state.authedUser.name}/>
      <Routes>
        <Route path="/" element={<ProfresiShow/>}/>
        <Route path="/profesi/:id" element={<DetailPageWraper />}/>
        <Route path={"*"} element={<NotFound404/>}/>       
      </Routes>
      
      </>
    )
  }
}

export default MainPage;