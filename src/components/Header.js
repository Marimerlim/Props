import React, { Component } from "react";
import styled from "styled-components";
import coelho from "./icon/iconCoelho.png";

export const Cabeca = styled.header`
  padding: 5px;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80px;
  }
`;

export default class Header extends Component {
  state = {
    icon: coelho
  };
  render() {
    return (
      <Cabeca>
        <img src={this.state.icon} alt="ícone coelho" />
        <h2>{this.props.nome}</h2>
      </Cabeca>
    );
  }
}
