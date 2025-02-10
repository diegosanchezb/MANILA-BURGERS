import React from "react";
import Img1 from "../../assets/biryani2.png";
import Img2 from "../../assets/biryani2.png";
import Img3 from "../../assets/biryani2.png";
import Img4 from "../../assets/biryani2.png";

const ServicesData = [
  {
    id: 1,
    img: Img1,
    name: "Onion & BBQ Burger",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  },
  {
    id: 2,
    img: Img2,
    name: "La Scaloneta Burger",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  },
  {
    id: 3,
    img: Img3,
    name: "Monster CheeseBurger",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  },
  {
    id: 4,
    img: Img4,
    name: "Imperial EggBurger",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  },
];

const Services = () => {
  return (
    <>
      <div className="py-10 ">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-3xl font-bold bg-clip-text text-black dark:text-secondary bg-gradient-to-r  ">
              Nuestra variedad
            </p>
            {/* <p className="text-4xl font-bold">Hamburgesas</p> */}
            <p className="text-l text-black my-4 dark:text-secondary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
              dolorum quibusdam vero tempore saepe animi!
            </p>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 md:gap-5 place-items-center">
              {ServicesData.map(({ id, img, name, description }) => {
                return (
                  <div
                    key={id}
                    className="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 dark:hover:bg-primary hover:text-black hover:bg-primary duration-300 p-4 shadow-xl"
                  >
                    <div className="h-[100px]">
                      <img
                        src={img}
                        alt=""
                        className="max-w-[200px] mx-auto block transfrom -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h1 className="text-xl font-bold">{name}</h1>
                      <p className="text-gray-500 group-hover:text-black duration-300 text-sm line-clamp-2">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
