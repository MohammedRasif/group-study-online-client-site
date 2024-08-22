import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const GiveMarks = () => {
  const submit = useLoaderData();
  const {title,marks,date,assignment,photo,pdf,description,_id} = submit

  const handleUpdateMark = event =>{
    event.preventDefault();
    const form= event.target;
    const marks = form.marks.value;
    const description=form.description.value;
    const status = "complete";
    const title = form.title.value;
    const date = form.date.value;
    const assignment = form.assignment.value;
    const photo = form.photo.value;
    const pdf = form.pdf.value;


    const updateDetails = {status,marks,description,title,date,assignment,photo,pdf}
    //console.log(updateDetails)

    fetch(`http://localhost:5000/submited/${_id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(updateDetails)
    })
    .then(res => res.json())
    .then(data => {
         //console.log(data)
         if(data.modifiedCount>0){
            Swal.fire({
                title: 'Success!',
                text: 'User Updated successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
         }
       
    })
    .catch(error =>
        console.log(error))
}

  return (
    <form onSubmit={handleUpdateMark}>
      <div className="pt-28 text-center mb-24">
      <h1 className="text-5xl text-blue-500">Assignment Mark</h1>
      <div className="mt-7">
        <h1 className="text-left ml-96 pl-56 font-bold">Mark</h1>
        <input
          type="text" name="marks"
          placeholder="Give Assignment Mark"
          className="input input-bordered w-full max-w-xs "
        />
      </div>
      <div className="mt-5 mb-10">
        <h1 className="text-left ml-96 pl-56 font-bold">Feedback</h1>
        <textarea
          placeholder="Bio"
          name="description"
          className="textarea textarea-bordered textarea-md w-full max-w-xs"
        ></textarea>
      </div>
      <button className="btn glass bg-blue-500 text-white">Submited Now</button>
    </div>
    </form>
  );
};

export default GiveMarks;
