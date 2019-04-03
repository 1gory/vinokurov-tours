import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  width: 270px;
  padding: 24px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

const Icon = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${(props) => (props.icon)});
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  display: inline-block;
  font-family: 'GothamPro';
  font-size: 18px;
  line-height: 24.5px;
  color: #474d57;
  margin-bottom: 32px;
`;

const Caption = styled.p`
  font-family: 'opensans';
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #474d57;
`;

export default ({ icon, title, text }) => (
  <Item>
    <Icon icon={icon} />
    <Title>{title}</Title>
    <Caption>{text}</Caption>
  </Item>
);