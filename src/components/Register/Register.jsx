import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const mobile = form.mobile.value
    const password = form.password.value
    const confirmPassword = form.confirmPassword.value
    console.log(name, email, mobile, password, confirmPassword)
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <h2 className="text-center text-4xl font-bold pb-2">Login!!!</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Mobile</span>
              </label>
              <input
                type="text"
                name="mobile"
                placeholder="mobile"
                className="input input-bordered"
                required
              />
            </div>
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
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="confirm password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-2  gap-5 ">
              <button className="btn hover:bg-pink-300 hover:text-pink-900 bg-pink-900 text-pink-100">
                Register
              </button>
            </div>
            <label className="flex items-center gap-1 text-sm">
              <span className="text-pink-50">Already have account?</span>
              <Link to="/login" className=" font-bold text-pink-500">
                {" "}
                Login here.
              </Link>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
