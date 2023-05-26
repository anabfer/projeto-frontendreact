import React from "react";
import {Tudo , ParteFiltros} from "./FiltrosStyle";

export default function Filtros() {
    return(
        <Tudo>
        <ParteFiltros>
            <h3>Filtros</h3>
            <label for="">Valor mínimo:</label>
            <input type="number"/>
            <label for="">Valor máximo:</label>
            <input type="number"/>
            <label for="nome"> Busca por nome:</label>
            <input type="text"/>
        </ParteFiltros>
        </Tudo>
    )
}