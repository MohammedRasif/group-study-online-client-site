import img from "../assets/image/hero-img.png"

const Banner = () => {
    return (
        <div className='  '>
            <div className='bg-no-repeat bg-center bg-cover pb-20 h-[700px]  ' style={{backgroundImage:`url("https://i.ibb.co/09HJm0k/hero-bg.png")`}}>
              
               <div className="flex items-center py-32 px-16">
               <div className="w-1/2 space-y-4">
                <h1 className="text-5xl text-blue-800" >Online Group Study</h1>
                <h1 className="text-2xl text-blue-800">Online group study sessions for topics related to LoRaWAN (Long Range Wide Area Network) offer a collaborative environment for learning about IoT connectivity, data transmission, and network protocols. </h1>
               </div>
                <div >
                    <img src={img} className="h-[450px] pl-14" alt="" />
                </div>
               </div>
            </div>
        </div>
    );
};

export default Banner;