import Login from './components/login';
import Footer from './components/Footer';
import Navegacion from './components/MenuNavegacionExterna';
import './styles/App.css';
//import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navegacion/>
      <Login/>
      <Footer/>
    </div>
  );
}

export default App;
