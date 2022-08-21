import React from "react";
import styled from "styled-components";

export const Cabeca = styled.header`
  padding: 20px;
  background-color: white;
  color: black;
`;

export default function Header(props) {
  return (
    <>
      <Cabeca>
        <h2>{props.nome}</h2>
      </Cabeca>
    </>
  );
}
