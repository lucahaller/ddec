import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Carousel } from "flowbite-react";
import park from "../Empresas/Muni/ParqueNiños/9.jpeg";
import aguatoro from "../Empresas/Pampa/PampaAguaDelToro/2.jpeg";
import trafo from "../Empresas/Pampa/Base_Transformador_PAMPA/1.jpeg";
import Typewriter from "./Typewriter";
export default function HeroInicio() {
  // Lista de imágenes de fondo
  const backgrounds = [`url(${trafo})`, `url(${aguatoro})`, `url(${park})`];

  // Estado para almacenar el índice de la imagen de fondo actual
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  // Función para cambiar la imagen de fondo
  const changeBackground = () => {
    setCurrentBackgroundIndex(
      (prevIndex) => (prevIndex + 1) % backgrounds.length
    );
  };

  // Efecto para cambiar automáticamente el fondo cada cierto tiempo
  useEffect(() => {
    const intervalId = setInterval(changeBackground, 5000); // Cambiar cada 5 segundos

    // Limpiar el temporizador cuando el componente se desmonte o cuando cambie el estado
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="h-full bg-gray-50 flex bg-cover  items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ${backgrounds[currentBackgroundIndex]}`,
      }}
    >
      <section className="w-full bg-cover bg-center py-32">
        <div className="container h-full mx-auto text-center text-white flex flex-col items-center justify-center">
          <h1 className="text-7xl xs:text-5xl font-bold  mb-6">
            <Typewriter />
          </h1>
          <p className="text-4xl xs:text-3xl mb-12">
            Desarrollo de Estructuras Cíviles de San Rafael,Mendoza
          </p>
          <a
            href="#"
            className="bg-indigo-500 text-white text-xl font-bold py-3 px-10 rounded-xl hover:bg-indigo-600"
          >
            Contáctanos
          </a>
        </div>
      </section>
    </div>
  );
}
