
import './App.css';
import Home from './app/page/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
Aos.init();

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
