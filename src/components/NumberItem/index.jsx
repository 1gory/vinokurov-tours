import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: inline-block;
  width: ${props => (props.big ? ('238px') : ('170px'))};
  margin-right: ${props => (props.big ? ('62px') : ('30px'))};
  margin-bottom: 40px;
  @media screen and (max-width: 768px) {
    margin-bottom: 32px;
    width: 158px;
  }
  @media screen and (max-width: 576px) {
    margin-right: 10px;
  }
`;

const Number = styled.h3`
  display: inline-block;
  font-family: 'GothamPro';
  font-weight: 900;
  font-size: 48px;
  line-height: 48px;
  color: #ed1b24;
  margin-bottom: 16px;
  @media screen and (max-width: 768px) {
    font-size: 32px;
    line-height: 36px;
    margin-bottom: 16px;
  }
`;

const Subnumber = styled.h3`
  display: inline-block;
  font-family: 'GothamPro';
  font-weight: 900;
  font-size: 32px;
  line-height: 32px;
  color: #ed1b24;
  align-self: end;
  margin-left: 16px;
`;

const Title = styled.h2`
  font-family: 'GothamPro';
  font-weight: 500;
  font-size: 18px;
  line-height: 25.5px;
  letter-spacing: 0px;
  color: #474d57;
  margin-bottom: 17px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 16px;
  }
`;

const Caption = styled.p`
  font-family: 'opensans';
  font-weight: 500;
  font-size: ${props => (props.big ? ('14px') : ('16px'))};;
  line-height: 21.6px;
  color: #474d57;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

export default ({
  big,
  number,
  subnumber,
  title,
  caption,
}) => (
  <Wrap big={big}>
    <Number>{number}</Number>
    <Subnumber>{subnumber}</Subnumber>
    {
      big ? (
        <Title>{title}</Title>
      ) : ('')
    }
    <Caption big={big}>{caption}</Caption>
  </Wrap>
);
