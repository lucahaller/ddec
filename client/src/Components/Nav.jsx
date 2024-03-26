import { Navbar } from "flowbite-react";
import logo from "../Logos&Imágenes/logo3.png";

export default function Nav() {
  return (
    <Navbar fluid rounded className="fixed avsolute z-20 w-full shadow-md">
      <Navbar.Brand className="ml-10 ">
        <img src={logo} className="w-50 h-16 " alt="Flowbite React Logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="mr-32">
        <Navbar.Link className="text-lg" href="/">
          Inicio
        </Navbar.Link>
        <Navbar.Link className="text-lg" href="/#empresasyproyectos">
          Obras
        </Navbar.Link>
        <Navbar.Link className="text-lg" href="/#about">
          Sobre Nosotros
        </Navbar.Link>
        <Navbar.Link className="text-lg" href="/#contacto">
          Contacto
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
