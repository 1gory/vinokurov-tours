import React from 'react';
import styled from 'styled-components';
import SquarePicture from '../SquarePicture';
import about1 from '../../img/about1.jpg';
import about2 from '../../img/about2.jpg';
import aboutPortret from '../../img/about-portret.png';

const About = styled.section`
  padding-top: 22px;
  padding-bottom: 96px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: stretch;
`;

const LeftColumn = styled.div`
  flex: 0 1 570px;
  margin-right: 130px;
  @media screen and (max-width: 992px) {
    flex: 1 1 100%;
    margin-right: 0px;
  }
`;

const RightColumn = styled.div`
  flex: 0 1 470px;
  @media screen and (max-width: 992px) {
    flex: 1 1 100%;
  }
`;

const Title = styled.h3`
  font-family: 'GothamPro';
  font-weight: 500;
  font-size: 36px;
  line-height: 45px;
  color: #474d57;
  margin-bottom: 26px;
`;

const Text = styled.p`
  font-family: 'opensans';
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #474d57;
  margin-bottom: 21px;
`;

const Sertificate = styled.img`
  display: inline-block;
  width: 144px;
  height: 203.2px;
  margin-right: 40px;
  vertical-align: top;
`;

const Dop = styled.div`
  display: inline-block;
  width: 202px;
  height: 203.2px;
  border: 1px solid #e9e9e9;
  background-color: #ffffff;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  padding: 16px;
  vertical-align: top;
  @media screen and (max-width: 1366px) {
    width: 328px;
  }
`;

const DopNumber = styled.p`
  font-family: 'GothamPro';
  font-weight: 900;
  font-size: 48px;
  line-height: 48px;
  padding-top: 44.5px;
  color: #ed1b24;
  margin-bottom: 18.6px;
`;

const DopText = styled.p`
  font-family: 'opensans';
  font-weight: 900;
  font-size: 14px;
  line-height: 22px;
  color: #ed1b24;
`;

const AboutImgWrap = styled.div`
  position: relative;
  width: 470px;
  height: 566.2px;
`;

const Img = styled.img`
  position: absolute;
  width: 470px;
  height: 566.2px;
  left: 0px;
  top: 0px;
  right: 0px;
  z-index: 10;
`;

const ImgCircle = styled.div`
  width: 470px;
  height: 470px;
  position: absolute;
  border-radius: 50%;
  background-color: #ED1B24;
  left: 0px;
  right: 0px;
  top: 96px;
  z-index: 5;
`;

export default () => (
  <About>
    <LeftColumn>
      <Title>О агенстве</Title>
      <Text>
        {`Я сооснователь туристического агентства, в 2010 году вместе с женой я открыл свой первый офис по франшизе.
        Работал качественно, с душой, если ко мне обращались, то я старался найти именно то что подходило человеку.
        Информацию обо мне передавали из рук в руки. После мне перестали нравится принципы работы моего бывшего партнёра,
        и его бухгалтерия, поэтому я отделился и судьба подарила мне нового партнёра и друга с которой мы уже вот 3 года идём
        вместе и строим Качественную компанию.`}
      </Text>
      <Text>
        {`Недавно мы стали частью такой крупной франшизы туроператора "САН МАР",
        что позволило нам заключить более выгодные договора с туроператорами и предоставлять людям туры на лучших условиях.
        Я никогда не прятался за брэнд, за свои услуги отвечаю лично, каждый знает где меня искать и что я отвечаю за свои дела.
        Я больше, чем просто менеджер. Благодаря этому люди ко мне тянутся и за эти 8 лет у меня более 300 постоянных клиентов,
        которые меня советуют всем своим знакомым и друзьям.`}
      </Text>
      <Sertificate src={about1}/>
      <Sertificate src={about2}/>
      <Dop>
        <DopNumber>+6</DopNumber>
        <DopText>Дополнительных материала</DopText>
      </Dop>
    </LeftColumn>
    <RightColumn>
      <AboutImgWrap>
        <Img src={aboutPortret}/>
        <ImgCircle />
      </AboutImgWrap>
    </RightColumn>
  </About>
);
