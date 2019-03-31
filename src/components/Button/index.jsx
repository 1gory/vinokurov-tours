import React, { Component } from 'react';
import styled from 'styled-components';

const ButtonElem = styled.button`
  display: block;
  height: 48px;
  width: ${(props) => (props.width)}px;
  background-color: #ed1b24;
  text-align: center;
  border-radius: 3px;
  font-family: 'GothamPro';
  font-weight: 500;
  font-size: 14px;
  line-height: 48px;
  color: #ffffff;
  cursor: pointer;
  text-transform: uppercase;
  border: 0px;
  margin-bottom: 25px;
  &:hover {
    background-color: #c82027;
  }
`;

const Button = (props) => {
  const { text, width, handleClick } = props;

  return (
    <ButtonElem width={width} onClick={handleClick}>{text}</ButtonElem>
  )
}

export default Button;