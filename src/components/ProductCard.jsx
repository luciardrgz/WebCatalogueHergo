const ProductCard = ({product}) => (
  <div className="w-[15em] py-3 justify-center">
      <div className="relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
        <img className="rounded-t-lg" src={product.image} alt="Nombre del producto" />
        <div className="py-6 px-6 rounded-lg bg-white">
          <h1 className="text-gray-700 font-bold text-md mb-3 hover:text-gray-900 leading-tight">{product.title}</h1>
          <p className="text-gray-700 text-md h-auto">{product.description}</p>
          <button className="mt-6 py-2 px-4 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300 bg-hergo-blue">Añadir al carrito</button>
        </div>
        <div className="absolute top-2 right-2 py-2 px-4 rounded-lg bg-hergo-blue">
          <span className="text-md text-white font-bold">${product.price}</span>
        </div>
      </div>
    </div>
);

export default ProductCard;