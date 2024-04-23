import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Project from "../Components/Project";
import Afip from "../Pages/Afip/Afip";
import Irrigación from "../Pages/Irrigación/Irrigación";
import Ipv from "../Pages/IPV/Ipv";
import Muni from "../Pages/MuniSRL/Muni";
import Pampa from "../Pages/Pampa_Energía/Pampa";
import ProyectosPriv from "../Pages/ProyectosPriv/ProyectosPriv";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader";

const Rutas = () => {
  // Ejecutar solo una vez al montar el componente
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path={"/"} element={<Project />} />
          <Route exact path={"/afip"} element={<Afip />} />
          <Route exact path={"/irrigación"} element={<Irrigación />} />
          <Route exact path={"/ipv"} element={<Ipv />} />
          <Route exact path={"/muni"} element={<Muni />} />
          <Route exact path={"/pampaenergía"} element={<Pampa />} />
          <Route exact path={"/proyectospriv"} element={<ProyectosPriv />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
