// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';


const Login = () => {
    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/';

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);


    const handleLogin = event => {
        event.preventDefault();
        setError("")

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const handleGoogleLogin = () => {
        setError("")
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleGithubLogin = () => {
        setError("")
        githubSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col mb-5">
                    <div className="text-center my-10">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input onBlur={(e) => setPassword(e.target.value)} type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label label-text-alt">
                                    Not a member?<Link to='/register' className="label-text-alt link link-hover">Register Now</Link>
                                </label>
                            </div>
                            <div className="label text-error">
                                <p>{error}</p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" onClick={handleLogin} >Login</button>
                            </div>
                            <div className="form-control">
                                <button className="btn btn-primary" onClick={handleGoogleLogin} >Login with Google</button>
                            </div>
                            <div className="form-control">
                                <button className="btn btn-primary" onClick={handleGithubLogin} >Login with Github</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;