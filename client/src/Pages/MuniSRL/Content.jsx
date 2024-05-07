import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import Modal from "../../Components/Modal";
import ImagesBiblioteca from "../../Empresas/Muni/BibliotecaMMoreno";
import ImagesCanchaH from "../../Empresas/Muni/Cancha_Hockey";
import ImagesCasaM from "../../Empresas/Muni/Casa de Mujer";
import ImagesCentroI from "../../Empresas/Muni/Cic C. Benegas";
import ImagesCicloVía from "../../Empresas/Muni/Ciclo Vía";
import ImagesColector from "../../Empresas/Muni/ColectorIndustrial";
import ImagesComedorUni from "../../Empresas/Muni/Comedor_Universitario";
import ImagesEstaciones from "../../Empresas/Muni/EstacionesEco";
import ImagesManKM0 from "../../Empresas/Muni/Mantenimiento Km0";
import ImagesMuseo from "../../Empresas/Muni/Museo San Rafael";
import ImagesParque from "../../Empresas/Muni/ParqueNiños";
import ImagesPelegrini from "../../Empresas/Muni/PaseoPelegrini";
import ImagesPlayonD from "../../Empresas/Muni/Playon_Deportivo_Balofett";
import ImagesPlazaRosas from "../../Empresas/Muni/Plaza Salto de Las Rosas";
import ImagesPlazaB from "../../Empresas/Muni/Plaza_Belgrano";
import ImagesPlazaRama from "../../Empresas/Muni/Plaza_Rama_Caída";
import ImagesRedSar from "../../Empresas/Muni/Red de ClocaCsarmiento";
import ImagesRedSaniamiento from "../../Empresas/Muni/ReddeCloaca";
import ImagesLoteo from "../../Empresas/Muni/Urba Loteo Ptocrear/Fotos";
export default function Content() {
  const projectSectionRef = useRef(null);
  const projectParqueRef = useRef(null);
  const projectBmRef = useRef(null);

  useEffect(() => {
    if (window.location.hash === "#pellegrini") {
      // Si la URL tiene el hash '#proyectosection', desplázate a esa sección
      projectSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (window.location.hash === "#parque") {
      // Si la URL tiene el hash '#proyectosection', desplázate a esa sección
      projectParqueRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (window.location.hash === "#bmoreno") {
      // Si la URL tiene el hash '#proyectosection', desplázate a esa sección
      projectBmRef.current.scrollIntoView({ behavior: "smooth" });
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
    if (e.target.id === "museo") {
      setImagenes(Object.values(ImagesMuseo));
    }
    if (e.target.id === "pelegrini") {
      setImagenes(Object.values(ImagesPelegrini));
    }
    if (e.target.id === "parque") {
      setImagenes(Object.values(ImagesParque));
    }
    if (e.target.id === "plazarosas") {
      setImagenes(Object.values(ImagesPlazaRosas));
    }
    if (e.target.id === "playon") {
      setImagenes(Object.values(ImagesPlayonD));
    }
    if (e.target.id === "comedoruni") {
      setImagenes(Object.values(ImagesComedorUni));
    }
    if (e.target.id === "ciclovia") {
      setImagenes(Object.values(ImagesCicloVía));
    }
    if (e.target.id === "bmoreno") {
      setImagenes(Object.values(ImagesBiblioteca));
    }
    if (e.target.id === "canchah") {
      setImagenes(Object.values(ImagesCanchaH));
    }
    if (e.target.id === "plazab") {
      setImagenes(Object.values(ImagesPlazaB));
    }
    if (e.target.id === "plazarama") {
      setImagenes(Object.values(ImagesPlazaRama));
    }
    if (e.target.id === "redsar") {
      setImagenes(Object.values(ImagesRedSar));
    }
    if (e.target.id === "redsan") {
      setImagenes(Object.values(ImagesRedSaniamiento));
    }
    if (e.target.id === "estacion") {
      setImagenes(Object.values(ImagesEstaciones));
    }
    if (e.target.id === "colector") {
      setImagenes(Object.values(ImagesColector));
    }
    if (e.target.id === "mankm0") {
      setImagenes(Object.values(ImagesManKM0));
    }
    if (e.target.id === "urba") {
      setImagenes(Object.values(ImagesLoteo));
    }
    if (e.target.id === "casam") {
      setImagenes(Object.values(ImagesCasaM));
    }
    if (e.target.id === "cic") {
      setImagenes(Object.values(ImagesCentroI));
    }
    setIsModalOpen(true);
  }

  return (
    <div>
      <div>
        <div
          id="proyecto1"
          className="px-4 h-screen flex items-center justify-center py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        >
          <div className="lg:grid gap-12 xs:flex xs:flex-col-reverse lg:row-gap-8 lg:grid-cols-2">
            <div className="flex flex-col  justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Museo de Historia Natural "Dr. Humberto Lagiglia"
                  <br className="hidden md:block" />
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Se realizó la construcción del Museo História Natural en San
                  Rafael, Mendoza fundado por el "Dr. Humberto Lagiglia".
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
                        className="w-5 h-5 text-sky-700"
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
                      id="museo"
                      onClick={(e) => pushdatos(e)}
                      className="relative w-full text-left text-lg transition-colors duration-200 ease-in-out group-hover:text-sky-700 dark:group-hover:text-gray-200"
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
                src="https://www.memo.com.ar/files/image/50/50649/64236f1432609.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          ref={projectSectionRef}
          id="pellegrini"
          className="px-4 h-screen flex items-center justify-center py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        >
          <div className="grid gap-12  row-gap-8 lg:grid-cols-2">
            <div
              data-aos="flip-right"
              data-aos-anchor-placement="center-bottom"
            >
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src="https://www.sanrafael.gov.ar/wp-content/uploads/2019/06/led-paseo-pellegrini.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Paseo Pellegrini San Rafael
                  <br className="hidden md:block" />
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Construimos el Paseo Pelegrini, un espacio encantador en el
                  centro de San Rafael, donde se concentran tiendas, heladerías,
                  jugueterías y otros establecimientos, creando un ambiente
                  animado y acogedor para disfrutar de compras y
                  entretenimiento.
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
                        className="w-5 h-5 text-sky-700"
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
                      id="pelegrini"
                      onClick={(e) => pushdatos(e)}
                      className="relative w-full text-left text-lg transition-colors duration-200 ease-in-out group-hover:text-sky-700 dark:group-hover:text-gray-200"
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
          ref={projectParqueRef}
          id="parque"
          className="px-4 h-screen flex items-center justify-center py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        >
          <div className="lg:grid gap-12 xs:flex xs:flex-col-reverse lg:row-gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Parque de los Niños San Rafael
                  <br className="hidden md:block" />
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Se realizó la remodelación y mantenimiento de el Parque de los
                  Niños en San Rafael, Mendoza, un espacio de recreación junto a
                  la Plaza Francia, donde los más pequeños pueden jugar y
                  aprender.
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
                        className="w-5 h-5 text-sky-700"
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
                      id="parque"
                      onClick={(e) => pushdatos(e)}
                      className="relative w-full text-left text-lg transition-colors duration-200 ease-in-out group-hover:text-sky-700 dark:group-hover:text-gray-200"
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
                src={ImagesParque.siete}
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          id="plazarosas"
          className="px-4 h-screen flex items-center justify-center py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        >
          <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
            <div
              data-aos="flip-right"
              data-aos-anchor-placement="center-bottom"
            >
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src={ImagesPlazaRosas.diez}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Plaza Salto de las Rosas
                  <br className="hidden md:block" />
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Se realizó la construcción de la Plaza Salto de las Rosas
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
                        className="w-5 h-5 text-sky-700"
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
                      id="plazarosas"
                      onClick={(e) => pushdatos(e)}
                      className="relative w-full text-left text-lg transition-colors duration-200 ease-in-out group-hover:text-sky-700 dark:group-hover:text-gray-200"
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
          id="playon"
          className="px-4 h-screen flex items-center justify-center py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        >
          <div className="lg:grid gap-12 xs:flex xs:flex-col-reverse lg:row-gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Playón Deportivo Ballofet
                  <br className="hidden md:block" />
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Se realizó la construcción del Playón Deportivo Ballofet,
                  marcado y delineado para actividades deportivas
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
                        className="w-5 h-5 text-sky-700"
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
                      id="playon"
                      onClick={(e) => pushdatos(e)}
                      className="relative w-full text-left text-lg transition-colors duration-200 ease-in-out group-hover:text-sky-700 dark:group-hover:text-gray-200"
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
                src={ImagesPlayonD.doce}
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          id="comedoruni"
          className="px-4 h-screen flex items-center justify-center py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        >
          <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
            <div
              data-aos="flip-right"
              data-aos-anchor-placement="center-bottom"
            >
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src={ImagesComedorUni.veintiocho}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Comedor Universitario UTN
                  <br className="hidden md:block" />
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Se realizó la construcción del Comedor Universitario para la
                  Universidad Tecnológica Nacional de San Rafael, Mendoza
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
                        className="w-5 h-5 text-sky-700"
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
                      id="comedoruni"
                      onClick={(e) => pushdatos(e)}
                      className="relative w-full text-left text-lg transition-colors duration-200 ease-in-out group-hover:text-sky-700 dark:group-hover:text-gray-200"
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
          id="ciclovia"
          className="px-4 h-screen flex items-center justify-center py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        >
          <div className="lg:grid gap-12 xs:flex xs:flex-col-reverse lg:row-gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Ciclo Vía Hipólito Yrigoyen
                  <br className="hidden md:block" />
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Se realizó la construcción de la Ciclo Vía de la Avenida
                  Hipólito Yrigoyen
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
                        className="w-5 h-5 text-sky-700"
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
                      id="ciclovia"
                      onClick={(e) => pushdatos(e)}
                      className="relative w-full text-left text-lg transition-colors duration-200 ease-in-out group-hover:text-sky-700 dark:group-hover:text-gray-200"
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
                src={ImagesCicloVía.seis}
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          ref={projectBmRef}
          id="bmoreno"
          className="px-4 h-screen flex items-center justify-center py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        >
          <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
            <div
              data-aos="flip-right"
              data-aos-anchor-placement="center-bottom"
            >
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src={ImagesBiblioteca.diez}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Biblioteca Mariano Moreno
                  <br className="hidden md:block" />
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Construcción del techo y parasoles de la Biblioteca Mariano
                  Moreno, un espacio cultural emblemático que enriquece nuestra
                  comunidad con conocimiento y oportunidades educativas.
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
                        className="w-5 h-5 text-sky-700"
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
                      id="bmoreno"
                      onClick={(e) => pushdatos(e)}
                      className="relative w-full text-left text-lg transition-colors duration-200 ease-in-out group-hover:text-sky-700 dark:group-hover:text-gray-200"
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
          id="hockey"
          className="px-4 h-screen flex items-center justify-center py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        >
          <div className="lg:grid gap-12 xs:flex xs:flex-col-reverse lg:row-gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Cancha de Hockey
                  <br className="hidden md:block" />
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Se realizó la construcción de la Cancha de Hockey cercada con
                  banquillos de suplentes para cada equipo techados y reforzados
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
                        className="w-5 h-5 text-sky-700"
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
                      id="canchah"
                      onClick={(e) => pushdatos(e)}
                      className="relative w-full text-left text-lg transition-colors duration-200 ease-in-out group-hover:text-sky-700 dark:group-hover:text-gray-200"
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
                src={ImagesCanchaH.diez}
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          id="plazab"
          className="px-4 h-screen flex items-center justify-center py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        >
          <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
            <div
              data-aos="flip-right"
              data-aos-anchor-placement="center-bottom"
            >
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src={ImagesPlazaB.dos}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Plaza Manuel Belgrano
                  <br className="hidden md:block" />
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Se realizó la construcción de la Plaza Manuel Belgrano ubicada
                  en el distrito de Salto De Las Rosas
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
                        className="w-5 h-5 text-sky-700"
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
                      id="plazab"
                      onClick={(e) => pushdatos(e)}
                      className="relative w-full text-left text-lg transition-colors duration-200 ease-in-out group-hover:text-sky-700 dark:group-hover:text-gray-200"
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
          id="plazarama"
          className="px-4 h-screen flex items-center justify-center py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        >
          <div className="lg:grid gap-12 xs:flex xs:flex-col-reverse lg:row-gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Plaza Rama Caída
                  <br className="hidden md:block" />
                </h2>
                <p className="text-base text-gray-700  md:text-lg">
                  Construimos la Plaza del distrito de Rama Caída, un espacio
                  público vibrante que embellece nuestra comunidad y fomenta la
                  interacción social y el esparcimiento al aire libre.
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
                        className="w-5 h-5 text-sky-700"
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
                      id="plazarama"
                      onClick={(e) => pushdatos(e)}
                      className="relative w-full text-left text-lg transition-colors duration-200 ease-in-out group-hover:text-sky-700 dark:group-hover:text-gray-200"
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
                src={ImagesPlazaRama.catorce}
                alt=""
              />
            </div>
          </div>
        </div>
        <section class="text-gray-600 body-font">
          <div class="container lg:px-5 xs:px-0 py-24 mx-auto">
            <div class="flex flex-wrap w-full mb-20">
              <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                  Más Proyectos Realizados
                </h1>
                <div class="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>
              <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
                A parte de los grandes proyectos vistos recientemente, contámos
                con más proyectos como redes de Saniamiento, Estaciones
                Ecológicas, Mantenimientos de sitios importantes como el Km0
                (Punto de Encuentro Centro de San Rafael), Urbanizaciones de
                Loteos, entre otros.
              </p>
            </div>
            <div class="flex flex-wrap -m-4 ">
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src={ImagesRedSar.cuatro}
                    alt="content"
                  />
                  <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    Redes
                  </h3>
                  <h2 class="text-xl text-gray-900 font-medium title-font mb-4">
                    Red Cloacas Av. Sarmiento
                  </h2>
                  <p class="leading-relaxed text-md">
                    Se realizo la construccion de las redes de cloacas de la
                    Avenida Sarmiento
                  </p>
                  <div className=" flex mt-7 cursor-pointer">
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
                          className="w-5 h-5 text-sky-700"
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
                        id="redsar"
                        onClick={(e) => pushdatos(e)}
                        className="relative w-full text-left text-lg transition-colors duration-200 ease-in-out group-hover:text-sky-700 dark:group-hover:text-gray-100"
                      >
                        Ver Imágenes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4  ">
                <div class="bg-gray-100 p-6 rounded-lg h-full flex flex-col justify-between">
                  <div>
                    <img
                      class="h-40 rounded w-full object-cover object-center mb-6"
                      src={ImagesRedSaniamiento.catorce}
                      alt="content"
                    />
                    <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      Redes
                    </h3>
                    <h2 class="text-xl text-gray-900 font-medium title-font mb-4">
                      Redes de Saniamiento
                    </h2>
                    <p class="leading-relaxed text-md">
                      Se realizaron las construcciones de diferentes redes de
                      saniamiento
                    </p>
                  </div>
                  <div class="mt-auto">
                    <div className="cursor-pointer">
                      <div className="relative inline-flex items-center justify-start py-3 pr-12 overflow-hidden font-semibold text-black-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out group-hover:h-full"></span>
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
                            className="w-5 h-5 text-sky-700"
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
                          id="redsan"
                          onClick={(e) => pushdatos(e)}
                          className="relative w-full text-left text-lg transition-colors duration-200 ease-in-out group-hover:text-sky-700 dark:group-hover:text-gray-100"
                        >
                          Ver Imágenes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg h-full">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src={ImagesEstaciones.uno}
                    alt="content"
                  />
                  <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    Estaciones
                  </h3>
                  <h2 class="text-xl text-gray-900 font-medium title-font mb-4">
                    Estaciones Ecológicas San Rafael
                  </h2>
                  <p class="leading-relaxed text-md">
                    Se realizó varias construcciones de las Estaciones
                    Ecológicas situadas en diferentes puntos de la ciudad.
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
                          className="w-5 h-5 text-sky-700"
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
                        id="estacion"
                        onClick={(e) => pushdatos(e)}
                        className="relative w-full text-left text-lg transition-colors duration-200 ease-in-out group-hover:text-sky-700 dark:group-hover:text-gray-100"
                      >
                        Ver Imágenes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg h-full flex flex-col justify-between">
                  <div>
                    <img
                      class="h-40 rounded w-full object-cover object-center mb-6"
                      src={ImagesColector.tres}
                      alt="content"
                    />
                    <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      Colectores
                    </h3>
                    <h2 class="text-xl text-gray-900 font-medium title-font mb-4">
                      Colector Industrial
                    </h2>
                    <p class="leading-relaxed text-md">
                      Se realizó la construcción del Colector Industrial de la
                      ciudad de San Rafael, Mendoza.
                    </p>
                  </div>
                  <div class="mt-auto">
                    <div className="flex cursor-pointer">
                      <div className="relative inline-flex items-center justify-start py-3 pr-12 overflow-hidden font-semibold text-black-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out group-hover:h-full"></span>
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
                            className="w-5 h-5 text-sky-700"
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
                          id="colector"
                          onClick={(e) => pushdatos(e)}
                          className="relative w-full text-left text-lg transition-colors duration-200 ease-in-out group-hover:text-sky-700 dark:group-hover:text-gray-100"
                        >
                          Ver Imágenes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 h-full rounded-lg flex flex-col justify-between">
                  <div>
                    <img
                      class="h-40 rounded w-full object-cover object-center mb-6"
                      src={ImagesManKM0.cuatro}
                      alt="content"
                    />
                    <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      Mantenimiento
                    </h3>
                    <h2 class="text-xl text-gray-900 font-medium title-font mb-4">
                      Mantenimiento del Km0
                    </h2>
                    <p class="leading-relaxed text-md">
                      Se realizo la construccion y mantenimiento de uno de los
                      puntos centrales del centro de San Rafael
                    </p>
                  </div>
                  <div class="mt-auto">
                    <div className="flex cursor-pointer">
                      <div className="relative inline-flex items-center justify-start py-3 pr-12 overflow-hidden font-semibold text-black-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out group-hover:h-full"></span>
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
                            className="w-5 h-5 text-sky-700"
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
                          id="mankm0"
                          onClick={(e) => pushdatos(e)}
                          className="relative w-full text-left text-lg transition-colors duration-200 ease-in-out group-hover:text-sky-700 dark:group-hover:text-gray-100"
                        >
                          Ver Imágenes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 h-full rounded-lg flex flex-col justify-between">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src={ImagesLoteo.diecisiete}
                    alt="content"
                  />
                  <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    Urbanizaciones
                  </h3>
                  <h2 class="text-xl text-gray-900 font-medium title-font mb-4">
                    Urbanización Loteo Procrear
                  </h2>
                  <p class="leading-relaxed text-md">
                    Urbanización Loteo Procrear Un entorno seguro y moderno con
                    amplias áreas verdes y servicios de calidad.
                  </p>
                  <div class="mt-auto">
                    <div className="flex cursor-pointer">
                      <div className="relative inline-flex items-center justify-start py-3 pr-12 overflow-hidden font-semibold text-black-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out group-hover:h-full"></span>
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
                            className="w-5 h-5 text-sky-700"
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
                          id="urba"
                          onClick={(e) => pushdatos(e)}
                          className="relative w-full text-left text-lg transition-colors duration-200 ease-in-out group-hover:text-sky-700 dark:group-hover:text-gray-100"
                        >
                          Ver Imágenes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="xl:w-1/4 md:w-1/2 p-4 ">
                <div class="bg-gray-100 p-6 h-full rounded-lg flex flex-col justify-between">
                  <div>
                    <img
                      class="h-40 rounded w-full object-cover object-center mb-6"
                      src={ImagesCasaM.veintisiete}
                      alt="content"
                    />
                    <div>
                      <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                        Construcciones
                      </h3>
                      <h2 class="text-xl text-gray-900 font-medium title-font mb-4">
                        Casa De La Mujer
                      </h2>
                      <p class="leading-relaxed text-md">
                        Construcción de Casa De La Mujer en Avenida Rivadavia.
                      </p>
                    </div>
                  </div>
                  <div class="mt-auto">
                    <div className="flex cursor-pointer">
                      <div className="relative inline-flex items-center justify-start py-3 pr-12 overflow-hidden font-semibold text-black-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out group-hover:h-full"></span>
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
                            className="w-5 h-5 text-sky-700"
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
                          id="casam"
                          onClick={(e) => pushdatos(e)}
                          className="relative w-full text-left text-lg transition-colors duration-200 ease-in-out group-hover:text-sky-700 dark:group-hover:text-gray-100"
                        >
                          Ver Imágenes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 h-full p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src={ImagesCentroI.dos}
                    alt="content"
                  />
                  <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    Centros Integradores
                  </h3>
                  <h2 class="text-xl text-gray-900 font-medium title-font mb-4">
                    Centro Integrador Comunitario
                  </h2>
                  <p class="leading-relaxed text-lg">
                    Se realizó la construcción del Centro Integrador Comunitario
                  </p>
                  <div className="mt-7 flex  cursor-pointer">
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
                          className="w-5 h-5 text-sky-700"
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
                        id="cic"
                        onClick={(e) => pushdatos(e)}
                        className="relative w-full text-left text-lg transition-colors duration-200 ease-in-out group-hover:text-sky-700 dark:group-hover:text-gray-100"
                      >
                        Ver Imágenes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={imagenes}
      ></Modal>
    </div>
  );
}
