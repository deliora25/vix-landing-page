import { forwardRef } from "react";
import { ownerSectionDetails } from "./constants";

const { storyMessage, header, title, name } = ownerSectionDetails || {};

const OwnerSection = forwardRef((props, ref) => {
  return (
    <div
      className="flex flex-col items-center justify-center sm:space-y-16 space-y-4 px-2 h-full w-full bg-gray-950"
      ref={ref}
    >
      <div className="pt-16 flex flex-col items-center justify-center space-y-4">
        <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-bold">
          About
        </p>
        <div className="sm:text-5xl text-3xl font-semibold text-gray-300">
          {header}
        </div>
      </div>

      <div className="w-full grid grid-cols-2 md:px-10 sm:px-8 px-4 md:gap-y-0 gap-y-4 md:gap-x-10 sm:gap-x-4">
        <div className="flex flex-col md:col-span-1 col-span-2">
          <div className="space-y-6 text-gray-400 w-full">
            {storyMessage.map((story) => {
              return (
                <p key={story} className="">
                  {story}
                </p>
              );
            })}
          </div>
        </div>
        <div className="border rounded-lg border-gray-500 h-fit p-6 w-full shadow-md shadow-gray-400 md:col-span-1 col-span-2 shrink-0">
          <div className="flex flex-col items-center justify-center h-full space-y-4 ">
            <img
              src="https://static.wixstatic.com/media/9965da_65a0d84b50854839a79472bb41f1404f~mv2.png/v1/fill/w_280,h_280,al_c,lg_1,q_85,enc_auto/9965da_65a0d84b50854839a79472bb41f1404f~mv2.png"
              className="max-h-full rounded-lg"
            />
            <div className="flex flex-col items-center text-xl text-gray-400">
              <p>{name}</p>
              <p>{title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

OwnerSection.displayName = "OwnerSection";

export default OwnerSection;
