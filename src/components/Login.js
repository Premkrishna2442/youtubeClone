import { GoogleLogin, GoogleLogout } from "react-google-login";
import {useState,useEffect} from 'react'


function Login() {
  const clientId = '263027562208-2ef12n30655i0f6vqplon9r1troi7bmg.apps.googleusercontent.com';
  const [accessToken, setaccessToken] = useState();
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);

  const onLoginSuccess = (res) => {
    
    setaccessToken(res.accessToken);
    setShowloginButton(false);
    setShowlogoutButton(true);
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

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(accessToken));
  }, [accessToken]);

  return (
    <div>
      {showloginButton ? (
        <div>
        <div className="header">
         

          <GoogleLogin
            className="header-btn-login"
            clientId={clientId}
            buttonText="Sign In"
            onSuccess={onLoginSuccess}
            onFailure={onLoginFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
        </div>
      
  
        </div>
      ) : null}

      {showlogoutButton ? (
        <div className="headerlg">
          <div className="header__left">
            
            <GoogleLogout
              className="header-btn"
              clientId={clientId}
              buttonText="Sign Out"
              onLogoutSuccess={onSignoutSuccess}
              
            ></GoogleLogout>
          </div>
        </div>
      ) : null}

      
    </div>
  );
}
export default Login;
