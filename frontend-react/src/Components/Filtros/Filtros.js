import React from "react";
import {Tudo , ParteFiltros} from "./filtrosStyle";

export default function Filtros(props) {
    
    const onChangeMin=(event) =>{
        props.setMin(event.target.value)
        
    }

    const onChangeMax=(event) =>{
        props.setMax(event.target.value)
    }
    
    const onChangeSearch=(event) =>{
        props.setSearch(event.target.value)
    }

    

    return(
        <Tudo>
        <ParteFiltros>
            <h3>Filtros</h3>
            <label for="">Valor mínimo:</label>
            <input type="number" value={props.min} onChange={onChangeMin}/>
            <label for="">Valor máximo:</label>
            <input type="number" value={props.max} onChange={onChangeMax}/>
            <label for="nome"> Busca por nome:</label>
            <input type="text" value={props.search} onChange={onChangeSearch}/>
        </ParteFiltros>
        </Tudo>
    )
}