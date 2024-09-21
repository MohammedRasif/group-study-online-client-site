import { Link } from "react-router-dom";

const Confromss = ({ confromss }) => {
  return (
    <>
      {confromss?.status === "pending" && (
          <tr className="">
            <th></th>

            <td>{confromss?.name}</td>

            <td>{confromss?.assignment}</td>
            <td>{confromss?.status}</td>
            <Link to={`/givemark/${confromss?._id}`}>
              <button className="btn glass bg-blue-600 btn-xs text-white p-2 font-bold lg:mt-0 md:mt-0 mt-5">
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
