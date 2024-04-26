import React, { useEffect } from "react";
import paruqe from "../Empresas/Muni/ParqueNiños/7.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFlag } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      delay: 200,
      once: true,
    });
  });
  return (
    <div className=" 2xl:container 2xl:mx-auto flex flex-col   lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col  pt-20 ">
        <div className="flex  lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
          <div className="w-full lg:w-6/12">
            <h2 className="w-full flex flex-row font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">
              Sobre la Empresa
              <FcAbout className="bg-gray ml-2 pb-2" />
            </h2>
            <p className="text-justify font-normal  text-base leading-6 text-gray-600 mt-6">
              Somos una empresa constructora en San Rafael, Mendoza,
              especializada en obras públicas y privadas. Con un enfoque
              meticuloso y atención personalizada, entregamos proyectos de alta
              calidad. Nuestra pasión es construir un futuro sólido para nuestra
              comunidad.
            </p>
            <div
              className="w-full "
              data-aos="fade-up-right"
              data-aos-anchor-placement="center-bottom"
            >
              <h2 className="flex flex-row font-bold lg:text-2xl text-3xl lg:leading-9 leading-7 text-gray-800">
                Nuestra Misión{" "}
                <BsFillRocketTakeoffFill className="ml-2 text-md pl-1" />
              </h2>
              <p className="text-justify font-normal text-base leading-6 text-gray-600 mt-2 w-full ">
                Nuestra misión en la empresa, es impulsar el desarrollo
                sostenible mediante la construcción de obras públicas y privadas
                de alta calidad.
                <p>
                  Nos comprometemos a superar las expectativas de nuestros
                  clientes, priorizando la eficiencia, la innovación y el
                  respeto por el medio ambiente en cada proyecto que
                  emprendemos.
                </p>
              </p>
            </div>
          </div>
          <div
            className="w-full lg:w-6/12  "
            data-aos="flip-right"
            data-aos-anchor-placement="center-bottom"
          >
            <img
              className="lg:block hidden h-4/5 rounded-md w-full"
              src={paruqe}
              alt="people discussing on board"
            />
            <img
              className="lg:hidden rounded-md sm:block hidden w-full"
              src={paruqe}
              alt="people discussing  on board"
            />
            <img
              className="sm:hidden  rounded-md block w-full"
              src={paruqe}
              alt="people discussing on board"
            />
          </div>
        </div>
      </div>

      <div className=" flex flex-col items-center justify-center xs:pt-0 pt-5 lg:mt-0 xl:mt-0 xll:mt-0 ml:mt-80 xs:mt-0  mt-96">
        <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
          <div className="w-full ">
            <div className="grid grid-cols-1 sm:grid-cols-2  lg:gap-12 gap-10">
              {/* <!-- Team Card --> */}
              <div
                className="flex p-4 shadow-md"
                data-aos="fade-left"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1500"
              >
                <div className=" pl-3">
                  <FaFlag className="text-xl mr-7" />
                </div>
                <div className="">
                  <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">
                    Fundada
                  </p>
                  <p className="text-justify mt-2 font-normal text-base leading-6 text-gray-600">
                    Nuestra empresa constructora, establecida en 2010 en San
                    Rafael, Mendoza, ha sido un pilar en la comunidad desde su
                    inicio. Con una década de experiencia, seguimos
                    comprometidos con la excelencia en cada proyecto que
                    emprendemos
                  </p>
                </div>
              </div>

              {/* <!-- Board Card --> */}
              <div
                className="flex p-4 shadow-md"
                data-aos="fade-left"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="2000"
              >
                <div className="mr-6">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5 10.5C12.1569 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 12.1569 4.5 10.5 4.5C8.84315 4.5 7.5 5.84315 7.5 7.5C7.5 9.15685 8.84315 10.5 10.5 10.5Z"
                      stroke="#1F2937"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.5 33V25.5L6 24V18C6 17.6022 6.15804 17.2206 6.43934 16.9393C6.72064 16.658 7.10218 16.5 7.5 16.5H13.5C13.8978 16.5 14.2794 16.658 14.5607 16.9393C14.842 17.2206 15 17.6022 15 18V24L13.5 25.5V33"
                      stroke="#1F2937"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25.5 10.5C27.1569 10.5 28.5 9.15685 28.5 7.5C28.5 5.84315 27.1569 4.5 25.5 4.5C23.8431 4.5 22.5 5.84315 22.5 7.5C22.5 9.15685 23.8431 10.5 25.5 10.5Z"
                      stroke="#1F2937"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22.5 33V27H19.5L22.5 18C22.5 17.6022 22.658 17.2206 22.9393 16.9393C23.2206 16.658 23.6022 16.5 24 16.5H27C27.3978 16.5 27.7794 16.658 28.0607 16.9393C28.342 17.2206 28.5 17.6022 28.5 18L31.5 27H28.5V33"
                      stroke="#1F2937"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="">
                  <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">
                    Proyectos
                  </p>
                  <p className="text-justify mt-2 font-normal text-base leading-6 text-gray-600">
                    Con más de 100 obras completadas, nuestra empresa , ha
                    dejado una huella duradera en la región. Cada proyecto
                    refleja nuestro compromiso con la calidad y la satisfacción
                    del cliente.
                  </p>
                </div>
              </div>

              {/* <!-- Press Card --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
