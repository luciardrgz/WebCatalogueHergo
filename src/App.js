import Products from './sections/Products';
import Slider from './components/Slider';
import {slides} from './utils/constants';
import About from './sections/About';

function App() {
  return (
    <div>
      <Slider slides={slides} />
      <Products />
      <About/>
    </div>
  );
}

export default App;
