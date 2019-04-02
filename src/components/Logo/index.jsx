import React from 'react';
import styled from 'styled-components';
import airplane from '../../img/icons/airplane.svg';

const Logo = styled.div`
  position: relative;
  padding-left: 35px;
`;

const Img = styled.img`
  position: absolute;
  width: 32px;
  height: 32px;
  top: 17px;
  left: 3px;
  display: inline-block;
`;

const Title = styled.div`
  font-family: 'GothamPro';
  font-weight: 900;
  font-size: 14px;
  line-height: 14px;
  color: #272525;
  margin-left: 10px;
  padding-top: 18px;
  letter-spacing: normal;
`;

export default () => (
  <Logo>
    <Img src={airplane} />
    <Title>Турагенство Дмитрия Винокурова</Title>
  </Logo>
);
