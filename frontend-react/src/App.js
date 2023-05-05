import logo from './logo.svg';
import './App.css';
import Filtros from './Componentes/Filtros/Filtros';
import Home from './Componentes/Home/Home';
import Carrinho from './Componentes/Carrinho/Carrinho';
import { GlobalStyle, Main } from './GlobalStyle';




function App() {
  return (
  
    <>
    <GlobalStyle/>
    <Main>
      <Filtros />
      <Home />
      <Carrinho />
    </Main>
    </>
  
  );
}

export default App;
