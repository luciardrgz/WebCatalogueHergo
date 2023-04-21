const LastProductCard = ({ product }) => (
          <div class="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
            <div class="h-64 w-full rounded-lg shadow-md overflow-hidden">
              <img
                src={product.url}
                alt={product.name}
                class="w-full h-full object-cover object-center"
              />
            </div>
            <div class="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
              <div class="py-2 text-center font-bold uppercase tracking-wide text-gray-800">
              {product.name}
              </div>
              <div class="flex items-center justify-between py-2 px-3 bg-hergo-blue">
                <h1 class="text-white font-bold ">${product.price}</h1>
                <button class="bg-[#0E1133] text-[0.6em] text-white px-2 py-1 font-semibold rounded hover:bg-hergo-red hover:text-white">
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
);

export default LastProductCard;
