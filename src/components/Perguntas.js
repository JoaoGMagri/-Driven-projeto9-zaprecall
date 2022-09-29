//Funcionalidades
import styled from 'styled-components';
import React, { useState } from "react";

//Imagens
import play from "./img/play-outline-icon.svg"
import viraCard from "./img/setinha.png"
import certo from "./img/checkmark-circle-icon.svg"
import errado from "./img/close-circle-icon.svg"
import talvez from "./img/help-circle-icon.svg"

export default function Perguntas(props) {
    const {pergunta, resposta, index, finalDosCards, setCompleto, completo, setAcertos, acertos, icone, setIcone, cor, setCor } = props;
    const coresSVG = [
        "invert(31%) sepia(94%) saturate(3050%) hue-rotate(342deg) brightness(102%) contrast(108%)",
        "invert(72%) sepia(18%) saturate(5162%) hue-rotate(335deg) brightness(100%) contrast(106%)",
        "invert(59%) sepia(10%) saturate(3410%) hue-rotate(72deg) brightness(99%) contrast(88%)"
    ]
    const numeroDaPergunta = `Pergunta ${index + 1}`;
    
    const [riscoNaPalavra, setRiscoNaPalavra] = useState(false);
    const [aparenciaCatao, setAparenciaCatao] = useState(true);
    const [imagemaparece, setImagemaparece] = useState(true);
    const [botaoparece, setBotaoparece] = useState(false);
    const [texto, setTexto] = useState(numeroDaPergunta);
    const [corLetra, setCorLetra] = useState("#333333");
    const [imagem, setImagem] = useState(play);
    const [estado, setEstado] = useState("");
    const [corSVG, setCorSVG] = useState("");


    function aparecerPergunta(texto) {

        if (texto === "") {
            setTexto(pergunta);
            setImagem(viraCard);
            setEstado("pergunta");
            setAparenciaCatao(false);
        } else if (texto === "pergunta") {
            setTexto(resposta);
            setImagemaparece(false);
            setBotaoparece(true);
            setEstado("x");
        }

    }

    function respostas(parametro) {

        setTexto(numeroDaPergunta);
        setImagemaparece(true);
        setBotaoparece(false);
        setAparenciaCatao(true);
        setRiscoNaPalavra(true);
        setCompleto(completo + 1);

        if (parametro === "errei") {
            setCorLetra("#FF3030");
            setImagem(errado);
            setCorSVG(coresSVG[0]);

            cor[index] = coresSVG[0];
            icone[index] = errado;
            
        } else if (parametro === "quase") {
            setCorLetra("#FF922E");
            setImagem(talvez);
            setCorSVG(coresSVG[1]);
            
            cor[index] = coresSVG[1];
            icone[index] = talvez;
            
        } else if (parametro === "certo") {
            setAcertos(acertos + 1);
            setCorLetra("#2FBE34");
            setImagem(certo); 
            setCorSVG(coresSVG[2]);
            
            cor[index] = coresSVG[2];
            icone[index] = certo;
        }

        setCor(cor);
        setIcone(icone);
        finalDosCards();
    }

    return (

        <ContainerPergunta
            data-identifier="flashcard"
            aparencia={aparenciaCatao}
            disposicao={botaoparece}
            >

            <TextoDoCatao
                data-identifier="flashcard-index-item"
                aparencia={aparenciaCatao}
                cor={corLetra}
                risco={riscoNaPalavra}
            >
                {texto}
            </TextoDoCatao>

            <ImagemDoCartao
                data-identifier="flashcard-show-btn"
                aparencia={aparenciaCatao}
                aparece={imagemaparece}
                cor={corSVG}
            >
                <img onClick={() => aparecerPergunta(estado)} src={imagem} alt='' />
            </ImagemDoCartao>

            <ListDeBotoes
                aparece={botaoparece}
            >

                <Botao onClick={() => { respostas("errei") }} background={"#FF3030"}>Não lembrei</Botao>

                <Botao onClick={() => { respostas("quase") }} background={"#FF922E"}>Quase não lembrei</Botao>

                <Botao onClick={() => { respostas("certo") }} background={"#2FBE34"}>Zap!</Botao>

            </ListDeBotoes>

        </ContainerPergunta>

    )
}

const ContainerPergunta = styled.div`
    display: flex; 
    flex-direction: ${props => props.disposicao ? "column" : "flex"};
    justify-content: space-between;
    background-color: ${props => props.aparencia ? "#FFFFFF" : "#FFFFD4"};

    width: 300px;
    height: ${props => props.aparencia ? "65px" : "131px"};

    margin-bottom: 10px;
    position: relative;
`
const TextoDoCatao = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;

    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: ${props => props.aparencia ? "700" : "400"};
    font-size: ${props => props.aparencia ? "16px" : "18px"};
    color: ${props => props.cor};
    text-decoration:${props => props.risco ? "line-through" : ""}; 
    margin: 0px 15px;
`
const ImagemDoCartao = styled.div` 
    display: flex;
    justify-content: center;
    align-items: ${props => props.aparencia ? "center" : "flex-end"};

    img{
        filter: ${props => props.cor};
        width: ${props => props.aparencia ? "20px" : "30px"};
        height: ${props => props.aparencia ? "23px" : "20px"};
        margin-right: 20px;
        display: ${props => props.aparece ? "inline" : "none"};
        cursor: ${props => props.cor === "" ? "pointer" : ""};
    }
`
const ListDeBotoes = styled.div`
    width: 100%;
    display: ${props => props.aparece ? "flex" : "none"};
    justify-content: space-around;
    align-items: center;
`
const Botao = styled.button`
    background-color: ${props => props.background};
    width: 75px;
    height: 36px;

    margin-bottom: 10px;

    border: 0px;
    border-radius: 5px;

    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #FFFFFF;
    
    &:hover{
        cursor: pointer;
        filter: brightness(0.7);
    }
`