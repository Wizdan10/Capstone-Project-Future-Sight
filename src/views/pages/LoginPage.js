import React from "react";
import PropsTypes from "prop-types";

import ImageMain from "../../images/icons/MainPage.png";
import LoginTemplate from "../../components/LoginTemplate";
import RegisterTemplate from "../../components/RegisterTemplate";
function LoginPage({loginSuccess}) {
  return (
    <React.Fragment>
    <div className="body-masthead">
      <div className="masthead">
        <div className="masthead-content text-dark">
          <div className="container-fluid px-4 px-lg-0">
            <h1 className="fst lh-1 ">Terangi masa depan</h1>
            <h1 className="fst lh-1 mb-4 textColor">Tanpa salah pilihan</h1>
            <p className="mb-5">
              Membantu muda mudi dalam menentukan masa depan impian mereka tanpa
              salah memilih
            </p>
            <LoginTemplate loginSuccess={loginSuccess}/>
            <RegisterTemplate />
          </div>
        </div>
      </div>
      </div>
      <img src={ImageMain} alt="MainPage" className="imgMain" />
    </React.Fragment>
  );
}
LoginPage.propTypes = {
  loginSuccess: PropsTypes.func,
};
export default LoginPage;