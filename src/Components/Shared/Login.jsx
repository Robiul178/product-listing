
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const Login = () => {
    const { logInuser, gooogleLogIn } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleFormData = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const email = form.get("email")
        const password = form.get("password")

        logInuser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user) {
                    alert("Good job!", "You log in successfully!", "success", {
                        button: "Let's see some product!",
                    });
                    navigate('/')
                }
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert.warning(errorMessage)
            });
    }


    const handleGoogleSingUp = () => {
        gooogleLogIn()
            .then((result) => {
                navigate('/')
                console.log(result)
            }).catch(() => { });
    }


    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row-reverse sm:pt-14">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi <br /> exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div>
                        <div className="flex flex-col w-full border-opacity-50">
                            <div className="grid  card rounded-box place-items-center pt-4">
                                <h2 className="text-xl py-2">Sing Up Free</h2>
                                <h2 className="py-2"><Link to="/singin">
                                    <p className="text-blue-600 underline">Please register here</p>
                                </Link></h2>
                                <button onClick={handleGoogleSingUp} className="btn btn-outline w-[82%] border-gray-600 ">Google</button>
                            </div>
                            <div className="divider">OR</div>
                            <div className="grid   card  rounded-box ">
                                <form onSubmit={handleFormData} className="card-body">
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

                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;