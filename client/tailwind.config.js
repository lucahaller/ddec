/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js", // Mover la coma aquí
  ],
  theme: {
    backgroundImage: {
      atras: 'url("../src/OBRAS/CasaMujer/Etapa_1/13.jpeg")',
      muni: 'url("../src/Empresas/Muni/ParqueNiños/7.jpeg")',
      pampa: 'url("../src/OBRAS/Base_Transformador_PAMPA/10.jpeg")',
      priv: 'url("../src/Empresas/Privados/Casadoro/CONSULTORIO/edificio.jpg")',
      afip: 'url("../src/Empresas/Afip/CIELORRASOS_SR/1.jpeg")',
      ipv: 'url("../src/Empresas/IPV/1.jpg")',
      bgafip: 'url("../src/Assets/bgafip.png")',
    },

    screens: {
      xs: "300px",
      xsm: "500px",
      sm: "640px",
      md: "768px",
      ml: "828px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    extend: {
      fontFamily: {
        Kanit: ["Kanit"],
      },
      animation: {
        circle: "circle 6s linear infinite",
        "circle-reverse": "circle-reverse 6s linear infinite",
      },
      keyframes: {
        circle: {
          "0%": { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateX(120px) rotate(-360deg)",
          },
        },
        "circle-reverse": {
          "0%": { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
          "100%": {
            transform: "rotate(-360deg) translateX(120px) rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")], // No necesitas usar require aquí
};
