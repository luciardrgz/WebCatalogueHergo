import Products from './sections/Products';
import About from './sections/About';
import Nav from './components/Nav';
import Login from './sections/Login';
import Home from './sections/Home';
import { lastProducts } from './utils/constants';

function App() {
  return (
    <div>
      <Nav />
      <Home lastProducts={lastProducts}/>
      <Login />
      <Products />
      <About/>
    </div>
  );
}

export default App;
