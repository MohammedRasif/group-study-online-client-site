import { Link, NavLink } from "react-router-dom";
import img from "../assets/image/study.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const navLinks = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            {user?.email ? (
                <>
                    <li><NavLink to="/submit">Submit Now</NavLink></li>
                    <li><NavLink to="/submited">Submitted</NavLink></li>
                    <li><NavLink to="/conform">Pending Assignment</NavLink></li>
                    <li><NavLink to="/conformAssignment">Conform Assignment</NavLink></li>
                </>
            ) : (
                <li><NavLink to="/register">Register</NavLink></li>
            )}
            <li><NavLink to="/contact">Contact Us</NavLink></li>
        </>
    );

    return (
        <div className="navbar bg-slate-200 fixed z-10 bg-opacity-30 max-w-screen-full text-blue-800 font-bold">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex items-center">
                    <img src={img} className="h-20" alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 ring ring-black rounded-full">
                                <img alt="User" src={user?.photoURL} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li><p>{user?.displayName}</p></li>
                            <li><button onClick={logOut} className="btn text-white bg-blue-800 hover:bg-blue-950">Logout</button></li>
                        </ul>
                    </div>
                ) : (
                    <Link to="/login"><button className="btn font-bold text-2xl mr-5">Login</button></Link>
                )}
            </div>
        </div>
    );
};

export default NavBar;
