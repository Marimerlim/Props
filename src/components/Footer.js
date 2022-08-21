import React, { Component } from "react";
import styled from "styled-components";
import whatsapp from "./icon/whatsApp.png";

export const Rodape = styled.footer`
  background-color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    width: 50px;
    margin-left: 10%;
  }
  div{
    display: flex;
    width: 30%;
    align-items: center;
  }
  @media screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
    div{
      width: 70%;
      text-align: center;
    }
`;

export default class Footer extends Component {
  state = {
    icone: whatsapp
  };

  render() {
    return (
      <Rodape>
        <h2>Entre em contato</h2>
        <div>
          <img src={this.state.icone} alt="whatsapp" />
          <p>(21) 9700-1641</p>
        </div>
      </Rodape>
    );
  }
}
