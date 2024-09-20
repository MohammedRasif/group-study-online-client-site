import img from "../assets/image/hero-img.png";

const Banner = () => {
    return (
        <div>
            <div
                className='bg-no-repeat bg-center bg-cover pb-20 h-[700px]'
                style={{ backgroundImage: `url("https://i.ibb.co/09HJm0k/hero-bg.png")` }}
            >
                <div className="flex flex-col lg:flex-row items-center justify-center py-32 px-4 lg:px-16 lg:space-y-0 space-y-8">
                    <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
                        <h1 className="text-4xl lg:text-5xl text-blue-800">Online Group Study</h1>
                        <h2 className="text-lg lg:text-2xl text-blue-800">
                            Online group study sessions for topics related to LoRaWAN (Long Range Wide Area Network) offer a collaborative environment for learning about IoT connectivity, data transmission, and network protocols.
                        </h2>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <img src={img} className="h-[200px] md:h-[350px] lg:h-[450px] w-auto " alt="Group Study" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
