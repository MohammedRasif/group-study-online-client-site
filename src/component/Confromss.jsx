import { Link } from "react-router-dom";

const Confromss = ({ confromss }) => {
  return (
    <div>
      
      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Description</th>
              <th>Marks</th>
              <th> Difficulty level</th>
              <th> date</th>
              <th> PDF</th>
              <th>Mark</th>

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
                      <img src={confromss.photo} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{confromss.title}</div>
                  </div>
                </div>
              </td>
              <td>
                {confromss.description}
                <br />
              </td>
              <td>{confromss.marks}</td>
              <td>{confromss.assignment}</td>
              <td>{confromss.date}</td>
              <td>{confromss.pdf}</td>
              <Link to={"/givemark"}><button  className="btn glass bg-blue-600 btn-xs text-white p-2 font-bold">Give Mark</button></Link>


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
