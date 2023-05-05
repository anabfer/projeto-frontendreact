import React from "react";
import Produtos from "../Produtos/Produtos";
import { Meio, OsProdutos } from "./homeStyle";
import roupa1 from "./roupa1.png";
import roupa2 from "./roupa2.png";
import roupa3 from "./roupa3.png";



export default function() {
    return(
        <div>
            <Meio>
            <p>Quantidade de produtos: 3 </p>
            <p>Ordenação: <select>
                <option>Crescente</option> 
                <option>Decrescente</option>
            </select></p>
            </Meio>
            <OsProdutos>

            <Produtos nome="Produto 1" valor="R$ 100,00" imagem={roupa1}/>
            <Produtos nome="Produto 2" valor="R$ 200,00" imagem={roupa2}/>
            <Produtos nome="Produto 3" valor="R$ 300,00" imagem={roupa3}/>

            </OsProdutos>
            
        </div>
    )
}