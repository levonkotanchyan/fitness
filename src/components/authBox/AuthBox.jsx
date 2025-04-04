import { useState } from "react";
import "./authBox.scss";
import User from "../../images/icon.svg";
import EMail from "../../images/mailIcon.svg";
import Password from "../../images/password.svg";

const AuthBox = () => {
  const [signTab, setSignTab] = useState("signup");
  return (
    <div className="authBox">
      <div className="signIn-header">
        <button
          onClick={() => setSignTab("signup")}
          className={`singInButton ${signTab === "signup" ? "bigText" : ""}`}
        >
          Sing Up
        </button>
        <button
          onClick={() => setSignTab("login")}
          className={`singInButton ${signTab === "login" ? "bigText" : ""}`}
        >
          Login
        </button>
      </div>
      <div className="authContainer">
        {signTab === "signup" ? (
          <div className="signup">
            <label htmlFor="name">
              <span>Name: </span>
              <div className="nameBox">
                <img src={User} alt="user" />
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                />
              </div>
            </label>
            <label htmlFor="email">
              <span>E-mail: </span>
              <div className="emailBox">
                <img src={EMail} alt="email" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your E-Mail"
                />
              </div>
            </label>
            <button className="singUpButton font-18">Sing Up</button>
          </div>
        ) : (
          <div className="login">
            <label htmlFor="name">
              <span>Name: </span>
              <div className="nameBox">
                <img src={User} alt="user" />
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                />
              </div>
            </label>
            <label htmlFor="password">
              <span>Password: </span>
              <div className="PasswordBox">
                <img src={Password} alt="password" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                />
              </div>
            </label>
            <button className="singUpButton font-18">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthBox;
