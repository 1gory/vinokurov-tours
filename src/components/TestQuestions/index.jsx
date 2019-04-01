import React from 'react';
import styled from 'styled-components';
import SquarePicture  from '../SquarePicture';
import TestQuestionsOptions  from '../../containers/TestQuestionsOptions';
import TestQuestionsContainer  from '../../state/TestQuestionsState';
import TestQuestionsImageContainer  from '../../state/TestQuestionsImage';
import { Subscribe } from 'unstated';

const TestQuestionsWrap = styled.div`
  padding-top: 113px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: flex-start;
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

const TestQuestionsLeftColumn = styled.div`
  display: inline-block;
  width: 470px;
`;

const TestQuestionsRightColumn = styled.div`
  display: inline-block;
  width: 670px;
  position: relative;
  right: -31px;
`;

const TestQuestions = (props) => {

  return (
    <TestQuestionsWrap>
      <TestQuestionsLeftColumn>
        <TestQuestionsTitle>Пройдите небольшой тест-опрос<br/>и мы предложим тур,<br/>подобранный специально для вас</TestQuestionsTitle>
        <Subscribe to={[TestQuestionsContainer, TestQuestionsImageContainer]}>
          {(container, imageContainer) => (
            <TestQuestionsOptions container={container} imageContainer={imageContainer} />
          )}
        </Subscribe>
      </TestQuestionsLeftColumn>
      <TestQuestionsRightColumn>
        <Subscribe to={[TestQuestionsImageContainer]}>
          {container => {
            const {
              state: {
                imgSrc,
              },
            } = container;

            return (<SquarePicture width={670} height={633} img={imgSrc}/>);
          }}
        </Subscribe>
      </TestQuestionsRightColumn>
    </TestQuestionsWrap>
  )
}

export default TestQuestions;