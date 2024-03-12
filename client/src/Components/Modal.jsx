import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Modal({ open, onClose, images }) {
  if (!open) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-[1000] bg-black bg-opacity-50">
      <div className="fixed left-[50%] top-[50%] z-[1000] transform -translate-x-1/2 -translate-y-1/2 flex flex-col rounded-md font-bold">
        <button
          onClick={onClose}
          className="  text-4xl text-white cursor-pointer"
        >
          <IoIosCloseCircleOutline />
        </button>
        <div className="relative z-10">
          <Carousel
            className="px-8"
            showArrows={true}
            stopOnHover={false}
            transitionTime={800}
            useKeyboardArrows={true}
            infiniteLoop={true}
          >
            {images.map((image, index) => (
              <div key={index} className="w-full h-[600px]">
                <img
                  src={image}
                  className="object-cover w-full h-full"
                  alt={`Image ${index + 1}`}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
