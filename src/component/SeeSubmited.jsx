import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxioSecure from "../Hooks/useAxioSecure";

const SeeSubmited = ({studys}) => {
    const {title,marks,date,assignment,photo,pdf,description,_id} = studys
    const axiosSecure = useAxioSecure()

    const handleDelete = _id =>{
        //console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
            fetch(`https://study-server-site.vercel.app/study/${_id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data => {
                //console.log(data);
                if(data.deletedCount>0){
                      Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
              });
                }
            })
            }
          });

    }

  


    return (
        <div className="overflow-x-auto ">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          
        </th>
        <th>Title</th>
        <th>Description</th>
        <th>Marks</th>
        <th> Difficulty level</th>
        <th> date</th>
        <th> PDF</th>

        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
            </div>
          </div>
        </td>
        <td>
        {description}
          <br/>
        </td>
        <td>{marks}</td>
        <td>{assignment}</td>
        <td>{date}</td>
        <td>{pdf}</td>

        <th>
          <Link to={`/seeDetails/${_id}`}><button className="btn btn-ghost btn-xs text-blue-800 font-bold">details</button></Link>
          <Link to={`/update/${_id}`}><button className="btn btn-ghost btn-xs text-blue-800 font-bold">Update</button></Link>
          <button
          onClick={()=>handleDelete(_id)}
          className="btn btn-ghost btn-xs text-blue-800 font-bold">Delete</button>

        </th>
      </tr>
     
     
    </tbody>
    
    
  </table>
</div>
    );
};

export default SeeSubmited;