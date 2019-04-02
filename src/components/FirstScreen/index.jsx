import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import Button from '../Button';
import img1 from '../../img/1.jpg';

const FirstScreen = styled.section`
  position: relative;
  height: 714px;
`;

const LeftColumn = styled.div`
  width: 470px;
`;

const RightColumn = styled.div`
  width: 670px;
`;

const IndividualTours = styled.p`
  font-family: 'GothamPro';
  font-weight: 500;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: 0.6px;
  color: #b4b4b4;
  text-transform: uppercase;
  padding-top: 88px;
  margin-bottom: 16px;
`;

const Title = styled.h3`
  font-family: 'GothamPro';
  font-weight: 500;
  font-size: 48px;
  line-height: 57px;
  color: #474d57;
  margin-bottom: 26px;
`;

const Caption = styled.p`
  font-family: 'opensans';
  font-size: 14px;
  line-height: 21px;
  color: #474d57;
  margin-bottom: 38px;
`;

const Directions = styled.div`
  padding-top: 62px;
`;

const DirectionsTitle = styled.h4`
  font-family: 'opensans';
  font-size: 18px;
  font-weight: 900;
  line-height: 24px;
  text-transform: uppercase;
  letter-spacing: 0.1px;
  color: #474d57;
  margin-bottom: 16px;
`;

const Direction = styled.div`
  display: inline-block;
  width: 170px;
  margin-right: 30px;
`;

const ImgWrap = styled.div`
  height: 96px;
  overflow: hidden;
  margin-bottom: 12px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const DirectionCaption = styled.h4`
  font-family: 'opensans';
  font-weight: 900;
  font-size: 16px;
  line-height: 24px;
  color: #474d57;
`;

const Link = styled.a`

`;

export default () => (
  <FirstScreen>
    <LeftColumn>
      <Logo />
      <IndividualTours>индивидуальные туры от экспертов</IndividualTours>
      <Title>Подбор туров в Таиланд за 2 часа</Title>
      <Caption>С учётом всех ваших потребностей. Через<br/>проверенных Туроператоров.</Caption>
      <Button width={158} text="подобрать" />

      <Directions>
        <DirectionsTitle>другие направления</DirectionsTitle>

        <Direction>
          <ImgWrap>
            <Img src={img1} />
          </ImgWrap>
          <DirectionCaption>Доминикана</DirectionCaption>
        </Direction>
      </Directions>
    </LeftColumn>
    <RightColumn>

    </RightColumn>
  </FirstScreen>
);
