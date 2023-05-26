import React from "react";
import Itens from "../Itens/Itens";
import { Final, ParteCarrinho } from "./carrinhoStyle";

export default function Carrinho() {

    return(
        <Final>
        <ParteCarrinho>

            <h3>Carrinho</h3>
            {/* <Itens /> */}

            <p>x0 Nome do Produto <button>Remover</button></p>
            <p>Valor Total: 0</p>
            </ParteCarrinho>
        </Final>
    )
}