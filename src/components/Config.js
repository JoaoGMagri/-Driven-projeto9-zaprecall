//Funcionalidades
import styled from "styled-components";
import { useState } from "react";

//Imagens
import logoGrande from "./img/logo.png";
import seta from "./img/Vector.png"

//Paginas
import PaginaZap from './PaginaZap';

//Objetos
import perguntasJS from './objetos/PeguntasJS';

export default function Config() {

    const [quantidaDeAcertos, setQuantidaDeAcertos] = useState(0);
    const [habilitaBotao, serHabilitaBotao] = useState(true);
    const [deck, setDeck] = useState(perguntasJS[0]);
    const [some, setSome] = useState(false);
    const [cor, setCor] = useState(false);
    const [tela, setTela] = useState(0);

    function trocaDeTelas(estado) {
        
        switch (estado) {
            case 0: setTela(1); break;
            case 1: setTela(2); break;
        
            default: break;
        }

    }

    function escolhaDeck(index) {
        setCor(true);

        switch (index) {
            case "1": setDeck(perguntasJS[0]); break;
            case "2": setDeck(perguntasJS[1]); break;

            default:break;
        }

    }

    function ativaBotao(item) {
        const itemNumero = Number(item);

        if(itemNumero >= 1 && itemNumero <= (deck.length)){
            serHabilitaBotao(false);
            setQuantidaDeAcertos(item);
        } else{
            serHabilitaBotao(true);
            setQuantidaDeAcertos(0);
        }
    }

    return (

        <>
            <ContainerConfig estado={some}>
                <img src={logoGrande} alt="" />
                <h1>ZapRecall</h1>

                <SeletorDeDeck seta={seta} cor={cor} aparece={tela}>
                    <select onChange={(item) => escolhaDeck(item.target.value)}>
                        <TesteOption value={0}>Escolha seu deck</TesteOption>
                        <option value={1}>Deck React</option>
                        <option value={2}>Deck Percy Jackson</option>
                    </select>
                </SeletorDeDeck>

                <Aviso aparece={tela}>Escolha um número entre 1 e {deck.length}</Aviso>
                <SeletorDoImput aparece={tela} type="text" placeholder="Digite sua meta de zaps..." onChange={(item) => ativaBotao(item.target.value)}/>


                <TrocaTelas onClick={() => trocaDeTelas(tela)} aparece={tela}>Iniciar Recall!</TrocaTelas>
                <ComecaCards onClick={() => setSome(true)} disabled={habilitaBotao} habilita={habilitaBotao} aparece={tela}>Iniciar Recall!</ComecaCards>
            </ContainerConfig>

            <PaginaZap estado={some} perguntasJS={deck} quantidaDeAcertos={quantidaDeAcertos}/>
        </>

    )

}

const ContainerConfig = styled.div`
    background-color: #fb6b6b;
    width: 100vw;
    height: 100vh;
    display: ${props => props.estado ? "none" : "flex"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--preto);

    img {
        width: 136px;
        height: 161px;
    }

    h1 {
        margin: 30px 0px;
        font-family: "Righteous", cursive;
        color: #ffffff;
        font-size: 50px;
    }
`
const SeletorDeDeck = styled.div`
    display: ${props => props.aparece === 1 ? "" : "none"};

    select{
        width: 246px;
        height: 40px;
        border-radius: 0;
        padding-left: 10px;

        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;


        background-image: url(${props => props.seta});
        background-repeat: no-repeat;
        background-position: 220px center;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: ${props => props.cor ? "#000000" : "#ADADAD"};

        border: 0px;
        border-radius: 5px;
    }
`
const TesteOption = styled.option`
    display:none;
`
const Aviso = styled.span`
    display: ${props => props.aparece === 2 ? "" : "none"};
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    color: white;
    margin-bottom: 5px;
`
const SeletorDoImput = styled.input`
    display: ${props => props.aparece === 2 ? "" : "none"};
    width: 246px;
    height: 40px;
`
const TrocaTelas = styled.button`
    display: ${props => props.aparece !== 2 ? "" : "none"};

    margin-top: 10px;    
    width: 246px;
    height: 54px;
    background-color: #ffffff;

    color: #d70900;
    border: 1px solid #d70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    &:hover {
    cursor: pointer;
    background-color: #cea2a0;
    }
`
const ComecaCards = styled.button`
    display: ${props => props.aparece === 2 ? "" : "none"};
    margin-top: 10px;    
    width: 246px;
    height: 54px;
    background-color: ${props => props.habilita ? "#cea2a0" : "#ffffff"};

    color: #d70900;
    border: 1px solid #d70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    
    &:hover {
    cursor: ${props => props.habilita ? "" : "pointer"};
    background-color: #cea2a0;
    }
`