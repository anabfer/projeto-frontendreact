
  import './App.css';
  import Filtros from './Components/Filtros/Filtros';
  import Home from './Components/Home/Home';
  import Carrinho from './Components/Carrinho/Carrinho';
  import { GlobalStyle, Main } from './GlobalStyle';
  import { useState } from 'react';
  
  function App() {

    const [cart, setCart] = useState("");
    const [amount, setamount] = useState("");
    const [minfilter, setMinFilter] = useState("");
    const [maxfilter, setMaxFilter] = useState("");
    const [searchfilter, setSearchFilter] = useState("");
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
  