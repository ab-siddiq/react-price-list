import React, { useContext, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
const Login = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, signIn, signInWithGoogle } = useContext(AuthContext);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const from = location.state?.from.pathname || "/";
  const [show,setShow] = useState(false)
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((res) => {
        console.log(res);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
    form.reset();
    navigate(from);
    console.log(email, password);
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        navigate(from);
        console.log(res.user);
      })
      .catch((error) => {
        console.log("error: ", error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h2 className="text-center text-4xl font-bold pb-2">Login!!!</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={show ? "text": "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-1 ">
                  <input
                  onClick={()=>setShow(!show)}
                    type="checkbox"
                    id="show_password"
                    name="showPassword"
                    value="showPassword"
                  />
                  <label className="label-text-alt" htmlFor="show_password">
                    Show password
                  </label>
                </div>
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="form-control  gap-5 ">
              <button className="btn hover:bg-pink-300 hover:text-pink-900 bg-pink-900 text-pink-100">
                Login
              </button>
            </div>
          </form>
          <div className="card-body -mt-14">
            <button
              onClick={handleGoogleSignIn}
              className="btn hover:bg-pink-900 hover:text-pink-300 bg-black-50 border-pink-900  text-pink-100"
            >
              Login With Google
            </button>
            <label className="flex items-center gap-1 text-sm">
              <span className="text-pink-50">New to PriceList?</span>
              <Link to="/register" className=" font-bold text-pink-500">
                {" "}
                Register here!
              </Link>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
