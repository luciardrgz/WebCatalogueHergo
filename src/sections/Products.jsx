import ProductCard from '../components/ProductCard';
import Searchbar from '../components/Searchbar';
const Products = () => (
    <section id="products" className='bg-gray-100'>
      <Searchbar/>
      <br />
      <div className="mt-5 grid grid-cols-3 justify-items-center">
       <ProductCard />
       <ProductCard />
       <ProductCard />
      </div>

    </section>

)

export default Products;