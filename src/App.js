import Products from './sections/Products';
import About from './sections/About';
import Nav from './components/Nav';
import Login from './sections/Login';
import Home from './sections/Home';
import Contact from './sections/Contact';
import { lastProducts } from './utils/constants';
import { companyInfo } from './utils/constants';
import { products } from './utils/constants';

function App() {
  return (
    <div className="max-w-screen justify-items-center align-center overflow-x-hidden bg-gray-100" >
      <Nav />
      <Home lastProducts={lastProducts}/>
      <About companyInfo={companyInfo}/>
      <Login />
      <Products products={products} />
      <Contact />
    </div>
  );
}

export default App;
