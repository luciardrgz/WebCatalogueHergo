import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop } from "@fortawesome/free-solid-svg-icons";

const CompanyInfo = () => (
  <div className="w-full md:w-6/12 px-4 border  bg-hergo-blue rounded-lg">
    <div className="flex flex-col mt-4"> 
      <div className="px-4 py-5 flex-auto">
        <FontAwesomeIcon icon={faShop} class="w-12 h-12 mb-5 p-3 text-center text-black rounded-full shadow-lg bg-white rounded-full" />
        <h6 className="text-lg font-semibold mb-1 text-white">Direccion</h6>
        <p className="mb-4 text-white">Magallanes y ruta 88 a 600 metros de Champagnat y de Juan B. Justo </p>
      </div>
    </div>
  </div>
);

export default CompanyInfo;