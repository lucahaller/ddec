import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect, useRef, useState } from "react";
import Modal from "../../Components/Modal";
import ImagesConsultorio from "../../Empresas/Privados/Casadoro/CONSULTORIO";
import ImagesBarrio from "../../Empresas/Privados/Casas/CasasDeBarrio";
import ImagesCasasV from "../../Empresas/Privados/Casas/CasasVarias";
import ImagesCDPaleta from "../../Empresas/Privados/CLUB DE PALETA";
import ImagesDpdB from "../../Empresas/Privados/Deptos/Deptos Baloffet";
import ImagesDpdR from "../../Empresas/Privados/Deptos/Deptos Roca";
import ImagesLocalB from "../../Empresas/Privados/Local_Ballofet";
import ImagesFedeC from "../../OBRAS/Federico_Cinta";
import ImagesRodo from "../../OBRAS/ObraPrivAmiga_Rodolfo";

export default function Content() {
  const projectRef = useRef(null);

  useEffect(() => {
    if (window.location.hash === "#consultorio") {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 3000,
      delay: 200,
      once: true,
    });

    // Scroll al principio del componente después de que se haya renderizado completamente
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imagenes, setImagenes] = useState("");

  function pushdatos(e) {
    if (e.target.id === "barrio") {
      const imagenesBarrio = Object.values(ImagesBarrio);
      const imagenesCasasV = Object.values(ImagesCasasV);
      const imagenesFede = Object.values(ImagesFedeC);
      const imagenesRodo = Object.values(ImagesRodo);
      const imagenesCombinadas = [
        ...imagenesBarrio,
        ...imagenesCasasV,
        ...imagenesFede,
        ...imagenesRodo,
      ];
      setImagenes(imagenesCombinadas);
    }
    if (e.target.id === "consultorio") {
      setImagenes(Object.values(ImagesConsultorio));
    }
    if (e.target.id === "cdp") {
      setImagenes(Object.values(ImagesCDPaleta));
    }
    if (e.target.id === "depas") {
      const imagenesBallo = Object.values(ImagesDpdB);
      const imagenesRoca = Object.values(ImagesDpdR);
      const imagenesCombinadas = [...imagenesBallo, ...imagenesRoca];
      setImagenes(imagenesCombinadas);
    }
    if (e.target.id === "local") {
      setImagenes(Object.values(ImagesLocalB));
    }
    setIsModalOpen(true);
  }

  return (
    <div>
      <div>
        <div
          id="casaspriv"
          className="px-4 h-screen flex items-center justify-center py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        >
          <div className="lg:grid gap-12 xs:flex xs:flex-col-reverse lg:row-gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Proyectos Casas Privadas
                  <br className="hidden md:block" />
                </h2>
                <p className="text-base xs:text-justify lg:text-left  text-gray-700 md:text-lg">
                  Se realizó la construcción de diversas Casas en diferentes
                  lugares y de manera distinta a las demás, como casas de
                  Barrios en San Rafael, Mendoza , casas en zonas como "El
                  Nihuil" y Pueblo Benegas.
                </p>
                <div className="flex flex-row gap-5">
                  <div className=" flex  cursor-pointer">
                    <div className="relative inline-flex items-center justify-start py-3 pr-12 overflow-hidden font-semibold  text-black-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6   dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
                      <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out  group-hover:h-full"></span>
                      <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                          className="w-5 h-5 text-gray-400"
                        >
                          <path
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                            stroke-width="2"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                          ></path>
                        </svg>
                      </span>
                      <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                          className="w-5 h-5 text-sky-500"
                        >
                          <path
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                            stroke-width="2"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                          ></path>
                        </svg>
                      </span>
                      <button
                        id="barrio"
                        onClick={(e) => pushdatos(e)}
                        className="relative w-full text-left text-lg transition-colors duration-200 ease-in-out group-hover:text-sky-500 dark:group-hover:text-gray-200"
                      >
                        Ver Imágenes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="flip-right"
              data-aos-anchor-placement="center-bottom"
            >
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src={ImagesBarrio?.uno}
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          ref={projectRef}
          id="consultorio"
          className="px-4  h-screen   flex items-center justify-center  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        >
          <div className=" grid gap-12 row-gap-8 lg:grid-cols-2 py-16">
            <div
              data-aos="flip-right"
              data-aos-anchor-placement="center-bottom"
            >
              <img
                className="object-cover w-full h-56  rounded shadow-lg sm:h-96"
                src={ImagesConsultorio.ocho}
                alt=""
              />
            </div>
            <div className="flex flex-col  ml-auto justify-center ">
              <div className="max-w-xl  ml-auto mb-6 ">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Consultorios Privados
                  <br className="hidden md:block" />
                </h2>
                <p className="text-base xs:text-justify lg:text-left text-gray-700 md:text-lg">
                  Construimos consultorios privados de alta calidad en San
                  Rafael, Mendoza, ofreciendo espacios profesionales
                  excepcionales para el cuidado de la salud.
                </p>
                <div className=" flex  cursor-pointer">
                  <div className="relative inline-flex items-center justify-start py-3  pr-12 overflow-hidden font-semibold  text-black-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6   dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
                    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out  group-hover:h-full"></span>
                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                        className="w-5 h-5 text-gray-400"
                      >
                        <path
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                          stroke-width="2"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                    </span>
                    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                        className="w-5 h-5 text-sky-500"
                      >
                        <path
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                          stroke-width="2"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                    </span>
                    <button
                      id="consultorio"
                      onClick={(e) => pushdatos(e)}
                      className="relative w-full text-left text-lg transition-colors duration-200 ease-in-out group-hover:text-sky-500 dark:group-hover:text-gray-200"
                    >
                      Ver Imágenes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="proyecto2"
          className="px-4 h-screen flex items-center justify-center py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        >
          <div className="lg:grid gap-12 xs:flex xs:flex-col-reverse lg:row-gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Club De Paleta
                  <br className="hidden md:block" />
                </h2>
                <p className="text-base xs:text-justify lg:text-left   text-gray-700 md:text-lg">
                  Se realizó la construcción de el Club De Paleta en San Rafael,
                  Mendoza para disfrutar de diversas actividades.
                </p>
                <div className="flex flex-row gap-5">
                  <div className=" flex  cursor-pointer">
                    <div className="relative inline-flex items-center justify-start py-3 pr-12 overflow-hidden font-semibold  text-black-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6   dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
                      <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out  group-hover:h-full"></span>
                      <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                          className="w-5 h-5 text-gray-400"
                        >
                          <path
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                            stroke-width="2"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                          ></path>
                        </svg>
                      </span>
                      <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                          className="w-5 h-5 text-sky-500"
                        >
                          <path
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                            stroke-width="2"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                          ></path>
                        </svg>
                      </span>
                      <button
                        id="cdp"
                        onClick={(e) => pushdatos(e)}
                        className="relative w-full text-left text-lg transition-colors duration-200 ease-in-out group-hover:text-sky-500 dark:group-hover:text-gray-200"
                      >
                        Ver Imágenes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="flip-right"
              data-aos-anchor-placement="center-bottom"
            >
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src={ImagesCDPaleta?.cuatro}
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          id="proyecto1"
          className="px-4  h-screen   flex items-center justify-center  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        >
          <div className=" grid gap-12 row-gap-8 lg:grid-cols-2 py-16">
            <div
              data-aos="flip-right"
              data-aos-anchor-placement="center-bottom"
            >
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src={ImagesDpdR.uno}
                alt=""
              />
            </div>
            <div className="flex flex-col  ml-auto justify-center ">
              <div className="max-w-xl  ml-auto mb-6 ">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Proyectos Departamentos
                  <br className="hidden md:block" />
                </h2>
                <p className="text-base xs:text-justify lg:text-left text-gray-700 md:text-lg">
                  Construimos una variedad de departamentos en ubicaciones
                  estratégicas de la ciudad, incluyendo la Av. Ballofet y Av. J.
                  Roca, ofreciendo viviendas de calidad en lugares
                  privilegiados.
                </p>
                <div className=" flex  cursor-pointer">
                  <div className="relative inline-flex items-center justify-start py-3  pr-12 overflow-hidden font-semibold  text-black-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6   dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
                    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out  group-hover:h-full"></span>
                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                        className="w-5 h-5 text-gray-400"
                      >
                        <path
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                          stroke-width="2"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                    </span>
                    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                        className="w-5 h-5 text-sky-500"
                      >
                        <path
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                          stroke-width="2"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                    </span>
                    <button
                      id="depas"
                      onClick={(e) => pushdatos(e)}
                      className="relative w-full text-left text-lg transition-colors duration-200 ease-in-out group-hover:text-sky-500 dark:group-hover:text-gray-200"
                    >
                      Ver Imágenes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="proyecto2"
          className="px-4 h-screen flex items-center justify-center py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        >
          <div className="lg:grid gap-12 xs:flex xs:flex-col-reverse lg:row-gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Local Av.Ballofet
                  <br className="hidden md:block" />
                </h2>
                <p className="text-base xs:text-justify lg:text-left text-gray-700 md:text-lg">
                  Se realizó la construcción del el Local en la Avenida
                  Ballofet, un espacio comercial moderno y atractivo, diseñado
                  para destacar y ofrecer una experiencia excepcional a
                  propietarios y clientes.
                </p>
                <div className="flex flex-row gap-5">
                  <div className=" flex  cursor-pointer">
                    <div className="relative inline-flex items-center justify-start py-3 pr-12 overflow-hidden font-semibold  text-black-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6   dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
                      <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out  group-hover:h-full"></span>
                      <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                          className="w-5 h-5 text-gray-400"
                        >
                          <path
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                            stroke-width="2"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                          ></path>
                        </svg>
                      </span>
                      <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                          className="w-5 h-5 text-sky-500"
                        >
                          <path
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                            stroke-width="2"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                          ></path>
                        </svg>
                      </span>
                      <button
                        id="local"
                        onClick={(e) => pushdatos(e)}
                        className="relative w-full text-left text-lg transition-colors duration-200 ease-in-out group-hover:text-sky-500 dark:group-hover:text-gray-200"
                      >
                        Ver Imágenes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="flip-right"
              data-aos-anchor-placement="center-bottom"
            >
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src={ImagesLocalB?.cuatro}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={imagenes}
      ></Modal>
    </div>
  );
}
