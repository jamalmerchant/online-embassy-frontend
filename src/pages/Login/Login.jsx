import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "../../../src/assets/image/google2.png";
import { AuthContext } from "../../Contexts/AuthProvider";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("login Successfull!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error("login failed!");
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Login now!</h1>
          </div>
          <div className="card w-96 bg-base-100  shadow-2xl">
            <form className="card-body"></form>
            <form onSubmit={handleSubmit(handleLogin)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: "password is required",
                    minLength: {
                      value: 6,
                      message: "password at leeast 6 character",
                    },
                    pattern: {
                      value: /(?=.*?[A-Z])(?=.*?[!@#$%*])/,
                      message:
                        "password must be one uppercase, and a special character",
                    },
                  })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
                <label className="label">
                  <Link
                    to="/sign-up"
                    href="#"
                    className="label-text-alt link link-hover"
                  >
                    new to website? please create an account
                  </Link>
                </label>
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-primary">
                  <img className="w-10 h-10" src={google} alt="" />
                  continue with google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
