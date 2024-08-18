// import React from 'react';

import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";

const Singin = () => {
    const { singUpUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleFormData = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email")
        const password = form.get("password")


        singUpUser(email, password)
            .then(result => {
                navigate(location?.state ? location.state : '/');
                alert("Good job!", "Your account create successfully!", "success", {
                    button: "OK",
                });
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert.warning(errorMessage)
            });
    }


    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content ">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form
                            onSubmit={handleFormData}
                            className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to="/login">If you already have an account !
                                        <p className="text-blue-600 underline">Please login here</p>
                                    </Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit Form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singin;