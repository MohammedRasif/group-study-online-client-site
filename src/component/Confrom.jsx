import { useLoaderData } from "react-router-dom";
import Confromss from "./Confromss";

const Confrom = () => {
    const conform = useLoaderData();
    //const {_id,} = conform;
    console.log(conform)
    return (
        <div className="pt-32 ">
            
            {
                conform.map(confromss=><Confromss key={confromss._id}  confromss={confromss} ></Confromss>)
            }
        </div>
    );
};

export default Confrom;