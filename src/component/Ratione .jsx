 
import img from "../assets/image/features-3.png"
import { BsGraphUp } from "react-icons/bs";
import { BiDirections } from "react-icons/bi";
import { BiCommand } from "react-icons/bi";
import { BiChip } from "react-icons/bi";
import { TbAntenna } from "react-icons/tb";
import { GiFlexibleStar } from "react-icons/gi";


const Ratione  = () => {
    return (
        <div className="m-20">
            <h1 className="text-5xl text-blue-800 text-center">Ratione mollitia eos ab laudantium rerum beatae quo</h1>
            <div className=" flex mt-10">
                <div className="w-1/3">
                    <img src={img} alt="" />
                </div>
                 
                <div className="flex space-x-10 w-2/3 mt-20 text-xl ml-10">
                    <div className="space-y-5">
                    <div className="flex items-center ">
                        <div className="text-xl text-blue-800 font-bold mr-3">
                            <BsGraphUp></BsGraphUp>
                        </div>
                        <div>
                            <h1 className="text-blue-800 text-xl">Corporis voluptates sit</h1>
                            <h1>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</h1>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="text-xl text-blue-800 font-bold mr-3">
                            <BiDirections></BiDirections>
                        </div>
                        <div>
                            <h1 className="text-blue-800 text-xl">Corporis voluptates sit</h1>
                            <h1>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</h1>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="text-xl text-blue-800 font-bold mr-3">
                            <BiCommand></BiCommand>
                        </div>
                        <div>
                            <h1 className="text-blue-800 text-xl">Corporis voluptates sit</h1>
                            <h1>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</h1>
                        </div>
                    </div>
                 </div>
                 <div className="space-y-5">
                 <div className="flex items-center">
                        <div className="text-xl text-blue-800 font-bold mr-3">
                            <BiChip></BiChip>
                        </div>
                        <div>
                            <h1 className="text-blue-800 text-xl">Corporis voluptates sit</h1>
                            <h1>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</h1>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="text-xl text-blue-800 font-bold mr-3">
                            <TbAntenna></TbAntenna>
                        </div>
                        <div>
                            <h1 className="text-blue-800 text-xl">Corporis voluptates sit</h1>
                            <h1>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</h1>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="text-xl text-blue-800 font-bold mr-3">
                            <GiFlexibleStar></GiFlexibleStar>
                        </div>
                        <div>
                            <h1 className="text-blue-800 text-xl">Corporis voluptates sit</h1>
                            <h1>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</h1>
                        </div>
                    </div>
                 </div>


                    </div>
            </div>
        </div>
    );
};

export default Ratione ;