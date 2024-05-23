import { useLoaderData } from "react-router-dom";
import SeeSubmited from "./SeeSubmited";

const Submited = () => {
    const study = useLoaderData();
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