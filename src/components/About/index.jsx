import React, { Component } from 'react';
import styled from 'styled-components';
import Lightbox from 'react-images';
import SectionWrap from '../SectionWrap';
import certThumb1 from '../../img/certificates/thumbs/1.jpg';
import certThumb2 from '../../img/certificates/thumbs/2.jpg';
import cert1 from '../../img/certificates/1.jpg';
import cert2 from '../../img/certificates/2.jpg';
import cert3 from '../../img/certificates/3.jpg';
import cert4 from '../../img/certificates/4.jpg';
import cert5 from '../../img/certificates/5.jpg';
import cert6 from '../../img/certificates/6.jpg';
import aboutPortret from '../../img/about-portret.png';

const About = styled.section`
  padding-top: 50px;
  padding-bottom: 84px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: stretch;
  @media screen and (max-width: 992px) {
    display: block;
    padding-top: 30px;
  }
`;

const LeftColumn = styled.div`
  flex: 0 1 570px;
  margin-right: 30px;
  @media screen and (max-width: 992px) {
    flex: none;
    margin-right: 0px;
    margin-bottom: 48px;
  }
  @media screen and (max-width: 450px) {
    margin-right: 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: stretch;
    align-items: stretch;
  }
`;

const RightColumn = styled.div`
  flex: 0 1 470px;
  @media screen and (max-width: 992px) {
    flex: none;
    text-align: center;
  }
`;

const Title = styled.h3`
  font-family: 'GothamPro';
  font-weight: 500;
  font-size: 36px;
  line-height: 45px;
  color: #474d57;
  margin-bottom: 26px;
  @media screen and (max-width: 576px) {
    font-size: 26px;
    line-height: 36px;
    margin-bottom: 38px;
  }
`;

const Text = styled.p`
  font-family: 'opensans';
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #474d57;
  margin-bottom: 21px;
  @media screen and (max-width: 450px) {
    margin-bottom: 32.3px;
  }
`;

const Sertificate = styled.img`
  display: inline-block;
  width: 144px;
  height: 203.2px;
  margin-right: 40px;
  vertical-align: top;
  margin-bottom: 32px;
  cursor: pointer;
  @media screen and (max-width: 450px) {
    margin-right: 0px;
    width: 150.5px;
    height: 212.6px;
  }
`;

const Dop = styled.div`
  display: inline-block;
  width: 163px;
  height: 203.2px;
  border: 1px solid #e9e9e9;
  background-color: #ffffff;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  padding: 16px;
  vertical-align: top;
  cursor: pointer;
  @media screen and (max-width: 1366px) {
    width: 328px;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
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
  display: inline-block;
  position: relative;
  width: 470px;
  height: 566.2px;
  margin-bottom: 24px;
  @media screen and (max-width: 576px) {
    width: 325px;
    height: 396.1px;
    margin-bottom: 16.2px;
  }
`;

const Img = styled.img`
  position: absolute;
  width: 470px;
  height: 566.2px;
  left: 0px;
  top: 0px;
  right: 0px;
  z-index: 10;
  @media screen and (max-width: 576px) {
    width: 325.5px;
    height: 396.1px;
  }
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
  @media screen and (max-width: 576px) {
    width: 325.5px;
    height: 325.5px;
    top: 70px;
  }
`;

const Name = styled.p`
  display: block;
  font-family: 'GothamPro';
  font-weight: 500;
  font-size: 18px;
  line-height: 19.4px;
  text-align: center;
  color: #474d57;
  margin-bottom: 5px;
`;

const Founder = styled.p`
  display: block;
  font-family: 'opensans';
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #474d57;
`;

const images = [
  { src: cert1 },
  { src: cert2 },
  { src: cert3 },
  { src: cert4 },
  { src: cert5 },
  { src: cert6 },
];

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: null,
      lightboxIsOpen: false,
    };
  }

  gotoPrevious = () => {
    this.setState(prevState => ({
      currentImage: prevState.currentImage - 1,
    }));
  };

  gotoNext = () => {
    this.setState(prevState => ({
      currentImage: prevState.currentImage + 1,
    }));
  };

  openLightbox = (index) => {
    this.setState({
      lightboxIsOpen: true,
      currentImage: index,
    });
  };

  closeLightbox = () => {
    this.setState({
      lightboxIsOpen: false,
      currentImage: null,
    });
  };

  render() {
    const { currentImage, lightboxIsOpen } = this.state;
    return (
      <SectionWrap>
        <About>
          <LeftColumn>
            <Title>Об агенстве</Title>
            <Text>
              {'Меня зовут Дмитрий и я являюсь сооснователем туристического агентства✈'}
            </Text>

            <Text>
              {'В 2010 году мы вместе с женой открыли свой первый офис по франшизе.'}
            </Text>
            <Text>
              {`Работали качественно, с душой. Когда к нам приходили за помощью в подборе тура,
                мы старались подобрать такой вариант, который идеально подходил бы человеку по
                всем его критериям.`}
            </Text>
            <Text>
              {`Прошло время и спустя годы к нам все чаще начали обращаться люди. Мы посещали
                огромное количество рекламных туров + личные поездки, а так же множество
                положительных отзывов о путешествиях, оставленных нашими любимыми
                клиентами. Все эти факторы позволили нам накопить внушительную базу отелей по
                всему миру, с хорошим обслуживанием и питанием, что не мало важно - по
                адекватным ценам, а самое главное – все это проверено нами лично и нашими
                путешественниками.`}
            </Text>

            <Text>
              {`Нашей сильной стороной всегда был детский отдых, так как у меня у самого трое
                замечательных деток.`}
            </Text>
            <Text>
              {`Я проработал множество направлений и курортов в поисках хороших гостиниц,
                песчаных пляжей, пологих входов в море, детской анимации, аквапарков и конечно
                же детского питания. В моей практике было все! Конечно же я с радостью поделюсь с
                вами своими знаниями и опытом в этой сфере.`}
            </Text>
            <Text>
              {`Мы больше, чем просто менеджеры по туризму, мы скорее настоящие гиды для
                наших туристов, всегда готовые подсказать, куда лучше поехать, как и зачем.
                Благодаря этому люди все чаще сотрудничают с нами и за эти 9 лет у нас более 300
                постоянных клиентов, которые советуют нас всем своим знакомым и друзьям.
                Поэтому если вы любите путешествовать хорошо и качественно, присоединяетесь к
                нам!✈`}
            </Text>
            <Sertificate src={certThumb1} onClick={() => (this.openLightbox(0))} />
            <Sertificate src={certThumb2} onClick={() => (this.openLightbox(1))} />
            <Dop onClick={() => (this.openLightbox(2))}>
              <DopNumber>+4</DopNumber>
              <DopText>Дополнительных фото</DopText>
            </Dop>
          </LeftColumn>
          <RightColumn>
            <AboutImgWrap>
              <Img src={aboutPortret} />
              <ImgCircle />
            </AboutImgWrap>
            <Name>Дмитрий Винокуров</Name>
            <Founder>Основатель агенства</Founder>
          </RightColumn>
        </About>
        <Lightbox
          images={images}
          isOpen={lightboxIsOpen}
          currentImage={currentImage}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          onClose={this.closeLightbox}
        />
      </SectionWrap>
    );
  }
}
