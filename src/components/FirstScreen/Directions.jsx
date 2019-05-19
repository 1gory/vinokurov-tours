import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import linkIcon from '../../img/icons/link.svg';

const Wrapper = styled.div`
  @media screen and (max-width: 768px) {
    padding-left: 17px;
    padding-right: 17px;
  }
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

const DirectionLink = styled(Link)`
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

export default ({ directions }) => (
  <Wrapper>
    <DirectionsTitle>другие направления</DirectionsTitle>
    {directions.map(direction => (
      <Direction>
        <ImgWrap>
          <Img src={direction.src} />
        </ImgWrap>
        <DirectionCaption>{direction.name}</DirectionCaption>
        <DirectionLink to={direction.link}>Подробнее</DirectionLink>
      </Direction>
    ))}
  </Wrapper>
);
