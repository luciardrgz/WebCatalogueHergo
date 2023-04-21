import ProductCard from '../components/ProductCard';
import Searchbar from '../components/Searchbar';

const Products = ({products}) => (
    <section id="products">
      <Searchbar/>
      <br />
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
      {products && products.length > 0
        ? products.map((product) => <ProductCard product={product} />)
        : null}
      </div>
    </section>
)

export default Products;