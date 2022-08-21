//Você deve criar os seguintes components:  Header.js, Main.js, Footer.js
//Exiba o valor das props na tela: (Nome, Idade e personalidade)
//Estilização livre com styled-components
// OBS: Deve conter uma imagem

import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

import pretoBranco from "./img/BrancoePretoM.jpeg";
import cinzaBranco from "./img/CinzaBrancoG.jpeg";
import pequenino from "./img/PretoBrancoP.jpeg";
import pretinho from "./img/preto.jpeg";
import azul from "./img/PretoAzul.jpeg";
import castanho from "./img/PretoCastanho.jpeg";

import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #D8BFD8;
  }
`;
export const Cards = styled.div`
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

export default class App extends Component {
  state = {
    coelho1: pretoBranco,
    coelho2: cinzaBranco,
    coelho3: pequenino,

    coelho4: pretinho,
    coelho5: azul,
    coelho6: castanho
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <Header nome="Venda de Láparos" />

        <Cards>
          <Main
            foto={this.state.coelho1}
            nome="Calvo"
            idade="7 ago"
            caracteristica="Bagunceiro"
          />
          <Main
            foto={this.state.coelho2}
            nome="Gordo"
            idade="7 ago"
            caracteristica="Dorminhoco"
          />
          <Main
            foto={this.state.coelho3}
            nome="Prematuro"
            idade="7 ago"
            caracteristica="Quietinho"
          />
        </Cards>
        <Cards>
          <Main
            foto={this.state.coelho4}
            nome="Pedro Álvares Cabral"
            idade="7 ago"
            caracteristica="Explorador"
          />
          <Main
            foto={this.state.coelho5}
            nome="Jered"
            idade="7 ago"
            caracteristica="Confortável"
          />
          <Main
            foto={this.state.coelho6}
            nome="João"
            idade="7 ago"
            caracteristica="Comum"
          />
        </Cards>

        <Footer />
      </>
    );
  }
}
