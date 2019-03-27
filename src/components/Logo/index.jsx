import React from 'react';
import styled from 'styled-components';

const LogoWrap = styled.div`
  
`;

const LogoTitle = styled.div`
  font-family: 'GothamPro';
  font-weight: 900;
  font-size: 14px;
  line-height: 14px;
  color: #272525;
`;

const Logo = () => {
  return (
    <LogoWrap>
      <LogoTitle>ТурагенствоДмитрия Винокурова</LogoTitle>
    </LogoWrap>
  )
}

export default Logo;