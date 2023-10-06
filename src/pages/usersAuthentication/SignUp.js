import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signUpAction } from "../../redux/actions/actionsAuth";
import { Header } from "../../components";
import {
  FacebookIcon,
  GoogleIcon,
  Images,
  InstagramIcon,
  TwitterIcon,
} from "../../constants";

const SignUp = () => {
  const [state, setState] = useState({
    fullName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const { fullName, email, password, passwordConfirm } = state;
  // const {currentUser} = useSelector((state) => state.dataAuth);

  // const history = useHistory();
  const dispatch = useDispatch();

  const handleSignUpForm = (event) => {
    event.preventDefault();
    if (password !== passwordConfirm) {
      return;
    }
    dispatch(signUpAction(fullName, email, password));
    setState({
      fullName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  // useEffect(() => {
  // 	if (currentUser) {
  // 		history.push("/login");
  // 	}
  // }, [currentUser]);

  return (
    <>
      <section className="text-gray-600 body-font relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-300">
          <img
            src="https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80"
            alt="not found"
          />
        </div>

        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-2/6 md:w-1/2 rounded-lg p-8 bg-white relative z-10 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Sign-Up
            </h2>
            <form onSubmit={handleSignUpForm}>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Full Name
                </label>
                <input
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={fullName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="full-name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Password
                </label>
                <input
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="full-name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Confirm Password
                </label>
                <input
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  type="password"
                  id="passwordConfirm"
                  name="passwordConfirm"
                  value={passwordConfirm}
                  required
                  onChange={handleInputChange}
                />
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                SignUp
              </button>
            </form>
            <div className="flex justify-end items-center mt-3">
              <p className="text-xs  text-gray-500">Already Have an Account?</p>
              <Link to="/login">
                <p className=" text-xs ml-2 font-bold  text-black ">SignIn</p>
              </Link>
            </div>

            <div className="flex align-center items-center justify-center ">
              <button
                className=" w-10 h-10 p-0 border-0 mt-4   text-gray-500 ml-4 "
                // onClick={handleGoogleSignIn}
              >
                <img src={GoogleIcon} alt="" />
              </button>
              <button
                className=" w-10 h-10  p-0 border-0 mt-4    text-gray-500 ml-4 "
                // onClick={handleFbSignIn}
              >
                <img src={FacebookIcon} alt="" />
              </button>
              <button
                className=" w-10 h-10 p-0 border-0 mt-4    text-gray-500 ml-4 "
                // onClick={handleInstagramSignIn}
              >
                <img src={InstagramIcon} alt="" />
              </button>
              <button
                className=" w-10 h-10 p-0 border-0 mt-4    text-gray-500 ml-4 "
                // onClick={handleTwitterSignIn}
              >
                <img src={TwitterIcon} alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
