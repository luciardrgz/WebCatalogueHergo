import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot,faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";


export default function Contact(){
return (
<div className="relative flex items-top justify-center sm:h-[50rem] md:h-[37rem] bg-hergo-blue dark:bg-[#0E1133] sm:items-center sm:pt-0">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div className="mt-8 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="min-[200px]:ml-6 mr-6 rounded-lg p-6 md:mr-2 bg-gray-100 dark:bg-hergo-blue">

                        <h1 className="text-lg text-gray-800 dark:text-white font-extrabold tracking-tight">
                            Contactanos
                        </h1>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-2">
                            Completa el formulario y nos comunicaremos contigo.
                        </p>

                        <div className="flex items-center mt-10 text-gray-600 dark:text-gray-400">
                            <FontAwesomeIcon icon={faLocationDot} className="h-[1.7rem]" />
                            <div className="ml-4 text-md tracking-wide font-semibold w-70">
                            Magallanes 9526
                            <br /> 
                            (Ruta 88 y Magallanes) Mar del Plata 
                            </div>
                        </div>

                        <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                        <FontAwesomeIcon icon={faPhone} className="h-[1.7rem]"/>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                            (0223) 465 3434
                            </div>
                        </div>

                        <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                        <FontAwesomeIcon icon={faEnvelope} className="h-[1.7rem]"/>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                info@hergo.com.ar
                            </div>
                        </div>

                        <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                        <FontAwesomeIcon icon={faWhatsapp} className="h-[1.7rem]" />
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                + 54 9 223 520-5392
                            </div>
                        </div>
                    </div>

                    <form className="max-md:mt-6 ml-6 mr-6 md:pl-6 flex flex-col m-0">
                        <div className="flex flex-col">
                            <label for="name" className="hidden">Nombre Completo</label>
                            <input type="name" name="name" id="name" placeholder="Nombre Completo" className="w-100 py-3 px-3 rounded-lg bg-white dark:bg-hergo-blue border border-gray-400 dark:border-gray-700 text-white font-semibold focus:border-indigo-500 focus:outline-none" />
                        </div>

                        <div className="flex flex-col mt-2">
                            <label for="email" className="hidden">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-hergo-blue border border-gray-400 dark:border-gray-700 text-white font-semibold focus:border-indigo-500 focus:outline-none" />
                        </div>

                        <div className="flex flex-col mt-2">
                            <label for="tel" className="hidden">Numero</label>
                            <input type="tel" name="tel" id="tel" placeholder="Numero de telefono" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-hergo-blue border border-gray-400 dark:border-gray-700 text-white font-semibold focus:border-indigo-500 focus:outline-none" />
                        </div>
                        <div className="min-[200px]:h[5rem] flex-col mt-2 md:h-[10rem]">
                            <label for="men" className="hidden">mensaje</label>
                            <textarea name="text" cols="56" rows="3" maxlength="300" placeholder="Escribe tu mensaje aqui" className="min-[200px]:w-full lg: mt-2 py-3 px-3 rounded-lg bg-white dark:bg-hergo-blue border border-gray-400 dark:border-gray-700 text-white font-semibold focus:border-indigo-500 focus:outline-none resize-none" ></textarea>
                        </div>

                        <button type="submit" className="max-md:mb-2 md:w-32 bg-[#991b1b] text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-hergo-red transition ease-in-out duration-300">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
)
}