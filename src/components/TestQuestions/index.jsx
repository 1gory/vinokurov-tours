import React from 'react';
import styled from 'styled-components';

const TestQuestionsWrap = styled.div`
  padding-top: 113px;
`;

const TestQuestionsTitle = styled.h3`
  font-family: 'GothamPro';
  font-weight: 900;
  font-style: normal;
  font-size: 26px;
  line-height: 35.6px;
  color: #343434;
  letter-spacing: normal;
  margin-bottom: 35px;
  width: 470px;
`;

const TestQuestions = (props) => {
  return (
    <TestQuestionsWrap>
      <TestQuestionsTitle>Пройдите небольшой тест-опрос<br/>и мы предложим тур,<br/>подобранный специально для вас</TestQuestionsTitle>
      {props.children}
    </TestQuestionsWrap>
  )
}

export default TestQuestions;