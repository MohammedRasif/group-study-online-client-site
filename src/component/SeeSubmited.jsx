import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxioSecure from "../Hooks/useAxioSecure";
import { BsBookmarkStar, BsCalendar2Date } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
import { FaRegFilePdf } from "react-icons/fa6";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";

const SeeSubmited = ({ studys }) => {
  const { title, marks, date, assignment, photo, pdf, description, _id,email } =
    studys;
  const axiosSecure = useAxioSecure();
  const {user} = useContext(AuthContext)

  const handleDelete = (_id) => {
    //console.log(_id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/study/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            //console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto pb-16 pt-20   ">
      <div className="card bg-base-100 lg:w-96 md:w-80 shadow-xl">
        <figure>
          <img
            src={photo}
            className=" h-56 w-80  rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="flex items-center">
        <BsCalendar2Date className="text-blue-800 "></BsCalendar2Date>
        <h1 className="pl-3">{date}</h1>
    </div>
    <div className="flex items-center">
        <BsBookmarkStar className="text-blue-800 "></BsBookmarkStar>
        <h1 className="pl-3">{marks}</h1>
    </div>
    <div className="flex items-center">
        <MdOutlineAssignment className="text-blue-800 "></MdOutlineAssignment>
        <h1 className="pl-3">{assignment}</h1>
    </div>
    <div className="flex items-center">
        <FaRegFilePdf className="text-blue-800 "></FaRegFilePdf>
        <h1 className="pl-3">{pdf}</h1>
    </div>
          <div className="card-actions justify-between">
            <Link to={`/seeDetails/${_id}`}><button className="btn glass bg-blue-500 text-white">Details</button></Link>
            {email === user.email&&(
                          <Link to={`/update/${_id}`}><button className="btn glass bg-blue-500 text-white">Update</button></Link>

            )
            }
            {email === user.email&&(
                          <Link onClick={() => handleDelete(_id)}><button className="btn glass bg-blue-500 lg:mt-0 md:mt-0 mt-2 text-white">Delete</button></Link>

            )

            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeSubmited;


