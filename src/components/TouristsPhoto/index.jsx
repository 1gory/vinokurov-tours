import React, { Component } from 'react';
import styled from 'styled-components';
import Lightbox from 'react-images';
import PageWrapper from '../SectionWrap';
import images from './images';
import sp1 from '../../img/tourists/1.jpg';
import sp2 from '../../img/tourists/2.jpg';
import sp3 from '../../img/tourists/3.jpg';
import sp4 from '../../img/tourists/4.jpg';
import sp5 from '../../img/tourists/5.jpg';
import sp6 from '../../img/tourists/6.jpg';

const Wrap = styled.div`
  position: relative;
  padding-top: 62px;
  height: 962px;
  overflow: hidden;
  @media screen and (max-width: 1366px) {
    padding-top: 31px;
    height: 879px;
  }
`;

const Column = styled.div`
  width: 470px;
  @media screen and (max-width: 576px) {
    width: auto;
  }
`;

const Title = styled.h2`
  font-family: 'GothamPro';
  font-weight: 500;
  font-size: 36px;
  line-height: 44.5px;
  color: #474d57;
  margin-bottom: 32px;
  max-width: 600px;
  @media screen and (max-width: 576px) {
    font-family: 'opensans';
    font-weight: 100;
    font-size: 28px;
    line-height: 35.6px;
    font-weight: 500;
    margin-bottom: 16px;
    max-width: none;
  }
`;

const Caption = styled.p`
  font-family: 'opensans';
  width: 370px;
  font-size: 16px;
  line-height: 24px;
  color: #474d57;
  @media screen and (max-width: 576px) {
    width: auto;
  }
`;

const SquarePictureContainer = styled.div`
  position: absolute;
  width: 270px;
  height: 270px;
  @media screen and (max-width: 1366px) {
    width: 156.2px;
    height: 156.2px;
  }
`;

const SPC1 = styled(SquarePictureContainer)`
  top: 457px;
  left: 0px;
  @media screen and (max-width: 1366px) {
    top: 363.3px;
  }
`;

const SPC2 = styled(SquarePictureContainer)`
  top: 322px;
  left: 300px;
  @media screen and (max-width: 1366px) {
    left: 173.6px;
    top: 285.2px;
  }
`;

const SPC3 = styled(SquarePictureContainer)`
  top: 622px;
  left: 300px;
  @media screen and (max-width: 1366px) {
    left: 173.6px;
    top: 458.8px;
  }
`;

const SPC4 = styled(SquarePictureContainer)`
  top: 108px;
  left: 600px;
  @media screen and (max-width: 1366px) {
    left: 0px;
    top: 537.4px;
  }
`;

const SPC5 = styled(SquarePictureContainer)`
  top: 408px;
  left: 600px;
  @media screen and (max-width: 1366px) {
    top: 710.9px;
    left: 0px;
  }
`;

const SPC6 = styled(SquarePictureContainer)`
  top: 258px;
  left: 900px;
  @media screen and (max-width: 1366px) {
    left: 173.6px;
    top: 633.1px;
  }
`;


const SquarePicture = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => (props.src)});
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  cursor: pointer;
`;

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
    const { lightboxIsOpen, currentImage } = this.state;

    return (
      <PageWrapper>
        <Wrap>
          <Column>
            <Title>Фото туристов, отдыхающих с нами</Title>
            <Caption>
              {`Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.
          Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана.`}
            </Caption>
          </Column>
          <SPC1>
            <SquarePicture
              onClick={() => (this.openLightbox(0))}
              src={sp1}
            />
          </SPC1>
          <SPC2>
            <SquarePicture
              onClick={() => (this.openLightbox(1))}
              src={sp2}
            />
          </SPC2>
          <SPC3>
            <SquarePicture
              onClick={() => (this.openLightbox(2))}
              src={sp3}
            />
          </SPC3>
          <SPC4>
            <SquarePicture
              onClick={() => (this.openLightbox(3))}
              src={sp4}
            />
          </SPC4>
          <SPC5>
            <SquarePicture
              onClick={() => (this.openLightbox(4))}
              src={sp5}
            />
          </SPC5>
          <SPC6>
            <SquarePicture
              onClick={() => (this.openLightbox(5))}
              src={sp6}
            />
          </SPC6>
        </Wrap>
        <Lightbox
          images={images}
          isOpen={lightboxIsOpen}
          currentImage={currentImage}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          onClose={this.closeLightbox}
        />
      </PageWrapper>
    );
  }
}
