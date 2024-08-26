import { Link } from "react-router-dom";

const Confromss = ({ confromss }) => {
  return (
    <>
      {confromss?.status === "pending" && (
          <tr>
            <th></th>

            <td>{confromss?.name}</td>

            <td>{confromss?.assignment}</td>
            <td>{confromss?.status}</td>
            <Link to={`/givemark/${confromss?._id}`}>
              <button className="btn glass bg-blue-600 btn-xs text-white p-2 font-bold">
                Give Mark
              </button>
            </Link>

            <th></th>
          </tr>
        )}
    </>
  );
};

export default Confromss;
