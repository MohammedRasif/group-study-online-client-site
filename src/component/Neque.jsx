import { BiCheck } from "react-icons/bi";
import img from "../assets/image/features-2.png"

const Neque = () => {
    return (
        <div className="m-20 pt-10">
            <div className="flex items-center">
            <div className="w-1/2">
                <h1  className="text-blue-800 text-5xl">Neque officiis dolore maiores et exercitationem quae est seda lidera pat claero</h1>

                <h1 className="text-xl mt-10">Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem</h1>
                <div className="flex items-center mt-2">
                    <h1 className="text-blue-800 text-3xl mr-3"><BiCheck></BiCheck></h1>
                    <h1 className="text-xl">Repudiandae rerum velit modi et officia quasi facilis</h1>
                </div>
                <h1 className="text-xl mt-10">Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem</h1>
                <div className="flex items-center mt-2">
                    <h1 className="text-blue-800 text-3xl mr-3"><BiCheck></BiCheck></h1>
                    <h1 className="text-xl">Repudiandae rerum velit modi et officia quasi facilis</h1>
                </div>
                <h1 className="text-xl mt-10 ">Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem</h1>
                <div className="flex items-center mt-2">
                    <h1 className="text-blue-800 text-3xl mr-3"><BiCheck></BiCheck></h1>
                    <h1 className="text-xl">Repudiandae rerum velit modi et officia quasi facilis</h1>
                </div>
            </div>
            <div>
                <img src={img}className="h-[500px]" alt="" />
            </div>
            </div>
        </div>
    );
};

export default Neque;