import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const GiveMarks = () => {
  const submit = useLoaderData();
  const {name,title,marks,date,assignment,photo,pdf,description,_id} = submit
  //console.log(name)

  const handleUpdateMark = event =>{
    event.preventDefault();
    const form= event.target;
    const marks = form.marks.value;
    const description=form.description.value;
    const status = "complete";
    const name = form.name.value;
    const date = form.date.value;
    const assignment = form.assignment.value;
    const photo = form.photo.value;
    const pdf = form.pdf.value;


    const updateDetails = {status,marks,description,name,date,assignment,photo,pdf}
    //console.log(updateDetails)

    fetch(`https://study-server-site.vercel.app/submited/${_id}`,{
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


    <div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4  hidden ">

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-blue-800">Title</span>
                        </label>
                        <input type="text" name="name" placeholder="title" defaultValue={name} className="input input-bordered" required />
                        </div>
                       
                        
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-blue-800">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" defaultValue={date} required />
                        </div>


                        
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-blue-800">assignment difficulty level</span>
                        </label>
                        <input type="text" name="assignment" placeholder="difficulty level" defaultValue={assignment} className="input input-bordered" required />
                        </div>
                    </div>
                   <div  className="grid lg:grid-cols-2 gap-4 hidden">
                     <div className="form-control" >
                     <label className="label">
                            <span className="label-text text-blue-800">Photo</span>
                        </label>
                    <input type="url" name="photo" placeholder="Photo Url" defaultValue={photo} className="input input-bordered" id="" />
                     </div>
                     <div className="form-control">
                     <label className="label">
                            <span className="label-text text-blue-800">PDF</span>
                        </label>
                    <input type="url" name="pdf" placeholder="PDF Doc." defaultValue={pdf} className="input input-bordered" id="" />
                     </div>
                   </div>
    </div>



    </form>
  );
};

export default GiveMarks;
