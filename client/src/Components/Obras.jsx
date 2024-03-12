import React, { useEffect, useRef, useState } from "react";
import { Timeline } from "primereact/timeline";
import uno from "../OBRAS/CasaMujer/Etapa_1/1.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
export default function Obras() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const sliderRef = useRef(null);
  const empresas = [
    {
      img: "https://cpcejujuy.org.ar/wp-content/uploads/2018/05/afip-logo-720x398.jpg",
      name: "AFIP",
      direc: "/afip",
      bg: "before:bg-afip",
    },
    {
      img: "https://pbs.twimg.com/profile_images/1536318543549145090/ClS-5GuQ_400x400.jpg",
      name: "IPV",
      direc: "/ipv",
      bg: "before:bg-ipv",
    },
    {
      img: "https://pbs.twimg.com/profile_images/1721909416436633600/6_fahV1p_400x400.jpg",
      name: "Irrigación",
      direc: "/irrigación",
      bg: "",
    },
    {
      img: "https://yt3.googleusercontent.com/ytc/AIf8zZT6aLQXpX8jlB8rhgeSXZLRNzR5h_dAsAM8BkTU_Q=s900-c-k-c0x00ffffff-no-rj",
      name: "Municipalidad de San Rafael",
      direc: "/muni",
      bg: "before:bg-muni",
    },
    {
      img: "https://pbs.twimg.com/profile_images/1042102997466206209/z4V-64Hk_400x400.jpg",
      name: "Pampa Energía",
      direc: "/pampaenergía",
      bg: "before:bg-pampa",
    },
    {
      img: "https://static.vecteezy.com/system/resources/previews/010/553/523/non_2x/collaboration-agreement-logo-design-contract-deal-logo-vector.jpg",
      name: "Proyectos Privados",
      direc: "/proyectospriv",
      bg: "before:bg-priv",
    },
  ];
  const [slidesToShow, setSlidesToShow] = useState(4);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Adjust slidesToShow based on window width
    if (windowWidth < 640) {
      setSlidesToShow(1);
    } else if (windowWidth < 940) {
      setSlidesToShow(2);
    } else if (windowWidth < 1324) {
      setSlidesToShow(3);
    } else {
      setSlidesToShow(4);
    }
  }, [windowWidth]);

  return (
    <div className="  w-full  bg-white ">
      <Slider {...settings}>
        {empresas?.map((e) => (
          <div key={e.name}>
            <div className="flex   items-center justify-center w-full h-full p-10">
              <div
                className={`group  shadow-lg shadow-gray-300 before:hover:backdrop-blur-10 before:hover:scale-95 before:hover:h-96 before:bg-cover  before:hover:w-80 ${e.bg} before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-32 before:rounded-t-2xl r before:absolute before:hover:bg-opacity-25 before:backdrop-blur-lg before:top-0  before:bg-no-repeat  w-72 h-96 relative flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden`}
              >
                <img
                  src={e?.img}
                  className="w-28 h-28  bg-blue-700 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500"
                />
                <div className="z-10  group-hover:-translate-y-10 transition-all duration-500 group-hover:text-white">
                  <span className="text-2xl  font-semibold">{e?.name}</span>
                </div>
                <div className="w-full  flex items-center justify-center cursor-pointer">
                  <div className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold  text-black-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6   dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
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
                        className="w-5 h-5 text-green-400"
                      >
                        <path
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                          stroke-width="2"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                    </span>
                    <a
                      href={e.direc}
                      className="relative w-full text-left text-lg transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200"
                    >
                      Ver Proyectos
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
// function CustomNextArrow(props) {
//   const { onClick } = props;
//   return (
//     <div
//       className="slick-arrow"
//       style={{ right: "10px", zIndex: "2" }}
//       onClick={onClick}
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-6 w-6"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M9 5l7 7-7 7"
//         />
//       </svg>
//     </div>
//   );
// }

function CustomPrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow  "
      style={{ left: "10px", zIndex: "1" }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-arrow"
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-arrow"
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
