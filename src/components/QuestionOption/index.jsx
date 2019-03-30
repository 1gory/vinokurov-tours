import React, { Component } from 'react';
import styled from 'styled-components';

const QestionOptionItem = styled.div`
  width: auto;
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
  margin-bottom: 16px;
  &:hover {
    background-color: #ed1b24;
    color: #ffffff;
  }
  &:hover div {
    background-image: url(${(props) => (props.hoverContent)});
  }
`;

const QuestionOptionImg = styled.div`
  display: block;
  margin: auto;
  height: 24px;
  width: auto;
  background-image: url(${(props) => (props.content)});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const QuestionOption = (props) => {
  const { type, question, content, hoverContent, value, numberOfQuestion, handleOptionClick, handleGoNextQuestion, handleOptionHover } = props;
  const handleClick = () => {
    handleOptionClick(question, numberOfQuestion, value, content);
    handleGoNextQuestion();
  }
  //
  // const handleHover = () => {
  //   handleOptionHover(imgSrc);
  // }
  console.log(content);
  console.log(hoverContent);
  return (
    <QestionOptionItem
      onClick={handleClick}
      // onHover={handleHover}
      hoverContent={hoverContent}
    >
      {
        type === 'text' ? (content) : (<QuestionOptionImg content={content} />)
      }
    </QestionOptionItem>
  )
}

export default QuestionOption;