import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import Linia from './Linia';

const ContenedorBotones = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`;
const BotonControlador = styled.button`
  background: skyblue;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
  width: 300px;
  padding: 25px 35px;
  margin: 20px 35px;
  border-radius: 10px;
  color: #fff;
  font-size: 2rem;
  text-decoration: none;
`;

const ControladorLinia = (props) => {
  const [count, setCount] = useState(0);
  const [frases, setFrases] = useState();
  const decremento = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  const incremento = () => {
    if (count < props.obra.length - 1) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  useEffect(() => {
    
    setFrases(
      props.obra.map((frase) => {
        return (
          <Linia
            key={frase}
            info={frase}
            id={props.obra.indexOf(frase)}
            count={count}
          />
        );
      })
    );
  }, [count])

  return (
    <>
      <ContenedorBotones>
        <BotonControlador onClick={decremento}>Anterior</BotonControlador>
        <BotonControlador onClick={incremento}>Següent</BotonControlador>
      </ContenedorBotones>
      {frases}
    </>
  );
};
export default ControladorLinia;
