import Products from './sections/Products';
import Slider from './components/Slider';
import {slides} from './utils/constants';
import About from './sections/About';
import Nav from './components/Nav';
import Login from './sections/Login';

function App() {
  return (
    <div>
      <Nav />
      <Login />
      <Slider slides={slides} />
      <Products />
      <About/>
    </div>
  );
}

export default App;
