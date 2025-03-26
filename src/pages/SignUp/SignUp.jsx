import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import google from "../../../src/assets/image/google2.png";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Contexts/AuthProvider";

const SignUp = () => {
  const navigate = useNavigate();
  const { createUser, updateUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //to do
  const handleSignUp = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userInf = {
          displayName: data.name,
        };
        updateUser(userInf)
          .then(() => {
            saveUser(data.name, data.email);
            navigate("/");
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const saveUser = (name, email) => {
    const user = { name, email };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("user created successfully done");
        }
      });
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Sign Up now!</h1>
          </div>
          <div className="card w-96 bg-base-100  shadow-2xl">
            <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", {
                    required: "name is required ",
                  })}
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>
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
                    to="/login"
                    href="#"
                    className="label-text-alt link link-hover"
                  >
                    already have an account? please login
                  </Link>
                </label>
              </div>
              <div className="form-control mt-2">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
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

export default SignUp;
