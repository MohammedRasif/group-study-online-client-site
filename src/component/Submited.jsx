import { json, useLoaderData } from "react-router-dom";
import SeeDetails from "./SeeDetails";
import SeeSubmited from "./SeeSubmited";

const Submited = () => {
    const study = useLoaderData();
    console.log(study)
    // useEffect(()=>{
    //     fetch('http://localhost:5000/study')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // },[])
    return (
        <div className="p-32   grid md:grid-cols-1 lg:grid-cols-3">
            {
                study.map(studys => <SeeSubmited
                key={studys._id}
                studys={studys}

                ></SeeSubmited>)
            }
        </div>
    );
};

export default Submited;