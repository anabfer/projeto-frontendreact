import React from "react";
import { Imagem, StyleProdutos, Botao, Descricao } from "./produtosStyle";


export default function Produtos(props) {
    console.log(props.item.nome)
    return(
        <StyleProdutos>
            <Imagem>
           <img src={props.item.imagem} alt="src" width={254} height={278} />
            </Imagem>
            <Descricao>
            <p>{props.item.nome}</p>
            <p>{props.item.valor}</p>
            <Botao>
            <button>Adicionar ao carrinho</button>
            </Botao>
            </Descricao>
        </StyleProdutos>
    )
}