import React, { useState } from "react";
import Produtos from "../Produtos/Produtos";
import { Meio, OsProdutos } from "./homeStyle";


export default function Home() {

    const product = props.productlist.map((item) => {
        return item;
      });

    const [ordenacao, setOrdenacao] = useState('')
    const mudarOrdenacao = (event) => {
        setOrdenacao(event.target.value)
    }

    return(
        <div>
            <Meio>
            <p>Quantidade de produtos: 3 </p>
            <label>Ordenação:
                <select value={ordenacao} onChange={mudarOrdenacao}>
                <option> Crescente</option> 
                <option>Decrescente</option>
            </select></label>
            </Meio>
            <OsProdutos>
            {
             product.map((item)=>{
                return(
                    <Produtos key={item.id} item={item} />
                )
             }) 

            }
            </OsProdutos>
            
        </div>
    )
}