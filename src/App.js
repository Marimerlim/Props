//Você deve criar os seguintes components:  Header.js, Main.js, Footer.js
//Exiba o valor das props na tela: (Nome, Idade e personalidade)
//Estilização livre com styled-components
// OBS: Deve conter uma imagem

import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

import PretoBranco from "./img/BrancoePretoM.jpeg";

import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-image: url(https://i.pinimg.com/736x/a6/a9/81/a6a9813c8eade816dc27633aada1433b.jpg);
  }
`;

export default class App extends Component {
  state = {
    coelho1: PretoBranco
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <Header nome="Doação de Coelhinhos" />

        <div>
          <Main
            foto={this.state.coelho1}
            nome="Calvo"
            idade="7 ago"
            caracteristica="bagunceiro"
          />
        </div>

        <Footer />
      </>
    );
  }
}
