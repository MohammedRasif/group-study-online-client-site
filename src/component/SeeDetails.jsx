import { useLoaderData } from "react-router-dom";
import { BsBookmarkStar } from "react-icons/bs";
import { BsCalendar2Date } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
import { FaRegFilePdf } from "react-icons/fa6";
import useAxioSecure from "../Hooks/useAxioSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const SeeDetails = () => {
    const axiosSecure = useAxioSecure()
    
    const details = useLoaderData()
    const {title,marks,date,assignment,photo,pdf,description,status} = details

    const handleSubmit = async (event) => {
      console.log("rasif");
      // event.preventDefault();
      const allContestSubmited = {
        name: title,
        description: description,
        date: date,
        marks: marks,
        photo: photo,
        assignment: assignment,
        pdf: pdf,
        status:status

        

      };
      const res = await axiosSecure.post("/submited", allContestSubmited);
      console.log("submited saved", res.data);
      if(res.data?.insertedId){
        Swal.fire({
          position:"top-end",
          icon:"success",
          title:"Successfully Add Now To padding Route",
          showConfirmButton: false,
          timer:1500
        })
      } 
    };


    return (
      <div className="card w-full max-w-md mx-auto pt-24 p-5">
      <figure><img src={photo} alt="Shoes" className="w-full h-auto" /></figure>
      <div className="card-body">
        <h2 className="card-title text-lg md:text-xl">{title}</h2>
        <p className="text-sm md:text-base">{description}</p>
        <div className="flex items-center">
          <BsCalendar2Date className="text-blue-800" />
          <h1 className="pl-3 text-sm md:text-base">{date}</h1>
        </div>
        <div className="flex items-center">
          <BsBookmarkStar className="text-blue-800" />
          <h1 className="pl-3 text-sm md:text-base">{marks}</h1>
        </div>
        <div className="flex items-center">
          <MdOutlineAssignment className="text-blue-800" />
          <h1 className="pl-3 text-sm md:text-base">{assignment}</h1>
        </div>
        <div className="flex items-center">
          <FaRegFilePdf className="text-blue-800" />
          <h1 className="pl-3 text-sm md:text-base">{pdf}</h1>
        </div>
        <button onClick={handleSubmit} className="btn glass bg-blue-500 text-white hover:text-black mt-4">Take Assignment</button>
        <h1 className="text-2xl text-blue-800 font-bold my-4 hidden inline-block">---------------o---------------</h1>
      </div>
    </div>
    
    );
};

export default SeeDetails;