//Funcionalidades
import styled from "styled-components";
import React, { useState } from "react";

//Imagens
import LogoPequeno from "./img/logo-pequeno.png";
import circulo from "./img/circle-outline-svgrepo-com.svg";

//Paginas
import Perguntas from "./Perguntas";

export default function PaginaZap({ estado, perguntasJS, quantidaDeAcertos }) {

  const [icone, setIcone] = useState(Array(perguntasJS.length).fill(circulo));
  const [cor, setCor] = useState(Array(perguntasJS.length).fill(""));
  const [corTexto, setCorTexto] = useState("black");
  const [textoFinal, setTextoFinal] = useState("");
  const [completo, setCompleto] = useState(0);
  const [acertos, setAcertos] = useState(0);

  function finalDosCards(){

    if (completo+1 === perguntasJS.length) {
      if (acertos >= quantidaDeAcertos) {
        setTextoFinal("Deu bom, Parabéns");
        setCorTexto("green");
      } else {
        setTextoFinal("Deu ruim, Putz");
        setCorTexto("red");
      }
    }

  }

  return (
    <ContainerPaginaZap estado={estado}>

      <Topo>
        <img src={LogoPequeno} alt="Logo" />
        <h1>ZapRecall</h1>
      </Topo>

      <Corpo>
        {perguntasJS.map((item, i) => (
          <Perguntas
            quantidaDeAcertos={quantidaDeAcertos}
            pergunta={item.pergunta}
            resposta={item.resposta}
            index={i}
            finalDosCards={finalDosCards}
            setCompleto={setCompleto}
            completo={completo}
            setAcertos={setAcertos}
            acertos={acertos}
            icone={icone}
            setIcone={setIcone}
            cor={cor}
            setCor={setCor}
            key={i}
          />
        ))}
      </Corpo>

      <Rodape>
        <span data-identifier="flashcard-counter">
          {completo}/{perguntasJS.length} CONCLUÍDOS
        </span>

        <TextoFinal cor={corTexto}>
          {textoFinal}
        </TextoFinal>

        <RodapeResultado>
          {perguntasJS.map((item, i) => (
            <IconeEstilo src={icone[i]} alt="" cor={cor[i]} key={i} />
          ))}
        </RodapeResultado>

      </Rodape>

    </ContainerPaginaZap>
  );
}

const ContainerPaginaZap = styled.div`
  display: ${(props) => (props.estado ? "" : "none")};
  background-color: #fb6b6b;
  width: 100vw;
  height: 100%;
  position: relative;
`;
const Topo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 126px;
  background-color: #fb6b6b;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    display: inline;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    font-family: "Righteous", cursive;
    color: #ffffff;
    margin-left: 20px;
  }

  img {
    display: inline;
    width: 52px;
    height: 60px;
  }
`;
const Corpo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 126px 0px;
`;
const Rodape = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;

  width: 100%;
  height: 126px;
  background-color: #ffffff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span{
    font-family: 'Recursive', sans-serif;
    font-style: normal;
  }
`;
const RodapeResultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IconeEstilo = styled.img`
  width: 23px;
  height: 23px;
  filter: ${(props) => props.cor};
`;
const TextoFinal = styled.span`
  color: ${props => props.cor};
  font-family: 'Recursive', sans-serif;
  font-style: normal;
  font-size: 30px;
`