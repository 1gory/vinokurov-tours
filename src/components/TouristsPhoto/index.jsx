import React from 'react';
import styled from 'styled-components';
import SquarePicture from '../SquarePicture';
import PageWrapper from '../SectionWrap';
import sp1 from '../../img/tourists1.jpg';
import sp2 from '../../img/tourists2.jpg';
import sp3 from '../../img/tourists3.jpg';
import sp4 from '../../img/tourists4.jpg';
import sp5 from '../../img/tourists5.jpg';
import sp6 from '../../img/tourists6.jpg';

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

export default () => (
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
          width="100%"
          height="100%"
          img={sp1}
        />
      </SPC1>
      <SPC2>
        <SquarePicture
          width="100%"
          height="100%"
          img={sp2}
        />
      </SPC2>
      <SPC3>
        <SquarePicture
          width="100%"
          height="100%"
          img={sp3}
        />
      </SPC3>
      <SPC4>
        <SquarePicture
          width="100%"
          height="100%"
          img={sp4}
        />
      </SPC4>
      <SPC5>
        <SquarePicture
          width="100%"
          height="100%"
          img={sp5}
        />
      </SPC5>
      <SPC6>
        <SquarePicture
          width="100%"
          height="100%"
          img={sp6}
        />
      </SPC6>
    </Wrap>
  </PageWrapper>
);
