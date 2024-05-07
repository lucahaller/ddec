import React, { useEffect, useRef, useState } from "react";
import { Navbar } from "flowbite-react";

import Obras from "./Obras";
import Hero from "./Hero";
import HeroInicio from "./HeroInicio";
import Nav from "./Nav";
import About from "./About";
import Contact from "./Contact";

const Project = () => {
  return (
    <div class=" overflow-x-hidden ">
      <div className="h-screen">
        <HeroInicio />
      </div>
      <section id="about" className="">
        <About />
      </section>
      <section class="text-gray-600    bg-gray-800  bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]body-font ">
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
    </div>
  );
};

export default Project;
