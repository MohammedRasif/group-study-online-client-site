import { Link } from "react-router-dom";

const Confromss = ({ confromss}) => {
  console.log(confromss._id)
  return (
    <div>
      
      <div className="overflow-x-auto ">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th className="ml-10"> Difficulty level</th>
            <th>Status</th>             
              <th>Mark</th>

              <th></th>
            </tr>
          </thead>
            
          
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                
              </th>
              
              <td>{confromss.name}</td>

              
              <td>{confromss.assignment}</td>
            <td>Pending</td>
              <Link to={`/givemark/${confromss?._id}`}><button  className="btn glass bg-blue-600 btn-xs text-white p-2 font-bold">Give Mark</button></Link>


              <th>
                
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Confromss;
