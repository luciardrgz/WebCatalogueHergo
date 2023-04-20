import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop } from "@fortawesome/free-solid-svg-icons";


const CompanyInfo = () => (
  <div class="container mx-auto pt-16 bg-blueGray-50 border border-gray-400">
  <div class="w-full md:w-6/12 px-4">
    <div class="flex flex-col mt-4"> 
      <div class="px-4 py-5 flex-auto">
        <FontAwesomeIcon icon={faShop} class="w-12 h-12 mb-5 p-3 text-center text-black rounded-full shadow-lg bg-white" />
        <h6 class="text-lg font-semibold mb-1">Direccion</h6>
        <p class="mb-4 text-blueGray-500">Magallanes y ruta 88</p>
      </div>
    </div>
  </div>
</div>

);

export default CompanyInfo;
