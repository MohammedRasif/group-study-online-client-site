import { useLoaderData } from "react-router-dom";
import Confromss from "./Confromss";

const Confrom = () => {
  const conform = useLoaderData();
  //const {_id,} = conform;
  console.log(conform);
  return (
    <div className="pt-32  ">
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
          {conform.map((confromss) => (
            <Confromss key={confromss._id} confromss={confromss}></Confromss>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Confrom;
