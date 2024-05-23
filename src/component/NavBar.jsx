import { Link, NavLink } from "react-router-dom"
import img from "../assets/image/study.png"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const NavBar = () => {
    const { user,logOut }=useContext(AuthContext)

    const navLinks = 
    <>
    <li> <NavLink to="/">Home</NavLink> </li>
    {
        user?.email ? <>
        <li> <NavLink to="/submit"> Submit Now  </NavLink></li>
        <li> <NavLink to="/submited"> Submited</NavLink></li>
        <li> <NavLink to="/conform">Conform</NavLink> </li>
        </> :
         <li> <NavLink to="/register">Register</NavLink> </li>

    }
    <li> <NavLink to="/contact">Contact Us</NavLink> </li>
    
    </>;
    return (
        <div>
                <div className="navbar bg-slate-200 fixed z-10 bg-opacity-30 max-w-screen-full  text-blue-800 font-bold ">
            <div className="navbar-start">
                <div className="dropdown">
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLinks}
                </ul>
                </div>
                <div className=" flex  font-bold">
                        <img src={img} className="h-20"  alt="" />
                        
                    </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
            {
                        user ?

                            <>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10  ring ring-black rounded-full">
                                            <img className="" alt="User Image" src={user?.photoURL} />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        <li> <p>{user?.displayName}</p>
                                        </li>
                                        <li><button onClick={logOut} className="btn text-white  bg-blue-800 hover:bg-blue-950 hover:text-white">Logout</button></li>
                                    </ul>
                           </div>
                            </>
                            :
                            <Link to="/login"><button className=" btn font-bold text-2xl mr-5">Login</button></Link>

                    }  
            </div>
            </div>
            </div>
    );
};

export default NavBar;

