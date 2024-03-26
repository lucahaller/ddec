import parque from "../Empresas/Muni/ParqueNiños/7.jpeg";
import edificio from "../Empresas/Privados/Casadoro/CONSULTORIO/edificio.jpg";
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
    <div class=" container mx-auto flex px-5  flex-col justify-center  gap-20 items-center">
      <div className="flex flex-col  items-center justify-center h-screen md:flex-row lg:flex-row">
        <div
          data-aos="fade-up-right"
          dat
          a-aos-anchor-placement="center-bottom"
          class="lg:max-w-lg lg:w-full md:w-1/2  mb-10 md:mb-0 h-2/5"
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
            Parque de los Niños
            <br class="hidden lg:inline-block" />
            <p>San Rafael</p>
          </h1>
          <p class="mb-8 leading-relaxed text-justify text-white">
            Se logró realizar una parque de locos, creado para cuando crezca la
            piculera emilia valentina poder jugar con la pelota, ginda, muñecas
            o con su catana y dejar a sus primos en paz.
          </p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-gray-500 border-0 xs:py-1 xsm:py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">
              Ver Proyecto
            </button>
            <button class="ml-4 inline-flex  items-center justify-center xs:text-lg  text-gray-700 bg-gray-100 border-0 xs:py-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Conctáctanos
            </button>
          </div>
        </div>
      </div>
      <div
        className="flex h-screen items-center justify-center flex-col-reverse md:flex-row lg:flex-row"
        id="edificio"
      >
        <div
          data-aos="flip-right"
          data-aos-anchor-placement="center-bottom"
          class="lg:flex-grow md:w-1/2 lg:pr-24 md:pl-16 lg:pl-0 flex flex-col md:items-start md:text-left items-center text-center"
        >
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Proyecto Privado
            <br class="hidden lg:inline-block" />
            <p>Consultorio</p>
          </h1>
          <p class="mb-8 leading-relaxed text-white text-justify">
            Se logró realizar una parque de locos, creado para cuando crezca la
            piculera emilia valentina poder jugar con la pelota, ginda, muñecas
            o con su catana y dejar a sus primos en paz.
          </p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-gray-500 border-0 xs:py-1 xsm:py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">
              Ver Proyecto
            </button>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 xs:py-1 xsm:py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Conctáctanos
            </button>
          </div>
        </div>
        <div
          data-aos="fade-up-right"
          data-aos-anchor-placement="center-bottom"
          class="lg:max-w-lg lg:w-full md:w-1/2  mb-10 md:mb-0 h-2/5"
        >
          <img
            class="object-cover object-center rounded w-full h-full "
            alt="hero"
            src={edificio}
          />
        </div>
      </div>

      <div className=" h-screen   flex items-center justify-centerflex-col md:flex-row lg:flex-row">
        <div
          data-aos="fade-up-right"
          data-aos-anchor-placement="center-bottom"
          class="lg:max-w-lg lg:w-full md:w-1/2  mb-10 md:mb-0 h-2/5"
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
          <p class="mb-8 leading-relaxed text-white">
            Se realizó la construcción del Paseo Pelegrini, en uno de los
            lugares mas concurridos ubicado en el centro de San Rafael en dónde
            se encuentran gran parte de las tiendas, negocios y heladerías que
            habitan la ciudad.
          </p>
          <div class="flex justify-center">
            <a
              href="/muni/#pellegrini"
              class="inline-flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg"
            >
              Ver Proyecto
            </a>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Conctáctanos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
