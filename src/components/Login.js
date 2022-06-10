import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const clientId =
  "425736982623-7br81njloujarotr8rm6u6tgqa7s57eq.apps.googleusercontent.com";

function Login({ onLogin }) {
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const [resp, setRes] = useState({});
  const onLoginSuccess = (res) => {
    console.log("Login Success:", res);
    setRes(res);
    setShowloginButton(false);
    setShowlogoutButton(true);
    sessionStorage.setItem("Access_key", res.accessToken);
    onLogin(res.Ru.tf);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
  };

  return (
    <div>
      {showloginButton ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign In"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      ) : null}

      {showlogoutButton ? (
        <div className="loginDetails">
          <div className="loginDetails">
              <img
                className='USER_PHOTO'
                src={resp.Ru.IN}
                alt="Profile Loading"
              />
              <h4 className="userName">{resp.Ru.tf.substring(0,13)}</h4>
          </div>
          <GoogleLogout
          className="logout"
            clientId={clientId}
            buttonText="Sign Out"
            onLogoutSuccess={onSignoutSuccess}
          ></GoogleLogout>
        </div>
      ) : null}
    </div>
  );
}
export default Login;
