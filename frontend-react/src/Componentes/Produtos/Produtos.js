import React from "react";
import { Imagem, StyleProdutos, Botao } from "./produtosStyle";

export default function Produtos() {
    return(
        <StyleProdutos>
            <Imagem>
            <p>Produto</p>
            </Imagem>
            <p>Produtos</p>
            <p>R$ 00,00</p>
            <Botao>
            <button>Adicionar ao carrinho</button>
            </Botao>
        </StyleProdutos>
    )
}