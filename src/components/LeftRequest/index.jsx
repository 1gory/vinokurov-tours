import React from 'react';
import styled from 'styled-components';
import request from '../../img/request-bg.jpg';

const Wrap = styled.div`
  height: 496px;
  padding-top: 48px;
  padding-bottom: 48px;
  padding-left: 98px;
  padding-right: 98px;
  margin-left: -98px;
  margin-right: -98px;
  background-image: url(${request});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  @media screen and (max-width: 768px) {
    margin-left: -17px;
    margin-right: -17px;
    padding-left: 17px;
    padding-right: 17px;
  }
  @media screen and (max-width: 576px) {
    padding-top: 24px;
  }
`;

export default () => (
  <Wrap>
    
  </Wrap>
);
