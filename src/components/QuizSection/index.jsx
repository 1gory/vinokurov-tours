import React from 'react';
import styled from 'styled-components';
import { Subscribe } from 'unstated';
import { Element } from 'react-scroll';
import SectionWrap from '../SectionWrap';
import SquarePicture from '../SquarePicture';
import QuizOptions from '../../containers/QuizOptions';
import StepsContainer from '../../state/StepsState';
import StepsImageContainer from '../../state/StepsImageState';

const StepsSection = styled.div`
  padding-top: 113px;
  padding-bottom: 44px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: flex-start;
  @media screen and (max-width: 1366px) {
    display: block;
  }
  @media screen and (max-width: 768px) {
    padding-top: 26px;
  }
`;

const Title = styled.h3`
  font-family: 'GothamPro';
  font-weight: 900;
  font-style: normal;
  font-size: 26px;
  line-height: 35.6px;
  color: #343434;
  letter-spacing: normal;
  margin-bottom: 35px;
  width: 470px;
  @media screen and (max-width: 768px) {
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 25px;
  }
`;

const LeftColumn = styled.div`
  display: inline-block;
  width: 470px;
  @media screen and (max-width: 1366px) {
    display: block;
    width: auto;
  }
`;

const RightColumn = styled.div`
  display: inline-block;
  width: 670px;
  position: relative;
  right: -31px;
  @media screen and (max-width: 1366px) {
    display: block;
    position: static;
    right: 0px;
    width: auto;
  }
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export default () => (
  <SectionWrap>
    <Element name="QuizSection" />
    <StepsSection>
      <LeftColumn>
        <Title>
          Пройдите небольшой тест-опрос
          <br />
          и мы предложим тур,
          <br />
          подобранный специально для вас
        </Title>
        <Subscribe to={[StepsContainer]}>
          {container => (
            <QuizOptions container={container} />
          )}
        </Subscribe>
      </LeftColumn>
      <RightColumn>
        <Subscribe to={[StepsImageContainer]}>
          {(container) => {
            const {
              state: {
                imgSrc,
              },
            } = container;

            return (<SquarePicture width="670px" height="633px" img={imgSrc} />);
          }}
        </Subscribe>
      </RightColumn>
    </StepsSection>
  </SectionWrap>
);
