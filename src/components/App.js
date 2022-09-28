import styled from 'styled-components';
import GlobalStyle from "./GlobalStyle/GlobalStyle"

import logoGrande from "./img/logo.png"
import PaginaZap from './PaginaZap';
import React, { useState } from "react";
import perguntasJS from './objetos/PeguntasJS';

export default function App() {
    const [display, setDisplay] = useState(false)

    function estado() {
        setDisplay(true);
    }

    return (
        <>

            <Container habilitado={display} >
                <GlobalStyle />

                <img src={logoGrande} alt="" />
                <h1>ZapRecall</h1>
                <button onClick={estado}>Iniciar Recall!</button>
            </Container>

            <PaginaZap estado={display} perguntasJS={perguntasJS}/>
            
        </>

    )

}

const Container = styled.div`
      
    background-color: #FB6B6B;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--preto);
    
    img{
        width: 136px;
        height: 161px;
        display:${props => props.habilitado ? "none" : ""};
    }
    
    h1{
        margin: 30px 0px;
        font-family: 'Righteous', cursive;
        color: #FFFFFF;
        font-size: 50px;
        display:${props => props.habilitado ? "none" : ""};
    }
    
    button{
        width: 246px;
        height: 54px;
        background-color: #FFFFFF;
        
        color:#D70900;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
    }
    
    display:${props => props.habilitado ? "none" : ""};
    
    
`