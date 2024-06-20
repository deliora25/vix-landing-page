import { useFormik } from "formik";
import { FIELDS } from "./constants";
import { Button } from "@headlessui/react";

const ContactUsSection = () => {
  const handleSubmit = () => {
    console.log("submit");
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
      onSubmit: handleSubmit,
    },
  });

  const renderInput = ({ name, label, type, isFullWidth }) => {
    if (name === "message") {
      return (
        <div
          className={`${
            isFullWidth ? "col-span-2" : "col-span-1"
          } flex flex-col space-y-2`}
        >
          <p className="text-gray-300 font-medium">{label}</p>
          <textarea
            name={name}
            type={type}
            onChange={formik.handleChange}
            rows={5}
            className="w-full flex-1 resize-none text-gray-600 hover:border-gray-800 caret-gray-800 leading-6 rounded py-2 px-2 border border-gray-400 text-sm"
          />
        </div>
      );
    }

    return (
      <div
        className={`${
          isFullWidth ? "col-span-2" : "sm:col-span-1 col-span-2"
        } flex flex-col space-y-2`}
      >
        <p className="text-gray-300 font-medium">{label}</p>
        <input
          name={name}
          type={type}
          onChange={formik.handleChange}
          className="w-full flex-1 text-gray-600 hover:border-gray-800 caret-gray-800 leading-6 rounded py-2 px-2 border border-gray-400 text-sm"
        />
      </div>
    );
  };

  return (
    <div className="bg-gray-950 z-10 h-full w-full md:px-20 sm:px-16 px-4">
      <div className="my-4">
        <div className="pb-4 text-center">
          <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-bold">
            Ready to work with me?
          </p>
        </div>
      </div>

      <div className="border border-gray-500 rounded-lg my-4 shadow-sm shadow-gray-400">
        <div className="flex flex-1 h-full w-full  items-center justify-center max-w-2xl mx-auto">
          <form className="w-full h-full text-gray-950 p-4">
            <div className="w-full h-full grid grid-cols-2 gap-x-4 gap-y-4">
              {FIELDS.map((x) =>
                renderInput({
                  name: x.name,
                  label: x.label,
                  type: x.type,
                  isFullWidth: x.isFullWidth,
                })
              )}
            </div>
            <div className="flex justify-start mt-6">
              <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-2 px-4 sm:text-lg text-md font-semibold text-white shadow-inner shadow-white/10 cursor-pointer hover:bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-fit z-20">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
