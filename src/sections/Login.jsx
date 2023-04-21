export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-md shadow-md">
        <img src="/assets/logo.svg" className="w-16 h-16 mx-auto mb-4" />
        <h1 className="text-[1.5rem] font-bold text-center mb-6">
          Iniciar Sesión
        </h1>
        <div>
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full px-4 py-2 mb-4 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full px-4 py-2 mb-4 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
          />
          <p className="text-sm text-gray-500 mb-4 text-center">
            ¿Olvidaste tu contraseña?
          </p>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Ingresar
          </button>
        </div>
      </div>
    </div>
  );
}
