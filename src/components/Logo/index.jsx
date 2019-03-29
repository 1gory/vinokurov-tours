import React from 'react';
import styled from 'styled-components';
import airplane from '../../img/icons/baseline-airplanemode_active-24px.svg';

const LogoWrap = styled.div`
  position: relative;
  padding-left: 35px;
`;

const LogoImg = styled.img`
  position: absolute;
  width: 32px;
  height: 32px;
  top: 17px;
  left: 3px;
  display: inline-block;
`;

const LogoTitle = styled.div`
  font-family: 'GothamPro';
  font-weight: 900;
  font-size: 14px;
  line-height: 14px;
  color: #272525;
  margin-left: 10px;
  padding-top: 18px;
  letter-spacing: normal;
`;

const Logo = () => {
  return (
    <LogoWrap>
      <LogoImg src={airplane} />
      <LogoTitle>ТурагенствоДмитрия Винокурова</LogoTitle>
    </LogoWrap>
  )
}

export default Logo;