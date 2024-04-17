import { useState } from "react";
import emailjs from "emailjs-com";
import { FaWhatsapp } from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Contact() {
  const MySwal = withReactContent(Swal);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false); // Estado para controlar si se está enviando el mensaje
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.value) {
      setError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Validar que los campos requeridos no estén vacíos
    if (!formData.name || !formData.email || !formData.message) {
      setError(true);
      setIsSending(false);
      return;
    }

    emailjs
      .send(
        "service_mqr45ma",
        "template_dg6006h",
        formData,
        "X2e251BY5xYJ0Kgba"
      )
      .then(
        (response) => {
          console.log("Correo electrónico enviado con éxito:", response);
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "success",
            title: "Mensaje enviado",
          }).then(() => {
            window.location.reload();
          });
        },
        (error) => {
          console.error("Error al enviar el correo electrónico:", error);
          MySwal.fire({
            icon: "error",
            title: "Error",
            text: "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.",
          });
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  const handleWsp = () => {
    // Número de teléfono al que quieres enviar el mensaje
    const phoneNumber = "542604822741";

    // Mensaje predeterminado que quieres enviar
    const message = encodeURIComponent(
      "Hola, Que tal?, me comunico desde su página Constructora DDEC, para solicitar un asesoramiento."
    );

    // Genera el enlace con el protocolo whatsapp://send
    const whatsappLink = `https://wa.me/${phoneNumber}/?text=${message}`;

    // Abre el enlace en una nueva ventana o pestaña
    window.open(whatsappLink);
  };

  return (
    <div className="container pt-28 px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13132.756924010437!2d-68.357029!3d-34.624658!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96790804fa74a00b%3A0x769becf03eb818ad!2sDDEC%20%7C%20Desarrollo%20De%20Estructuras%20Civiles%20SRL.!5e0!3m2!1ses!2sar!4v1708958470281!5m2!1ses!2sar"
          width="100%"
          height="100%"
          className="absolute inset-0"
          frameBorder="0"
          title="map"
          marginHeight="0"
          marginWidth="0"
          scrolling="no"
        ></iframe>
        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
          <div className="lg:w-1/2 px-6">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
              Dirección
            </h2>
            <p className="mt-1">
              Avenida Julio A. Roca 1531, M5600 CQE, Mendoza
            </p>
          </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
              EMAIL
            </h2>
            <a
              href="mailto:example@email.com"
              className="text-indigo-500 leading-relaxed"
            >
              constructoraddecsrl@gmail.com
            </a>
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
              Teléfono
            </h2>
            <p className="leading-relaxed">+542604822741</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 className="text-gray-900 text-4xl mb-1 font-medium title-font">
          Contáctanos
        </h2>
        <p className="leading-relaxed mb-5 text-gray-600">
          Déjanos un mensaje y nos pondremos en contacto contigo lo antes
          posible
        </p>
        <form onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={handleChange}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={handleChange}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={handleChange}
            ></textarea>
          </div>
          {error === true && (
            <p className=" flex items-center justify-center text-lg text-red-600">
              Porfavor complete los datos antes de enviar
            </p>
          )}
          <button
            type="submit"
            className="w-full relative px-10 py-2 rounded-lg text-lg isolation-auto z-10  border-indigo-500
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full  before:bg-indigo-700  bg-indigo-500 hover:text-white text-white font-bold before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 "
            disabled={isSending} // Deshabilita el botón mientras se envía el mensaje
          >
            {isSending ? (
              <div
                role="status"
                class="inline-block h-5 w-5 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              >
                <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Enviando...
                </span>
              </div>
            ) : (
              "Enviar Mensaje"
            )}
          </button>
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg text-gray-500 font-semibold flex items-center">
              O
            </p>
            <button
              onClick={handleWsp}
              className="w-full flex flex-row  items-center justify-center relative px-2 py-2 rounded-lg text-lg isolation-auto z-10  border-green-500
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full  before:bg-green-700  bg-green-500 hover:text-white text-white font-bold before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
            >
              Enviar Mensaje por WhatsApp{" "}
              <FaWhatsapp className="ml-3 text-3xl" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
