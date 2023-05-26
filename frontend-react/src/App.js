
  import './App.css';
  import Filtros from './Components/Filtros/Filtros';
  import Home from './Components/Home/Home';
  import Carrinho from './Components/Carrinho/Carrinho';
  import { GlobalStyle, Main } from './GlobalStyle';
  import { useState } from 'react';
  import { productlist } from './Assets/productList';
  
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
        <Filtros 
        min={minfilter}
        setMin={setMinFilter}
        max={maxfilter}
        setMax={setMaxFilter}
        search={searchfilter}
        setSearch={setSearchFilter}/>
        
        <Home
        productlist={productlist}
        amount={amount}
        setamount={setamount}
        cart={cart}
        setCart={setCart} />
        
        <Carrinho 
        amount={amount}
        setamount={setamount}
        cart={cart}
        setCart={setCart}/>
      </Main>
      </>
    
    );
  }
  
  export default App;
  