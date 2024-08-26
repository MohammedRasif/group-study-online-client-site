const ConformAssignments = ({ conformAssignemts }) => {
  return (
    <>
      {conformAssignemts?.status === "complete" && (
        <tr>
          <th></th>

          <td>{conformAssignemts?.name}</td>

          <td>{conformAssignemts?.assignment}</td>
          <td>{conformAssignemts?.status}</td>
          <td>{conformAssignemts?.marks}</td>


          <th></th>
        </tr>
      )}
    </>
  );
};

export default ConformAssignments;
