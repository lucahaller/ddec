import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import Modal from "../../Components/Modal";
import Images from "../../Empresas/Afip/CIELORRASOS_SR/Index";
import ImagesSanLuis from "../../Empresas/Afip/AFIP_SAN_LUIS/Index";
import ImagesSanRa from "../../Empresas/Afip/AFIP_SAN_RAFAEL/index";
import { Outlet, unstable_HistoryRouter } from "react-router-dom";
import Layout from "../../Routes/Layout";
import Content from "./Content";

export default function Afip() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80; // Ajusta el desplazamiento adicional aquí
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="h-screen " id="1">
        <div className="relative p-10 bg-sky-400">
          <div className="absolute inset-x-0 bottom-0">
            <svg
              viewBox="0 0 224 12"
              fill="currentColor"
              className="w-full -mb-1 text-white"
              preserveAspectRatio="none"
            >
              <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
            </svg>
          </div>
          <div className="px-4 py-16 xs:py-28 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="relative max-w-2xl xs:mx-auto  xs:max-w-xl md:max-w-2xl xs:text-center">
              <h2 className="mb-3 xs:text-4xl font-sans lg:text-4xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                AFIP
                <br className="hidden md:block" />
                <p>PROYECTOS REALIZADOS</p>
              </h2>
              <p className="mb-6 lg:text-xl  text-justify   sm:text-center font-semibold text-indigo-100 md:text-lg">
                En el transcurso de la sección, encontrarás diversos proyectos
                realizados por DDEC, junto con su descripción y tareas
                realizadas.
              </p>

              <p className=" mb-10 lg:text-xl text-justify   sm:text-center md:text-lg font-semibold tracking-wide text-indigo-100 sm:text-sm sm:mx-auto md:mb-16">
                Te invito a que las leas y si tienes ganas de realizar algún
                proyecto parecido no dudes en contactárnos!
              </p>
              <a
                href="/#contacto"
                className="bg-indigo-500 text-white text-xl font-bold py-3 px-10 rounded-xl hover:bg-indigo-600"
              >
                Contáctanos
              </a>
              <button
                onClick={() => scrollToSection("proyecto2")}
                aria-label="Scroll down"
                className="flex mt-10 items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-100 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="currentColor"
                >
                  <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Content />
    </div>
  );
}
