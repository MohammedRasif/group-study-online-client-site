import img from "../assets/image/features.png";
import { BiCheck } from "react-icons/bi";

const Features = () => {
    return (
        <div className="m-4 md:m-20">
            <h1 className="text-blue-800 text-xl text-center">FEATURES</h1>
            <h1 className="text-blue-800 text-3xl md:text-5xl text-center">Laboriosam et omnis fuga quis dolor direda fara</h1>
            
            <div className="flex flex-col lg:flex-row items-center mt-8 lg:space-y-0  space-y-6 lg:space-x-10">
                <div className="flex justify-center mb-8 md:mb-0">
                    <img src={img} className="h-[200px] md:h-[450px]" alt="Features" />
                </div>
                <div className="flex flex-col md:flex-row md:space-x-10 lg:space-y-0 md:space-y-0 space-y-6">
                    <div className="space-y-6">
                        <div className="flex items-center bg-slate-300 p-5 rounded-xl">
                            <h1 className="bg-slate-200 text-2xl mr-3"><BiCheck /></h1>
                            <h1 className="text-xl">Eos aspernatur rem</h1>
                        </div>
                        <div className="flex items-center bg-slate-300 p-5 rounded-xl">
                            <h1 className="bg-slate-200 text-2xl mr-3"><BiCheck /></h1>
                            <h1 className="text-xl">Eos aspernatur rem</h1>
                        </div>
                        <div className="flex items-center bg-slate-300 p-5 rounded-xl">
                            <h1 className="bg-slate-200 text-2xl mr-3"><BiCheck /></h1>
                            <h1 className="text-xl">Eos aspernatur rem</h1>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-center bg-slate-300 p-5 rounded-xl">
                            <h1 className="bg-slate-200 text-2xl mr-3"><BiCheck /></h1>
                            <h1 className="text-xl">Facilis neque ipsa</h1>
                        </div>
                        <div className="flex items-center bg-slate-300 p-5 rounded-xl">
                            <h1 className="bg-slate-200 text-2xl mr-3"><BiCheck /></h1>
                            <h1 className="text-xl">Facilis neque ipsa</h1>
                        </div>
                        <div className="flex items-center bg-slate-300 p-5 rounded-xl">
                            <h1 className="bg-slate-200 text-2xl mr-3"><BiCheck /></h1>
                            <h1 className="text-xl">Facilis neque ipsa</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
