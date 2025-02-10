import {
  FaInstagram,
  FaPenFancy,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import Logo from "../../assets/logomanila.png";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="max-w-[1200px] mx-auto">
        <div className="flex md:flex-cols-3 py-5">
          <div className=" py-4 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={Logo} alt="Logo" className="max-w-[80px]" />
              MANILA BURGERS
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima officia quas totam ipsum!.{" "}
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Olavarría, provincia de Buenos Aires</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+54 9 2284 30-0754</p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.instagram.com/manilaburger.olav/" target="blank">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=5492284300754" target="blank">
                <FaWhatsapp className="text-3xl" />
              </a>
              <a href="https://pency.app/manilaburger?fbclid=PAZXh0bgNhZW0CMTEAAabtLOrE_ubavnKVNDl1psGb9RqfEnodiQx9RjM6TXNT-BTWYJ3vjtYi1Fw_aem_DH_h-AaQjWHxIupKXLLzQw" target="blank">
                <FaPenFancy className="text-3xl" />
              </a>
            </div>
          </div>
          <div className="sm:grid-cols-3 md:pl-10 ">
            <div className="py-9 px-4 ">
              <h1 className="sm:text-2xl text-xl font-bold sm:text-left mb-5">
                Links
              </h1>
              <ul className={`flex flex-col gap-3 mt-10`}>
                <li className="cursor-pointer">
                  <Link to="/">Inicio</Link>
                </li>
                <li className="cursor-pointer">
                  <Link to="/sobre-nosotros">Sobre nosotros</Link>
                </li>
                <li className="cursor-pointer">
                  <Link to="/servicios">Servicios</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            @copyright 2024 All rights reserved || Made with ❤️ by Diego Sánchez
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
