import Products from './sections/Products';
import Slider from './components/Slider';
import {slides} from './utils/constants';

function App() {
  return (
    <div>
      <Slider slides={slides} />
      <Products />
    </div>
  );
}

export default App;
