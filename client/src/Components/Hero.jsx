import parque from "../Empresas/Muni/ParqueNiños/7.jpeg";
import edificio from "../Empresas/Afip/AFIP_SAN_LUIS/esquina.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      delay: 200,
      once: true,
    });
  });

  return (
    <div class=" xs:pt-10 xs:pb-10 container mx-auto flex px-5  flex-col justify-center  gap-20 items-center">
      <div className="flex flex-col  items-center justify-center h-screen md:flex-row lg:flex-row">
        <div
          data-aos="fade-up-right"
          dat
          a-aos-anchor-placement="center-bottom"
          class=" shadow-lg shadow-gray-400 xs:w-full xl:max-w-3xl rounded-lg lg:max-w-lg lg:w-full md:w-1/2 xs:h-3/6 mb-10 md:mb-0 sm:h-3/6"
        >
          <img
            class="object-cover object-center rounded w-full h-full "
            alt="hero"
            src={parque}
          />
        </div>
        <div
          data-aos="flip-right"
          data-aos-anchor-placement="center-bottom"
          class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
        >
          <h1 class="title-font gap-2 sm:text-4xl text-3xl mb-4 font-medium text-white">
            Parque De Los Niños
            <br class="hidden lg:inline-block" />
            <p>San Rafael</p>
          </h1>
          <p class="mb-8 leading-relaxed text-justify text-white">
            Realizamos la remodelación y mantenimiento, de el Parque de Los
            Niños en San Rafael, Mendoza, un espacio recreativo dedicado
            especialmente a los más pequeños, situado junto a la Plaza Francia,
            para promover el juego, la diversión y el encuentro familiar.
          </p>
          <div class="flex justify-center gap-2">
            <a
              href="/muni/#parque"
              class="inline-flex text-white bg-gray-500 border-0 xs:py-4 xsm:py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg"
            >
              Proyecto
            </a>
            <a
              href="/#contacto"
              class=" inline-flex  items-center justify-center xs:text-lg xs:px-4  text-gray-700 bg-gray-100 border-0 xs:py-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              Conctáctanos
            </a>
          </div>
        </div>
      </div>
      <div className="flex h-screen  items-center justify-center flex-col-reverse md:flex-row lg:flex-row">
        <div
          data-aos="flip-right"
          data-aos-anchor-placement="center-bottom"
          class=" lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 lg:pl-0 flex flex-col md:items-start md:text-left items-center text-center"
        >
          <h1 class="title-font  sm:text-4xl text-3xl mb-4 font-medium text-white">
            Edificio Afip
            <br class="hidden lg:inline-block" />
            <p>San Luis</p>
          </h1>
          <p class="mb-8 leading-relaxed text-white text-justify">
            Realizamos la remodelación y mantenimiento de el edificio principal
            de AFIP en la ciudad de San Luis, incluyendo los baños y comedor
            principales, reafirmando nuestro compromiso con la excelencia en
            proyectos de infraestructura.
          </p>
          <div class="flex justify-center gap-2">
            <a
              href="/afip/#afip"
              class="inline-flex text-white bg-gray-500 border-0 xs:py-4 xsm:py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg"
            >
              Proyecto
            </a>
            <a
              href="/#contacto"
              class=" inline-flex  items-center justify-center xs:text-lg xs:px-4  text-gray-700 bg-gray-100 border-0 xs:py-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              Conctáctanos
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up-right"
          data-aos-anchor-placement="center-bottom"
          class=" shadow-lg shadow-gray-400 rounded-lg lg:max-w-lg xl:max-w-3xl lg:w-full md:w-1/2 xs:w-full xs:h-3/6 mb-10 md:mb-0 sm:h-3/6"
        >
          <img
            class="object-cover object-center rounded w-full h-full "
            alt="hero"
            src={edificio}
          />
        </div>
      </div>

      <div className=" flex flex-col  items-center  justify-center h-screen md:flex-row lg:flex-row">
        <div
          data-aos="fade-up-right"
          data-aos-anchor-placement="center-bottom"
          class="shadow-lg shadow-gray-400 rounded-lg xl:max-w-3xl lg:max-w-lg lg:w-full md:w-1/2  xs:w-full xs:h-3/6 mb-10 md:mb-0 sm:h-3/6"
        >
          <img
            class="object-cover object-center rounded w-full h-full "
            alt="hero"
            src="https://www.sanrafael.gov.ar/wp-content/uploads/2019/06/led-paseo-pellegrini.jpg"
          />
        </div>
        <div
          data-aos="flip-right"
          data-aos-anchor-placement="center-bottom"
          class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
        >
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Paseo Pellegrini
            <br class="hidden lg:inline-block" />
            <p>San Rafael</p>
          </h1>
          <p class="mb-8 leading-relaxed text-white text-justify">
            Se realizó la construcción del Paseo Pelegrini, en uno de los
            lugares mas concurridos ubicado en el centro de San Rafael en dónde
            se encuentran gran parte de las tiendas, negocios y heladerías que
            habitan la ciudad.
          </p>
          <div class="flex justify-center gap-2">
            <a
              href="/muni#pellegrini"
              class="inline-flex text-white bg-gray-500 border-0 xs:py-4 xsm:py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg"
            >
              Proyecto
            </a>
            <a
              href="/#contacto"
              class=" inline-flex  items-center justify-center xs:text-lg xs:px-4  text-gray-700 bg-gray-100 border-0 xs:py-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              Conctáctanos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
