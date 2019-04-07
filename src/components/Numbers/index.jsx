import React from 'react';
import styled from 'styled-components';
import SquarePicture from '../SquarePicture';
import NumberItem from '../NumberItem';
import { dataBig, dataSmall } from './data';
import numbersPicture from '../../img/numbers.jpg';

const Numbers = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: stretch;
`;

const LeftColumn = styled.div`
  flex: 1 0 auto;
  max-width: 600px;
  @media screen and (max-width: 992px) {
    max-width: 100%;
  }
`;

const RightColumn = styled.div`
  flex: 0 1 570px;
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

const Title = styled.h2`
  font-family: 'GothamPro';
  font-weight: 500;
  font-size: 36px;
  line-height: 45.5px;
  color: #474d57;
  margin-bottom: 48px;
  @media screen and (max-width: 768px) {
    font-size: 28px;
    line-height: 35.5px;
    margin-bottom: 52px;
  }
`;

const Items = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: stretch;
  margin-bottom: 73px;
  @media screen and (max-width: 576px) {
    & > div:nth-child(2n) {
      margin-right: 0px;
    }
    margin-bottom: 0px;
  }
`;

export default () => {
  let numbersBigTemplate = [];
  let numbersSmallTemplate = [];

  numbersBigTemplate = dataBig.map(curItem => (
    <NumberItem
      key={curItem.caption}
      big
      number={curItem.number}
      title={curItem.title}
      caption={curItem.caption}
    />
  ));

  numbersSmallTemplate = dataSmall.map(curItem => (
    <NumberItem
      key={curItem.caption}
      number={curItem.number}
      subnumber={curItem.subnumber}
      caption={curItem.caption}
    />
  ));

  return (
    <Numbers>
      <LeftColumn>
        <Title>
          Как мы создаем
          <br />
          идеальный отдых
        </Title>
        <Items>
          {numbersBigTemplate}
        </Items>
        <Title>
          Наши результаты
          <br />
          в цифрах
        </Title>
        <Items>
          {numbersSmallTemplate}
        </Items>
      </LeftColumn>
      <RightColumn>
        <SquarePicture width="100%" height="1170px" img={numbersPicture} />
      </RightColumn>
    </Numbers>
  );
};
