import { Button } from "@headlessui/react";
import Card from "../common/Card";
import { offeredServices } from "./constants";
import { forwardRef } from "react";

const ServicesSection = forwardRef((props, ref) => {
  const renderTitle = (title, subtitle, icon) => {
    return (
      <div className="flex flex-col space-y-4 z-10">
        <div className="flex space-x-2 items-start justify-start">
          <div className="flex space-x-4 items-center justify-center">
            <div className="rounded-lg p-4 bg-[#1A181B] shrink-0">
              <img src={icon} className="h-10 w-10 shrink-0" alt="icon-image" />
            </div>

            <p className="text-gray-300 text-2xl font-medium">{title}</p>
          </div>
        </div>
        <p className="text-gray-400 text-lg">{subtitle}</p>
      </div>
    );
  };

  const renderButton = () => {
    return (
      //TODO: add onclick function
      <Button className="items-center rounded-md border-gray-600 border bg-gray-950 py-4 px-8 sm:text-lg text-md font-semibold text-white  cursor-pointer hover:bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-fit z-20">
        Learn more
      </Button>
    );
  };

  return (
    <div
      className="flex flex-col h-full w-full bg-gray-950 border-none"
      ref={ref}
    >
      <div className="h-full w-full flex flex-col items-center justify-center text-center my-16 space-y-6 mb-4 max-w-full">
        <div className="w-full h-full flex flex-1 flex-col items-center space-y-4 md:px-10 sm:px-8 px-4 text-center z-10">
          <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-bold">
            Services
          </p>
          <p className="sm:text-5xl text-3xl font-semibold">What we offer</p>
          <p className="text-gray-400 max-w-[900px]">
            At Total Data Consulting, we understand that your data needs are
            unique to your organization. That&apos;s why we offer personalized
            services to meet your individual requirements. Explore our wide
            range of services to discover how we can help you.
          </p>
        </div>
        <div className="flex flex-col space-y-4 w-full lg:px-20 md:px-10 sm:px-8 px-4 border-none">
          {offeredServices.map((service) => {
            const { title, description, subTitle, icon, image } = service || {};
            return (
              <Card
                renderTitle={renderTitle(title, subTitle, icon)}
                description={description}
                renderButton={renderButton}
                key={title}
                image={image}
                subTitle={subTitle}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
});

ServicesSection.displayName = "ServicesSection";

export default ServicesSection;
