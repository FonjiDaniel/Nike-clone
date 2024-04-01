import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container ">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start  ">
          <a href="/">
            <img src={footerLogo} width={150} height={46} />
          </a>
          <p className="font-montserrat leading-7 text-white-400 mt-6 text-base sm:max-w-sm ">
            {" "}
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8 ">
            {socialMedia.map((item) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white  rounded-full ">
                <img
                  src={item.src}
                  alt="social media icon"
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>
        <div className=" flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white mb-6 font-montserrat text-2xl  font-bold ">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="text-white-400 mt-3 font-montserrat text-lg hover:text-white"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center ">
        <div className=" gap-2 flex justify-start flex-1 ">
          <img
            className="rounded-full"
            src={copyrightSign}
            width={20}
            height={20}
          />
          <p className="font-montserrat text-lg">
            Copyright. All Rights Reserved
          </p>
        </div>
        <p className="font-montserrat text-lg cursor-pointer">
          Terms And Conditions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
