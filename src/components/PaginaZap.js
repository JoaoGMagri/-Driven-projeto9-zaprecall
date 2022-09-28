import styled from 'styled-components';
import LogoPequeno from "./img/logo-pequeno.png"
import Perguntas from "./Perguntas"
import React, { useState } from "react";
import circulo from "./img/circle-outline-svgrepo-com.svg"

export default function PaginaZap({ estado, perguntasJS }) {

    const [completo, setCompleto] = useState(0);
    const [icone, setIcone] = useState(Array(perguntasJS.length).fill(circulo));
    const [cor, setCor] = useState(Array(perguntasJS.length).fill(""));

    return (

        <ContainerPaginaZap estado={estado}>
            <Topo>
                <img src={LogoPequeno} alt="Logo" />
                <h1>ZapRecall</h1>
            </Topo>

            <Corpo>
                {perguntasJS.map((item, i) =>
                    <Perguntas
                        pergunta={item.pergunta}
                        resposta={item.resposta}
                        index={i}
                        completo={setCompleto}
                        contador={completo}
                        icone={icone}
                        setIcone={setIcone}
                        cor={cor}
                        setCor={setCor}
                        key={i}
                    />)
                }
            </Corpo>

            <Rodape>
                <span>{completo}/{perguntasJS.length} CONCLUÍDOS</span>
                <RodapeResultado>
                    {perguntasJS.map((item, i) => <IconeEstilo src={icone[i]} alt='' cor={cor[i]} key={i} />)}
                </RodapeResultado>
            </Rodape>

        </ContainerPaginaZap>

    )

}

const ContainerPaginaZap = styled.div`
    display: ${props => props.estado ? "" : "none"};
    background-color: #FB6B6B;
    width: 100%;
    height: 100%;
    position: relative;
    margin-bottom: 126px;
`
const Topo = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 54px;
    
    h1{
        display: inline;
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        font-family: 'Righteous', cursive;
        color: #FFFFFF;
        margin-left: 20px;
        margin-top: 60px;
    }

    img{
        display: inline;
        width: 52px;
        height: 60px;
        margin-top: 60px;
    }
`
const Corpo = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Rodape = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 126px;
    background-color: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
`
const RodapeResultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const IconeEstilo = styled.img`
    width: 23px;
    height: 23px;
    filter: ${props => props.cor};
`