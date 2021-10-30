import React from "react";
import {  useHistory, useLocation } from "react-router";
import useAuth from "../Context/useAuth";
import "./Login.css";

const Login = () => {
  const { googleSignIn, setUser, setError,  setIsLoading } =
    useAuth();
  // redirect login
  const location = useLocation();
  const history = useHistory();
  const Redirect_url = location.state?.from || "/home";

  const handelClickLogin = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        history.push(Redirect_url);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div className="login">
      <h1>Please Login </h1>
      <div className="row">
        <div
          style={{ display: "flex", flexDirection: "column" }}
          className="loginforom col-10 col-lg-5    mx-auto"
        >
          <h3 className="">--Login with--</h3>
          <button onClick={handelClickLogin} className=" w-75">
            <div className="row">
              <div
                style={{ display: "flex", alignItems: "center" }}
                className="col-4"
              >
                <img
                  className="w-50"
                  src="https://i.ibb.co/vmVbjb7/preview-removebg-preview.png "
                  alt=""
                />
              </div>
              <div
                style={{ display: "flex", alignItems: "center" }}
                className="col-8  pt-2  "
              >
                <h3>
                  <b>Google</b>
                </h3>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
