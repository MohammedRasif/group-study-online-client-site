import { useLoaderData } from "react-router-dom";
import ConformAssignments from "./ConformAssignments";

const MyAssignment = () => {
    const conformAssignment = useLoaderData();

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
          {conformAssignment.map((conformAssignemts) => (
            <ConformAssignments key={conformAssignemts._id} conformAssignemts={conformAssignemts}></ConformAssignments>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default MyAssignment;