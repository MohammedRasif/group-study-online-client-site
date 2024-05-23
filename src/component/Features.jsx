import img from "../assets/image/features.png"
import { BiCheck } from "react-icons/bi";


const Features = () => {
    return (
        <div className="m-20">
            <h1 className="text-blue-800 text-xl text-center">FEATURES</h1>
            <h1 className="text-blue-800 text-5xl text-center">Laboriosam et omnis fuga quis dolor direda fara</h1>
          
           <div className="flex items-center mt-8">
           <div>
                <img src={img} className="h-[450px]" alt="" />
            </div>
            <div className="flex space-x-9 ml-10">
                <div className="space-y-10">
                    <div className="flex items-center bg-slate-300 p-5 rounded-xl">
                        <h1 className="bg-slate-200 text-2xl mr-3"><BiCheck></BiCheck></h1>
                        <h1 className="text-xl">Eos aspernatur rem</h1>
                    </div>
                    <div className="flex items-center bg-slate-300 p-5 rounded-xl">
                        <h1 className="bg-slate-200 text-2xl mr-3"><BiCheck></BiCheck></h1>
                        <h1 className="text-xl">Eos aspernatur rem</h1>
                    </div>
                    <div className="flex items-center bg-slate-300 p-5 rounded-xl">
                        <h1 className="bg-slate-200 text-2xl mr-3"><BiCheck></BiCheck></h1>
                        <h1 className="text-xl">Eos aspernatur rem</h1>
                    </div>
                </div>
                <div className="space-y-10">
                    <div className="flex items-center bg-slate-300 p-5 rounded-xl">
                        <h1 className="bg-slate-200 text-2xl mr-3"><BiCheck></BiCheck></h1>
                        <h1 className="text-xl">Facilis neque ipsa</h1>
                    </div>
                    <div className="flex items-center bg-slate-300 p-5 rounded-xl">
                        <h1 className="bg-slate-200 text-2xl mr-3"><BiCheck></BiCheck></h1>
                        <h1 className="text-xl">Facilis neque ipsa</h1>
                    </div>
                    <div className="flex items-center bg-slate-300 p-5 rounded-xl">
                        <h1 className="bg-slate-200 text-2xl mr-3"><BiCheck></BiCheck></h1>
                        <h1 className="text-xl">Facilis neque ipsa</h1>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Features;