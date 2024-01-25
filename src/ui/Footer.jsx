import { FaPhone } from "react-icons/fa6";

import { IoMdMail } from "react-icons/io";

function Footer() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gray-400 relative p-1 gap-2">
        <h1 className="underline decoration-double "> Contact Us</h1>
        <div className="flex  justify-around items-center h-full w-full">
          <div className="flex gap-1 items-center">
            <FaPhone />
            <h1>
              <span >+91 12345 1234</span>
            </h1>
          </div>
          <div className="flex gap-1 items-center">
            <IoMdMail />
            <h1>
              <span className="underline decoration-solid ">Test@abc.com</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-gray-900 p-3 text-stone-300">
        <h1> All rights reserved ©️2023</h1>
      </div>
    </div>
  );
}

export default Footer;
