import { MdMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const contactInfoTextClass = `text-sm text-white flex items-center mx-2 text-center justify-center md:justify-start`;
const phoneContactInfoTextClass = `text-sm text-white flex items-center mx-2 text-center justify-center md:justify-end`;

const Footer = () => {
  return (
    <div className="flex justify-center items-center  bg-gray-800 py-2 h-[104px] md:h-[56px] z-10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className={contactInfoTextClass}>
          <div className="text-xl pl-5 pr-2 ">
            <MdMail />
          </div>
          Email: totaldataconsulting@yahoo.com
        </div>
        <div className={phoneContactInfoTextClass}>
          <div className="text-lg pl-5 pr-2">
            <FaPhoneAlt />
          </div>
          <div className="flex gap-1 md:flex-col lg:flex-row">
            <div>Phone:</div>
            <div>(916) 538-2657</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
