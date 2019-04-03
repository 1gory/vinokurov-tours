import React from 'react';
import styled from 'styled-components';
import WhatYouGetItem from '../WhatYouGetItem';
import WhatYouGetData from './data';

const WhatYouGet = styled.div`
  height: 478px;
`;

const Title = styled.h2`
  font-family: 'GothamPro';
  font-size: 36px;
  line-height: 46px;
  color: #474d57;
  position: relative;
  &:after {
    position: absolute;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: stretch;
`;

export default () => {
  let ItemsTemplate =[];

  ItemsTemplate = WhatYouGetData.map(curItem => (
    <WhatYouGetItem key={curItem.title} icon={curItem.icon} title={curItem.title} text={curItem.text} />
  ));

  return (
    <WhatYouGet>
      <Title>Что вы получите</Title>
      <Wrap>
        {ItemsTemplate}
      </Wrap>
    </WhatYouGet>
  );
};
