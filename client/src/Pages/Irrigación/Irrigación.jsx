import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Irrigación() {
  window.reload;
  useEffect(() => {
    AOS.init({
      duration: 3000,
      delay: 200,
      once: true,
    });
    // Scroll al principio del componente después de que se haya renderizado completamente
    window.scrollTo(0, 0);
  }, []);

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
    <div>
      <section className="h-screen" id="1">
        <div className="relative p-10 bg-teal-700">
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
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
              <h2 className="mb-6 font-sans lg:text-4xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                IRRIGACIÓN
                <br className="hidden md:block" />
                PROYECTOS REALIZADOS
              </h2>
              <p className="mb-6 lg:text-xl font-semibold text-indigo-100 md:text-lg">
                En el transcurso de la sección, encontrarás diversos proyectos
                realizados por DDEC, junto con su descripción y tareas
                realizadas.
              </p>

              <p className="max-w-md mb-10 lg:text-xl tracking-wide text-indigo-100 sm:text-sm sm:mx-auto md:mb-16">
                Te invito a que las leas y si tienes ganas de realizar algún
                proyecto parecido no dudes en contactárnos!
              </p>
              <a
                href="#"
                className="bg-indigo-500 text-white text-xl font-bold py-3 px-10 rounded-xl hover:bg-indigo-600"
              >
                Contáctanos
              </a>
              <button
                onClick={() => scrollToSection("proyecto1")}
                aria-label="Scroll down"
                className="flex mt-10 items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
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
      </section>
      <section
        id="proyecto1"
        className="px-4 h-screen flex items-center py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Proyecto N 1
                <br className="hidden md:block" />
                Etapa 1
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Una descripción del proyecto
              </p>
            </div>
            <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
              <div>
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-10 h-10 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">
                  I'll be sure to note that in my log
                </h6>
                <p className="text-sm text-gray-900">
                  Dingy I'm tellin' you rhubaahb Bangah Jo-Jeezly got in a gaum
                  Powrtland stove up dooryahd
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-10 h-10 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">
                  Iterative approaches to corporate strategy
                </h6>
                <p className="text-sm text-gray-900">
                  A slice of heaven. O for awesome, this chocka full cuzzie is
                  as rip-off as a cracker.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="flip-right" data-aos-anchor-placement="center-bottom">
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}
