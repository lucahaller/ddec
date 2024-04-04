import React, { useEffect, useRef, useState } from "react";
import { Navbar } from "flowbite-react";

import Obras from "./Obras";
import Hero from "./Hero";
import HeroInicio from "./HeroInicio";
import Nav from "./Nav";
import About from "./About";
import Contact from "./Contact";
import Loader from "./Loader";

const Project = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula un retraso de carga de 2 segundos
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Limpia el temporizador en la limpieza del efecto
    return () => clearTimeout(timer);
  }, []); // Ejecutar solo una vez al montar el componente

  return (
    <div class=" overflow-x-hidden ">
      {loading ? (
        <div className="h-screen w-full flex items-center justify-center">
          <Loader />
        </div> // Renderiza el componente de carga mientras la página está cargando
      ) : (
        <>
          <Nav />
          <div className="h-screen">
            <HeroInicio />
          </div>
          <section id="about" className="">
            <About />
          </section>
          <section class="text-gray-600    bg-gray-800 body-font ">
            <Hero />
          </section>
          <section
            id="empresasyproyectos"
            className="flex flex-col items-center justify-center h-screen "
          >
            <h1 className="mt-20 flex text-center items-center font-Kanit justify-center text-bold text-5xl">
              Empresas & Proyectos
            </h1>
            <Obras />
          </section>
          <section id="contacto" class="text-gray-600 body-font relative">
            <Contact />
          </section>
        </>
      )}
    </div>
  );
};

export default Project;
