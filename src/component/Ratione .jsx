import img from "../assets/image/features-3.png";
import { BsGraphUp } from "react-icons/bs";
import { BiDirections, BiCommand, BiChip } from "react-icons/bi";
import { TbAntenna } from "react-icons/tb";
import { GiFlexibleStar } from "react-icons/gi";

const Ratione = () => {
  return (
    <div className="m-4 md:m-10 lg:m-20">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-blue-800 text-center leading-tight">
        Ratione mollitia eos ab laudantium rerum beatae quo
      </h1>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row mt-10">
        {/* Image section */}
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0 flex justify-center md:justify-center lg:justify-start">
          <img
            src={img}
            alt="Features"
            className="lg:w-full lg:h-auto md:h-96 h-60"
          />
        </div>

        {/* Text section */}
        <div className="flex flex-col lg:flex-row lg:space-x-10 w-full lg:w-2/3 text-lg md:text-xl mt-8 lg:mt-20 lg:ml-10 space-y-10 lg:space-y-0">
          {/* Left column of icons and text */}
          <div className="space-y-5 w-full lg:w-1/2">
            <div className="flex items-center">
              <div className="text-2xl text-blue-800 font-bold mr-3">
                <BsGraphUp />
              </div>
              <div>
                <h1 className="text-blue-800 text-xl">
                  Corporis voluptates sit
                </h1>
                <h1>
                  Consequuntur sunt aut quasi enim aliquam quae harum pariatur.
                </h1>
              </div>
            </div>

            <div className="flex items-center">
              <div className="text-2xl text-blue-800 font-bold mr-3">
                <BiDirections />
              </div>
              <div>
                <h1 className="text-blue-800 text-xl">
                  Corporis voluptates sit
                </h1>
                <h1>
                  Consequuntur sunt aut quasi enim aliquam quae harum pariatur.
                </h1>
              </div>
            </div>

            <div className="flex items-center">
              <div className="text-2xl text-blue-800 font-bold mr-3">
                <BiCommand />
              </div>
              <div>
                <h1 className="text-blue-800 text-xl">
                  Corporis voluptates sit
                </h1>
                <h1>
                  Consequuntur sunt aut quasi enim aliquam quae harum pariatur.
                </h1>
              </div>
            </div>
          </div>

          {/* Right column of icons and text */}
          <div className="space-y-5 w-full lg:w-1/2">
            <div className="flex items-center">
              <div className="text-2xl text-blue-800 font-bold mr-3">
                <BiChip />
              </div>
              <div>
                <h1 className="text-blue-800 text-xl">
                  Corporis voluptates sit
                </h1>
                <h1>
                  Consequuntur sunt aut quasi enim aliquam quae harum pariatur.
                </h1>
              </div>
            </div>

            <div className="flex items-center">
              <div className="text-2xl text-blue-800 font-bold mr-3">
                <TbAntenna />
              </div>
              <div>
                <h1 className="text-blue-800 text-xl">
                  Corporis voluptates sit
                </h1>
                <h1>
                  Consequuntur sunt aut quasi enim aliquam quae harum pariatur.
                </h1>
              </div>
            </div>

            <div className="flex items-center">
              <div className="text-2xl text-blue-800 font-bold mr-3">
                <GiFlexibleStar />
              </div>
              <div>
                <h1 className="text-blue-800 text-xl">
                  Corporis voluptates sit
                </h1>
                <h1>
                  Consequuntur sunt aut quasi enim aliquam quae harum pariatur.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratione;
