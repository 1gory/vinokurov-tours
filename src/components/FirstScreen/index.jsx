import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import Button from '../Button';
import SectionWrap from '../SectionWrap';
import SquarePicture from '../SquarePicture';
import mainImage from '../../img/main.jpg';
import direction1 from '../../img/d1.jpg';
import direction2 from '../../img/d2.jpg';
import linkIcon from '../../img/icons/link.svg';

const FirstScreen = styled.section`
  position: relative;
  height: 714px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: stretch;
  @media screen and (max-width: 992px) {
    justify-content: flex-start;
  }
  @media screen and (max-width: 576px) {
    height: auto;
    padding-bottom: 20px;
  }
`;

const LeftColumn = styled.div`
  flex: 0 0 470px;
  padding-top: 17px;
  @media screen and (max-width: 576px) {
    display: block;
    width: auto;
    flex: 0 1 auto;
    padding-top: 13px;
  }
`;

const RightColumn = styled.div`
  flex: 0 1 670px;
  @media screen and (max-width: 992px) {
    display: none;
  }
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
  @media screen and (max-width: 576px) {
    font-size: 32px;
    line-height: 44.16px;
  }
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
  @media screen and (max-width: 576px) {
    padding-top: 30px;
  }
`;

const DirectionsTitle = styled.h4`
  font-family: 'opensans';
  font-size: 18px;
  font-weight: 900;
  line-height: 27px;
  text-transform: uppercase;
  letter-spacing: 0.1px;
  color: #474d57;
  margin-bottom: 16px;
`;

const Direction = styled.div`
  display: inline-block;
  width: 45%;
  max-width: 170px;
  margin-right: 30px;
  @media screen and (max-width: 576px) {
    margin-right: 10px;
  }
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
  line-height: 20px;
  color: #474d57;
  margin-bottom: 13px;
`;

const Link = styled.a`
  display: inline-block;
  font-family: 'opensans';
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  color: #ed1b24;
  width: 90px;
  background-image: url(${linkIcon});
  background-repeat: no-repeat;
  background-position: 75px 0px;
  background-size: 16px 16px;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default ({ scrollToMyRef }) => (
  <SectionWrap>
    <FirstScreen>
      <LeftColumn>
        <Logo />
        <IndividualTours>индивидуальные туры от экспертов</IndividualTours>
        <Title>Подбор туров в Таиланд за 2 часа</Title>
        <Caption>
          С учётом всех ваших потребностей. Через
          <br />
          проверенных Туроператоров.
        </Caption>
        <Button
          width={158}
          text="подобрать"
          handleClick={scrollToMyRef}
        />
        <Directions>
          <DirectionsTitle>другие направления</DirectionsTitle>
          <Direction>
            <ImgWrap>
              <Img src={direction1} />
            </ImgWrap>
            <DirectionCaption>Доминикана</DirectionCaption>
            <Link href="/">Подробнее</Link>
          </Direction>
          <Direction>
            <ImgWrap>
              <Img src={direction2} />
            </ImgWrap>
            <DirectionCaption>Турция</DirectionCaption>
            <Link href="/">Подробнее</Link>
          </Direction>
        </Directions>
      </LeftColumn>
      <RightColumn>
        <SquarePicture width="100%" height="700px" img={mainImage} />
      </RightColumn>
    </FirstScreen>
  </SectionWrap>
);
