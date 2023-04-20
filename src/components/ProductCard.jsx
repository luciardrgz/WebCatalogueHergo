export default function ProductCard () {
    return(
  <div className="max-w-xs py-3 flex justify-center">
      <div className="relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
        <img className="rounded-t-lg" src="https://www.hergo.com.ar/img/hergui-chico.png" alt="Nombre del producto" />
        <div className="py-6 px-8 rounded-lg bg-white">
          <h1 className="text-gray-700 font-bold text-md mb-3 hover:text-gray-900 hover:cursor-pointer">Herguito</h1>
          <p className="text-gray-700 text-md">Cometió crímenes de guerra horribles. No lo mires a los ojos sin su permiso.</p>
          <button className="mt-6 py-2 px-4 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300 bg-hergo-blue">Añadir al carrito</button>
        </div>
        <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg bg-hergo-blue">
          <span className="text-md text-white font-bold">$430</span>
        </div>
      </div>
    </div>
    )
}