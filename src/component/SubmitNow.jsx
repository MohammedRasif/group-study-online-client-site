import Swal from 'sweetalert2'


const SubmitNow = () => {
    const handleSubmitAssignment = event =>{
        event.preventDefault();
        const form= event.target;
        const title = form.title.value;
        const marks = form.marks.value;
        const date = form.date.value;
        const assignment = form.assignment.value;
        const photo = form.photo.value;
        const pdf = form.pdf.value;
        const description = form.description.value;

        const allDetails = {title,marks,date,assignment,photo,pdf,description}
        //console.log(allDetails)

        fetch('https://study-server-site.vercel.app/study',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(allDetails)
        })
        .then(res => res.json())
        .then(data => {
             //console.log(data)
             if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User add successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
             }
           
        })
        .catch(error =>
            {
                            //console.log(error)

            }
        )



    }
    return (
        <div className="pt-20">
            <h1 className="text-5xl text-blue-800 text-center py-10">Submit Now</h1>
            <form onSubmit={handleSubmitAssignment} className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-blue-800">Title</span>
                        </label>
                        <input type="text" name="title" placeholder="Title"  className="input input-bordered" required />
                        </div>
                       
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-blue-800">Marks</span>
                        </label>
                        <input type="text" name="marks" placeholder="Marks" className="input input-bordered" required />
                        </div>
                       
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-blue-800">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" required />
                        </div>


                        
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-blue-800">assignment difficulty level</span>
                        </label>
                        <input type="text" name="assignment" placeholder="difficulty level" className="input input-bordered" required />
                        </div>
                    </div>
                   <div  className="grid lg:grid-cols-2 gap-4">
                     <div className="form-control" >
                     <label className="label">
                            <span className="label-text text-blue-800">Photo</span>
                        </label>
                    <input type="url" name="photo" placeholder="Photo Url" className="input input-bordered" id=""  required/>
                     </div>
                     <div className="form-control">
                     <label className="label">
                            <span className="label-text text-blue-800">PDF</span>
                        </label>
                    <input type="url" name="pdf" placeholder="PDF Doc." className="input input-bordered" id="" required />
                     </div>
                   </div>
                   
                   <label className="label">
                            <span className="label-text text-blue-800">Description</span>
                        </label>
                   <textarea className="textarea textarea-primary " name="description" placeholder="Short description"></textarea>
                    
                   <button className="btn glass bg-blue-800 text-white hover:bg-blue-700 mt-5 mx-[620px]">Submit Now....</button>
                </form>
        </div>
    );
};

export default SubmitNow;