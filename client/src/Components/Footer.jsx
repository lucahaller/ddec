import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import logo from "../Logos&Imágenes/logo3.png";

export default function Foot() {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <img className="w-auto h-20 pb-0" src={logo} />

          <Footer.LinkGroup>
            <Footer.Link href="#about">Sobre Nosotros</Footer.Link>
            <Footer.Link href="https://www.facebook.com/DDEC.Constructora/?locale=es_LA">
              Página Facebook
            </Footer.Link>
            <Footer.Link href="#empresasyproyectos">Proyectos</Footer.Link>
            <Footer.Link href="#contacto">Contacto</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright by="D.D.E.C Empresa Constructora™" year={2024} />
      </div>
    </Footer>
  );
}
