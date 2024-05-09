import React, { useState, useEffect } from "react";

const Typewriter = () => {
  const words = ["Empresa Constructora DDEC S.R.L"];
  const [currentWord, setCurrentWord] = useState("");

  useEffect(() => {
    let timer;
    let index = 0;
    let currentCharIndex = 0;

    const type = () => {
      if (index === words.length) {
        clearTimeout(timer);
        return;
      }

      setCurrentWord((prevWord) => prevWord + words[index][currentCharIndex]);

      if (currentCharIndex === words[index].length - 1) {
        index++;
        currentCharIndex = 0;
      } else {
        currentCharIndex++;
      }

      timer = setTimeout(type, 100);
    };

    type();

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1 id="typewriter" className="text-5xl xl:text-6xl font-bold">
        {currentWord}
      </h1>
    </div>
  );
};

export default Typewriter;
