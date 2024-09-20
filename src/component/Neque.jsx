import { BiCheck } from "react-icons/bi";
import img from "../assets/image/features-2.png";

const Neque = () => {
    return (
        <div className="m-4 md:m-20 pt-10">
            <div className="flex flex-col lg:flex-row items-center">
                {/* Left Section */}
                <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                    <h1 className="text-blue-800 text-2xl md:text-4xl lg:text-5xl leading-tight">
                        Neque officiis dolore maiores et exercitationem quae est seda lidera pat claero
                    </h1>

                    <h1 className="text-base md:text-lg lg:text-xl mt-6 md:mt-8 lg:mt-10 leading-relaxed">
                        Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.
                    </h1>

                    <div className="flex items-center mt-4 md:mt-6">
                        <h1 className="text-blue-800 text-3xl mr-2 md:mr-3"><BiCheck /></h1>
                        <h1 className="text-base md:text-lg lg:text-xl">Repudiandae rerum velit modi et officia quasi facilis</h1>
                    </div>

                    <h1 className="text-base md:text-lg lg:text-xl mt-6 md:mt-8 lg:mt-10 leading-relaxed">
                        Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.
                    </h1>

                    <div className="flex items-center mt-4 md:mt-6">
                        <h1 className="text-blue-800 text-3xl mr-2 md:mr-3"><BiCheck /></h1>
                        <h1 className="text-base md:text-lg lg:text-xl">Repudiandae rerum velit modi et officia quasi facilis</h1>
                    </div>

                    <h1 className="text-base md:text-lg lg:text-xl mt-6 md:mt-8 lg:mt-10 leading-relaxed">
                        Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.
                    </h1>

                    <div className="flex items-center mt-4 md:mt-6">
                        <h1 className="text-blue-800 text-3xl mr-2 md:mr-3"><BiCheck /></h1>
                        <h1 className="text-base md:text-lg lg:text-xl">Repudiandae rerum velit modi et officia quasi facilis</h1>
                    </div>
                </div>
                {/* Right Section: Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img src={img} className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] w-auto" alt="Features" />
                </div>
            </div>
        </div>
    );
};

export default Neque;
