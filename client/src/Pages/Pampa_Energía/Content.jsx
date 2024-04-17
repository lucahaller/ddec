import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect, useRef, useState } from "react";
import Modal from "../../Components/Modal";
import Images from "../../Empresas/Afip/CIELORRASOS_SR/Index";
import ImagesSanLuis from "../../Empresas/Afip/AFIP_SAN_LUIS/Index";
import ImagesCanal from "../../Empresas/Irrigación/Canal";
import ImagesCompuertas from "../../Empresas/Irrigación/Compuertas";
import ImagesTrafo from "../../Empresas/Pampa/Base_Transformador_PAMPA";
import ImagesSacde from "../../Empresas/Pampa/Pampa Energía-Sacde-Melisan";
import ImagesToro from "../../Empresas/Pampa/PampaAguaDelToro";
import ImagesDique from "../../Empresas/Pampa/Reparación Dique Aisol";

export default function Content() {
  const projectPampRef = useRef(null);

  useEffect(() => {
    if (window.location.hash === "#basepampa") {
      // Si la URL tiene el hash '#proyectosection', desplázate a esa sección
      projectPampRef.current.scrollIntoView({ behavior: "smooth" });
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
  const [ids, setIds] = useState("");
  function pushdatos(e) {
    if (e.target.id === "trafo") {
      setImagenes(Object.values(ImagesTrafo));
    }
    if (e.target.id === "sacde") {
      setImagenes(Object.values(ImagesSacde));
    }
    if (e.target.id === "toro") {
      setImagenes(Object.values(ImagesToro));
    }
    if (e.target.id === "dique") {
      setImagenes(Object.values(ImagesDique));
    }

    setIsModalOpen(true);
  }

  return (
    <div>
      <div>
        <div
          ref={projectPampRef}
          id="basepampa"
          className="px-4 h-screen flex items-center justify-center py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        >
          <div className="lg:grid gap-12 xs:flex xs:flex-col-reverse lg:row-gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Base Transformador Pampa
                  <br className="hidden md:block" />
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Se realizó la construcción de la Base del Transformador para
                  PAMPA ENERGÍA
                </p>
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
                        className="w-5 h-5 text-teal-700"
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
                      id="trafo"
                      onClick={(e) => pushdatos(e)}
                      className="relative w-full text-left text-lg transition-colors duration-200 ease-in-out group-hover:text-teal-700 dark:group-hover:text-gray-200"
                    >
                      Ver Imágenes
                    </button>
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
                src={ImagesTrafo?.diez}
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
                className="object-cover w-full h-56  rounded shadow-lg sm:h-96"
                src={ImagesSacde.diez}
                alt=""
              />
            </div>
            <div className="flex flex-col  ml-auto justify-center ">
              <div className="max-w-xl  ml-auto mb-6 ">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Colocación Junta Elástica Turbina Nihuil 2
                  <br className="hidden md:block" />
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Se realizó la construcción y colocación de la Junta Elástica
                  para la Turbina del Nihuil 2 junto con la colaboración de la
                  empresa brasilera Sacde
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
                        className="w-5 h-5 text-teal-700"
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
                      id="sacde"
                      onClick={(e) => pushdatos(e)}
                      className="relative w-full text-left text-lg transition-colors duration-200 ease-in-out group-hover:text-teal-700 dark:group-hover:text-gray-200"
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
          id="proyecto3"
          className="px-4 h-screen flex items-center justify-center py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        >
          <div className="lg:grid gap-12 xs:flex xs:flex-col-reverse lg:row-gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Agua del Toro
                  <br className="hidden md:block" />
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Construimos Pampa Agua del Toro, un proyecto destacado que
                  demuestra nuestra capacidad para crear espacios funcionales y
                  de calidad en la región.
                </p>
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
                        className="w-5 h-5 text-teal-700"
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
                      id="toro"
                      onClick={(e) => pushdatos(e)}
                      className="relative w-full text-left text-lg transition-colors duration-200 ease-in-out group-hover:text-teal-700 dark:group-hover:text-gray-200"
                    >
                      Ver Imágenes
                    </button>
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
                src={ImagesToro?.dos}
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          id="proyecto4"
          className="px-4  h-screen   flex items-center justify-center  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        >
          <div className=" grid gap-12 row-gap-8 lg:grid-cols-2 py-16">
            <div
              data-aos="flip-right"
              data-aos-anchor-placement="center-bottom"
            >
              <img
                className="object-cover w-full h-56  rounded shadow-lg sm:h-96"
                src={ImagesDique.tres}
                alt=""
              />
            </div>
            <div className="flex flex-col  ml-auto justify-center ">
              <div className="max-w-xl  ml-auto mb-6 ">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Reparación Dique Aisol
                  <br className="hidden md:block" />
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Se realizó la construcción y reparación del Dique Aisol
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
                        className="w-5 h-5 text-teal-700"
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
                      id="dique"
                      onClick={(e) => pushdatos(e)}
                      className="relative w-full text-left text-lg transition-colors duration-200 ease-in-out group-hover:text-teal-700 dark:group-hover:text-gray-200"
                    >
                      Ver Imágenes
                    </button>
                  </div>
                </div>
              </div>
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
