import React, { Component } from "react";

import styled from "styled-components";

export const Cartao = styled.div`
  background-color: #f0ffff;
  width: 230px;
  /* height: 330px; */
  align-items: center;
  text-align: center;
  margin: 20px;
  border-radius: 20px;

  img {
    width: 230px;
    height: 180px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  p {
    margin: 10px;
  }

  button {
    padding: 10px;
    margin: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
    background-color: #d8bfd8;
  }
  button:hover {
    transform: scale(1.1);
  }
`;

export default class Main extends Component {
  render() {
    return (
      <Cartao>
        <img src={this.props.foto} alt="coelho" />

        <h3>{this.props.nome}</h3>
        <p>{this.props.idade}</p>
        <p>{this.props.caracteristica}</p>

        {/* <button>Saber mais</button>
        <button>Adotar</button> */}
      </Cartao>
    );
  }
}
