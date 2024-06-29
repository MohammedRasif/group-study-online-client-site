import { json, useLoaderData } from "react-router-dom";
import SeeDetails from "./SeeDetails";
import SeeSubmited from "./SeeSubmited";

const Submited = () => {
    const study = useLoaderData();
    console.log(study)
    // useEffect(()=>{
    //     fetch('https://study-server-site.vercel.app/study')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // },[])
    return (
        <div className="pt-32">
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