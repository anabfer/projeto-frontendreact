import logo from './logo.svg';
import './App.css';
import Filtros from './Componentes/Filtros/Filtros';
import Home from './Componentes/Home/Home';
import Carrinho from './Componentes/Carrinho/Carrinho';

function App() {
  return (
    <div>
      <Filtros />
      <Home />
      <Carrinho />
    </div>
  );
}

export default App;
