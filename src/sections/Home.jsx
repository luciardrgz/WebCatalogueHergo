import LastProductCard from "../components/LastProductCard";
import Slider from "../components/Slider";
import { slides } from "../utils/constants";

const Home = ({ lastProducts }) => (
  <section id="home" className="bg-gray-100">
    <Slider slides={slides} />
    <h2 className="text-center text-lg font-bold leading-tight md:leading-none lg:leading-none">
      Nuestros últimos productos
    </h2>
    <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 justify-items-center">
      {lastProducts && lastProducts.length > 0 ? (
        lastProducts.map((product) => <LastProductCard product={product} />)
      ) : (
        <div class="flex flex-col justify-center items-center">Cargando...</div>
      )}
    </div>
  </section>
);
export default Home;
