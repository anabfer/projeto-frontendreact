import React from "react";
import Produtos from "../Produtos/Produtos";
import { Meio, OsProdutos } from "./homeStyle";

export default function() {
    return(
        <div>
            <Meio>
            <p>Quantidade de produtos: </p>
            <p>Ordenação: <select>
                <option>Crescente</option> 
                <option>Decrescente</option>
            </select></p>
            </Meio>
            <OsProdutos>

            <Produtos />
            <Produtos />
            <Produtos />
        

            </OsProdutos>
            
        </div>
    )
}