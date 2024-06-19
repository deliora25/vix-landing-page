import { Button } from "@headlessui/react";
import wave_image from "../../assets/images/wave_image.png";
import { forwardRef } from "react";

const TitlePageSection = forwardRef((props, ref) => {
  return (
    <div className="flex h-full w-full " ref={ref}>
      <div className="bg-gradient-to-b from-[#143365] to-gray-950 w-full">
        <div className="flex flex-col items-center justify-center sm:mt-28 mt-6 w-full">
          <div className="flex flex-col space-y-8 items-center">
            <img
              src="https://static.wixstatic.com/media/9965da_43a977ea80a347908904f481e0e93af6~mv2.png/v1/fill/w_600,h_224,al_c,lg_1,q_85,enc_auto/9965da_43a977ea80a347908904f481e0e93af6~mv2.png"
              style={{
                filter: "invert(100%) brightness(1000%)",
                height: "auto",
                display: "block",
              }}
            />
            <div className="flex flex-col items-center space-y-6 justify-center sm:text-6xl text-4xl font-bold sm:px-6 px-4 text-center">
              <span>Empowering Organizations</span>{" "}
              <span className="text-blue-500">
                Through Business Intelligence
              </span>
            </div>
            <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-2 px-4 sm:text-lg text-md font-semibold text-white shadow-inner shadow-white/10 cursor-pointer hover:bg-gray-400 w-fit z-20">
              Discover more
            </Button>
          </div>

          <div className="w-full h-fit">
            <img
              src={wave_image}
              alt="wave-image"
              className="w-full max-h-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

TitlePageSection.displayName = "TitlePageSection";

export default TitlePageSection;
