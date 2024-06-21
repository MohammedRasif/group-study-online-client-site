import { FaGoogle } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Link,  useNavigate,   } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
// import { useContext } from "react";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
// import toast from "react-hot-toast";

const Login = () => {
    const navigate = useNavigate()

    const {signIn,signInWithGoogle} = useContext(AuthContext);

    const handleGoogleLogin = async() =>{
        //console.log(handleGoogleLogin)
        try{
            await signInWithGoogle()
            toast.success('SignIn Successfully')
            navigate('/')


        } catch (error) {
            // console.log(error)
            toast.error(error?.massage)
        }
    }

    const handleLogin = event => {
        event.preventDefault();
        // loginInof
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }

    // const handleLogin = event =>{
    //     event.preventDefault();
    //     const form = event.value;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(email,password)
    //     signIn(email,password)
    //     .then(result =>{
    //         const user =result.user;
    //        console.log(user)
    //         toast.success('SignIn Successfully')
    //     })
    //     .catch(error => {
    //         //console.log(error)
    //         toast.error(error?.massage)
    //     })
        
    // }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col text-blue-800 ">
                <div className="text-center ">
                <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password"  className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className="flex justify-center m-3 text-2xl">
                <button onClick={handleGoogleLogin} className="pr-3"><FaGoogle></FaGoogle></button>
                <button className="pr-3"><FaFacebook></FaFacebook></button>
                <button><FaGithub></FaGithub></button>
                 </div>
                    <p className="mx-8">New Here ? please 
                <Link to="/register">
                 <button className="btn btn-link">Register</button>
                </Link> </p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;