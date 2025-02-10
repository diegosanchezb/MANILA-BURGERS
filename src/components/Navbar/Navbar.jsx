import Logo from "../../assets/logomanila.png";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div>
              <a
                href="#"
                className="flex items-center gap-2 text-2xl sm:text-3xl font-bold"
              >
                <img src={Logo} alt="Manila Burgers" className="w-20" />
                Manila Burgers
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <DarkMode />
              </div>
              <ul className="hidden sm:flex gap-4">
                <li>
                  <Link
                    to="/"
                    className="inline-block py-4 px-4 hover:text-primary"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sobre-nosotros"
                    className="inline-block py-4 px-4 hover:text-primary"
                  >
                    Sobre nosotros
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/manilaburger.olav/"
                    target="blank"
                    className="inline-block py-4 px-4 hover:text-primary"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
              <button
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send?phone=5492284300754&text=Hola, quiero realizar un pedido",
                    "_blank"
                  )
                }
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
              >
                Pedir
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
