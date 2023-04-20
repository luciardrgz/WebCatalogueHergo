import ProductCard from '../components/ProductCard';

const Products = () => (
    <section id="products" className='bg-gray-100'>
      <br />
      <div className="mt-5 grid grid-cols-3 justify-items-center">
       <ProductCard />
       <ProductCard />
       <ProductCard />
      </div>

    </section>

)

export default Products;