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
      <section class="text-gray-600    bg-gray-800 body-font ">
        <Hero />
      </section>
      <section
        id="empresasyproyectos"
        className="flex flex-col items-center justify-center h-screen "
      >
        <h1 className=" flex items-center font-Kanit justify-center text-bold text-6xl">
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
