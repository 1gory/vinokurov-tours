import React, { Component } from 'react';
import styled from 'styled-components';

const InputWrap = styled.div`
  position: relative;
  width: 370px;
  height: 54px;
  padding-left: 54px;
`;

const InputDecoration = styled.div`
  position: absolute;
  width: 54px;
  height: 54px;
  background-color: #ed1b24;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: stretch;
  align-items: center;
`;

const InputElem = styled.input`
  display: block;
  height: 100%;
  width: 100%;
  border: 0px;
  border-top: 1px solid #e9e9e9;
  border-right: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
`;

class Input extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { icon, hasIcon, type, placeholder, inputHandler } = this.props;

    return (
      <InputWrap>
        <InputDecoration>
          {icon}
        </InputDecoration>
        <InputElem />
      </InputWrap>
    )
  }
}

export default Input;