import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Modal({ open, onClose, images }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex justify-center items-center">
      <div className="overflow-y-hidden relative w-full max-h-screen max-w-screen-xl mx-auto">
        <div className="absolute top-0 right-0 pt-4 pr-4">
          <button onClick={onClose} className="text-3xl text-white">
            <IoIosCloseCircleOutline />
          </button>
        </div>
        <div className=" rounded-lg shadow-xl  lg:p-28 xl:p-20 xxl:p-20  xsm:py-20 xsm:p-0 overflow-hidden h-full">
          <div className="relative w-full  ">
            <Carousel
              showArrows={true}
              stopOnHover={true}
              transitionTime={800}
              useKeyboardArrows={true}
              dynamicHeight={false}
              emulateTouch={true}
              infiniteLoop={true}
              showThumbs={false}
            >
              {images.map((image, index) => (
                <div key={index} className="w-full max-h-[600px] h-full">
                  <img
                    src={image}
                    className="w-full    max-h-full object-contain"
                    alt={`Image ${index + 1}`}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
