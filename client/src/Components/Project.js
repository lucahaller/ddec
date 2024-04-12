import React, { useEffect, useRef, useState } from "react";
import { Navbar } from "flowbite-react";

import Obras from "./Obras";
import Hero from "./Hero";
import HeroInicio from "./HeroInicio";
import Nav from "./Nav";
import About from "./About";
import Contact from "./Contact";

const Project = () => {
  const [loading, setLoading] = useState(true);

  const projectSectionRef = useRef(null);
  const projectEyPRef = useRef(null);
  const about = useRef(null);
  useEffect(() => {
    // Simula un retraso de carga de 2 segundos
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Limpia el temporizador en la limpieza del efecto
    return () => clearTimeout(timer);
  }, [<HeroInicio />]); // Ejecutar solo una vez al montar el componente
  useEffect(() => {
    if (window.location.hash === "#contacto") {
      // Si la URL tiene el hash '#proyectosection', desplázate a esa sección
      projectSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (window.location.hash === "#empresasyproyectos") {
      // Si la URL tiene el hash '#proyectosection', desplázate a esa sección
      projectEyPRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (window.location.hash === "#about") {
      // Si la URL tiene el hash '#proyectosection', desplázate a esa sección
      about.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <div class=" overflow-x-hidden ">
      <div className="h-screen">
        <HeroInicio />
      </div>
      <section ref={about} id="about" className="">
        <About />
      </section>
      <section class="text-gray-600    bg-gray-800 body-font ">
        <Hero />
      </section>
      <section
        ref={projectEyPRef}
        id="empresasyproyectos"
        className="flex flex-col items-center justify-center h-screen "
      >
        <h1 className="mt-20 flex text-center items-center font-Kanit justify-center text-bold text-5xl">
          Empresas & Proyectos
        </h1>
        <Obras />
      </section>
      <section
        ref={projectSectionRef}
        id="contacto"
        class="text-gray-600 body-font relative"
      >
        <Contact />
      </section>
    </div>
  );
};

export default Project;
