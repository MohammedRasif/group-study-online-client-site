import img1 from "../assets/image/values-1.png"
import img2 from "../assets/image/values-2.png"
import img3 from "../assets/image/values-3.png"



const Values = () => {
    return (
        <div className="m-20">
            <div className="text-center">
                <h1 className="text-blue-800 text-xl">OUR VALUES</h1>
                <h1 className="text-blue-800 text-5xl">Odit est perspiciatis laborum et dicta</h1>
            </div>
            <div className="grid md:grid-cols-3 space-x-3">
                <div className="text-center mt-10">
                    <img src={img1} alt="" />
                    <h1 className="text-2xl text-blue-800">Ad cupiditate sed est odio</h1>
                    <h1>Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.</h1>
                </div>
                <div className="text-center mt-10">
                    <img src={img2} alt="" />
                    <h1 className="text-2xl text-blue-800">Ad cupiditate sed est odio</h1>
                    <h1>Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.</h1>
                </div>
                <div className="text-center mt-10">
                    <img src={img3} alt="" />
                    <h1 className="text-2xl text-blue-800">Ad cupiditate sed est odio</h1>
                    <h1>Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.</h1>
                </div>
            </div>
        </div>
    );
};

export default Values;