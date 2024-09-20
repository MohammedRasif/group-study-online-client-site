import { useForm } from "react-hook-form";
import useAxioSecure from "../Hooks/useAxioSecure";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const SubmitNow = () => {
  const { user } = useContext(AuthContext);
  const adderMail = user?.email;
  const axiosSecure = useAxioSecure();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const contestItem = {
      email: adderMail,
      title: data.title,
      marks: parseFloat(data.marks),
      date: data.date,
      pdf: data.pdf,
      description: data.description,
      assignment: data.assignment,
      photo: data.photo,
      status: "pending"
    };

    const contestRes = await axiosSecure.post("/study", contestItem);
    if (contestRes.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data.title} is added to the Contest`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="pt-20 px-4">
      <h1 className="text-4xl md:text-5xl text-blue-800 text-center py-10">Submit Now</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-800">Title</span>
            </label>
            <input
              type="text"
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
              className="input input-bordered"
              {...register("date", { required: true })}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-800">Contest Type</span>
            </label>
            <select
              defaultValue="default"
              className="select select-bordered"
              {...register("assignment", { required: true })}
            >
              <option disabled value="default">Select a category</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-800">Photo</span>
            </label>
            <input
              type="url"
              placeholder="Photo URL"
              className="input input-bordered"
              {...register("photo", { required: true })}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-800">PDF</span>
            </label>
            <input
              type="url"
              placeholder="PDF Document"
              className="input input-bordered"
              {...register("pdf", { required: true })}
            />
          </div>
        </div>

        <div className="form-control mt-4">
          <label className="label">
            <span className="label-text text-blue-800">Description</span>
          </label>
          <textarea
            className="textarea textarea-primary"
            placeholder="Short description"
            {...register("description", { required: true })}
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn glass bg-blue-600 text-white mt-6 mx-auto block lg:w-96 lg:ml-[550px] w-full md:w-auto md:mx-0 md:px-16"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmitNow;
