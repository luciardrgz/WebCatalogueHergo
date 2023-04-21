const CompanyAbout = () => (
  <div className="relative flex flex-col w-full mb-6 shadow-lg rounded-lg bg-hergo-red">
    <img
      src="https://media.discordapp.net/attachments/1097492856966479993/1098672652111061152/Hergo.jpg?width=480&height=480"
      className="w-full h-[25em] object-cover object-center rounded-t-lg"
    />
    <div className="relative p-5 mb-4">
      <h2 className="font-extrabold text-white text-[2em] leading-tight">
        Su aliado mayorista de confianza
      </h2>
      <p className="text-md mt-2 text-white">
        Somos una empresa marplatense dedicada a la venta Mayorista y
        distribución de productos de consumo masivo. Con una trayectoria de 25
        años que avala nuestra experiencia y una excelente capacidad operativa,
        trabajamos para cubrir las necesidades del mercado local y zonal,
        siempre bajo el imperativo de ofrecer el más amplio surtido de productos
        de primer nivel al mejor precio.
      </p>
    </div>
  </div>
);

export default CompanyAbout;
