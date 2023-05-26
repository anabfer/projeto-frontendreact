import React from "react";
import { Imagem, StyleProdutos, Botao, Descricao } from "./produtosStyle";


export default function Produtos(props) {
    return(
        <StyleProdutos>
            <Imagem>
           <img src={props.imagem} alt="src" width={254} height={278} />
            </Imagem>
            <Descricao>
            <p>{props.nome}</p>
            <p>{props.valor}</p>
            <Botao>
            <button>Adicionar ao carrinho</button>
            </Botao>
            </Descricao>
        </StyleProdutos>
    )
}