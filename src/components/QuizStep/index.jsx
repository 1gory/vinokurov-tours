import React from 'react';
import styled from 'styled-components';

const StepQuestion = styled.h3`
  font-family: 'GothamPro';
  font-weight: 900;
  color: #474d57;
  font-size: 28px;
  line-height: 38.5px;
  margin-top: 0px;
  margin-bottom: 40px;
`;

const Wrap = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  margin-bottom: 40px;
`;

const Count = styled.p`
  font-family: 'opensans';
  font-size: 16px;
  line-height: 22px;
  color: #aeaeae;
  letter-spacing: normal;
  margin-bottom: 8px;
`;

export default ({
  number,
  questionsLength,
  question,
  optionsTemplate,
  visible,
}) => (
  /* Если вопрос последний, отображаем форму завершения опроса */
  <Wrap visible={visible}>
    <Count>
      {
        number === questionsLength ? ('Завершение опроса') : (`Вопрос ${number}/${questionsLength - 1}`)
      }
    </Count>
    <StepQuestion>{question}</StepQuestion>
    {optionsTemplate}
  </Wrap>
);
