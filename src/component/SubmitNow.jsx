import { useForm } from "react-hook-form";
import useAxioSecure from "../Hooks/useAxioSecure";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const SubmitNow = () => {
  const {user} = useContext(AuthContext)
  //console.log(user.email)
  const adderMail = user?.email
  console.log(adderMail)
  const axiosSecure = useAxioSecure();
  const { register, handleSubmit,formState:{errors} } = useForm();
  console.log(errors)
  const onSubmit = async (data) => {
    console.log(data)
    
      const contestItem = {
        email:adderMail,
        title:data.title,
        //marks:data.marks,
        marks: parseFloat(data.marks),
        date:data.date,
        pdf:data.pdf,
        description: data.description,
        assignment: data.assignment,
        photo:data.photo,
        status:"pending"
      };
      console.log(contestItem)
      
      const contestRes = await axiosSecure.post("/study", contestItem);
      
      console.log(contestRes.data)
      if (contestRes.data.insertedId) {
        //show success popup
        //reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.title} is added to the Contest`,
          showConfirmButton: false,
          timer: 1500,
        });
      }


    //console.log(res.data)
  };

  // const handleSubmitAssignment = event =>{
  //     event.preventDefault();
  //     const form= event.target;
  //     const title = form.title.value;
  //     const marks = form.marks.value;
  //     const date = form.date.value;
  //     const assignment = form.assignment.value;
  //     const photo = form.photo.value;
  //     const pdf = form.pdf.value;
  //     const description = form.description.value;

  //     const allDetails = {title,marks,date,assignment,photo,pdf,description}
  //     //console.log(allDetails)

  //     fetch('http://localhost:5000/study',{
  //         method:'POST',
  //         headers:{
  //             'content-type':'application/json'
  //         },
  //         body:JSON.stringify(allDetails)
  //     })
  //     .then(res => res.json())
  //     .then(data => {
  //          //console.log(data)
  //          if(data.insertedId){
  //             Swal.fire({
  //                 title: 'Success!',
  //                 text: 'User add successfully',
  //                 icon: 'success',
  //                 confirmButtonText: 'Cool'
  //               })
  //          }

  //     })
  //     .catch(error =>
  //         {
  //                         //console.log(error)

  //         }
  //     )

  // }
  return (
    <div className="pt-20">
      <h1 className="text-5xl text-blue-800 text-center py-10">Submit Now</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-800">Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="input input-bordered"
              {...register("title", { required: true })}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-800">Marks</span>
            </label>
            <input
              type="text"
              name="marks"
              placeholder="Marks"
              className="input input-bordered"
              {...register("marks", { required: true })}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-800">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              {...register("date", { required: true })}
            />
          </div>



          <div className=" flex">
            <div className="label">
              <span className="label-text mt-5 text-blue-600">Contest type</span>
            </div>
            <select
              defaultValue="default"
              {...register("assignment", { required: true })}
              className="select select-bordered ml-12 w-full  mt-10 border-x-2 border-y-2 text-black border-black "
            >
              <option disabled value="default">
                Select a category
              </option>
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
             
            </select>
          </div>


        </div>
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-800">Photo</span>
            </label>
            <input
              type="url"
              name="photo"
              placeholder="Photo Url"
              className="input input-bordered"
              id=""
              {...register("photo", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-800">PDF</span>
            </label>
            <input
              type="url"
              name="pdf"
              placeholder="PDF Doc."
              className="input input-bordered"
              id=""
              {...register("pdf", { required: true })}
            />
          </div>
        </div>

        <label className="label">
          <span className="label-text text-blue-800">Description</span>
        </label>
        <textarea
          className="textarea textarea-primary "
          name="description"
          placeholder="Short description"
          {...register("description", { required: true })}
        ></textarea>

        <button type="submit" className="btn glass bg-blue-600 text-white mt-6 ml-[550px] mr-[550px]">
            submited 
          </button>
      </form>
    </div>
  );
};

export default SubmitNow;
