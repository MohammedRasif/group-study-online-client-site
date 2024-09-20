import img1 from "../assets/image/values-1.png";
import img2 from "../assets/image/values-2.png";
import img3 from "../assets/image/values-3.png";

const Values = () => {
    return (
        <div className="m-4 md:m-20">
            <div className="text-center mb-10">
                <h1 className="text-blue-800 text-xl">OUR VALUES</h1>
                <h1 className="text-blue-800 text-3xl md:text-5xl">Odit est perspiciatis laborum et dicta</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="text-center">
                    <img src={img1} alt="Value 1" className="mx-auto mb-4" />
                    <h1 className="text-2xl text-blue-800">Ad cupiditate sed est odio</h1>
                    <p className="mt-2">Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.</p>
                </div>
                <div className="text-center">
                    <img src={img2} alt="Value 2" className="mx-auto mb-4" />
                    <h1 className="text-2xl text-blue-800">Ad cupiditate sed est odio</h1>
                    <p className="mt-2">Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.</p>
                </div>
                <div className="text-center">
                    <img src={img3} alt="Value 3" className="mx-auto mb-4" />
                    <h1 className="text-2xl text-blue-800">Ad cupiditate sed est odio</h1>
                    <p className="mt-2">Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.</p>
                </div>
            </div>
        </div>
    );
};

export default Values;
