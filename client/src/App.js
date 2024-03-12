import "./App.css";
import React from "react";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import Rutas from "./Routes/Rutas";

function App() {
  return (
    <PrimeReactProvider>
      <Rutas />
    </PrimeReactProvider>
  );
}

export default App;
