import React from 'react';
import styled from 'styled-components';
import airplane from '../../img/icons/airplane.svg';
import airplaneRed from '../../img/icons/airplane-red.svg';

const Logo = styled.div`
  position: relative;
  padding-left: 35px;
`;

const Img = styled.img`
  position: absolute;
  width: 32px;
  height: 32px;
  top: 0px;
  left: 3px;
  display: inline-block;
`;

const Title = styled.div`
  font-family: 'GothamPro';
  font-weight: 900;
  font-size: 14px;
  line-height: 14px;
  color: ${props => (props.theme === 'white' ? '#ffffff' : '#272525')};
  margin-left: 10px;
  letter-spacing: normal;
`;

export default ({ theme }) => (
  <Logo>
    <Img src={theme === 'white' ? airplane : airplaneRed} />
    <Title theme={theme}>Турагенство Дмитрия Винокурова</Title>
  </Logo>
);
