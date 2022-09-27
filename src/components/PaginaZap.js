import styled from 'styled-components';
import LogoPequeno from "./img/logo-pequeno.png"
import Perguntas from "./Perguntas"

export default function PaginaZap({ estado, perguntasJS }) {
    console.log(estado)
    return (

        <ContainerPaginaZap estado={estado}>
            <Topo>
                <img src={LogoPequeno} alt="Logo" />
                <h1>ZapRecall</h1>
            </Topo>

            <Corpo>
                {perguntasJS.map((item, i) => <Perguntas pergunta={item.pergunta} resposta={item.resposta} index={i} key={i} />)}
            </Corpo>

        </ContainerPaginaZap>

    )

}

const ContainerPaginaZap = styled.div`
    display: ${props => props.estado ? "" : "none"};
    background-color: #FB6B6B;
    width: 100%;
    height: 100%;
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