import React, { Component } from 'react';
import styled from 'styled-components';

const QestionOptionItem = styled.div`
  width: 100%;
  padding: 16px 24px;
  font-size: 16px;
  line-height: 22px;
  color: #474d57;
  font-family: 'opensans';
  font-weight: 500;
  border-radius: 3px;
  box-shadow: 0 2px 3px 0 rgba(44, 123, 167, 0.2);
  border: 1px solid #e9e9e9;
  background-color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: #ed1b24;
  }
`;

const QuestionOptionImg = styled.img`
  display: block;
  margin: auto;
  height: 24px;
`;

const QuestionOption = (props) => {
  const { type, title, value, imgSrc, handleOptionClick, handleOptionHover } = props;

  // const handleClick = () => {
  //   handleOptionClick(value);
  // }
  //
  // const handleHover = () => {
  //   handleOptionHover(imgSrc);
  // }

  return (
    <QestionOptionItem
      // onClick={handleClick}
      // onHover={handleHover}
    >
      {
        type === 'text' ? ({title}) : (<QuestionOptionImg src={imgSrc} />)
      }
    </QestionOptionItem>
  )
}

export default QuestionOption;