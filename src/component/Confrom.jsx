import { useLoaderData } from "react-router-dom";
import Confromss from "./Confromss";

const Confrom = () => {
    const conform = useLoaderData();
    return (
        <div className="pt-32">
            
            {
                conform.map(confromss=><Confromss key={confromss._id} confromss={confromss} ></Confromss>)
            }
        </div>
    );
};

export default Confrom;