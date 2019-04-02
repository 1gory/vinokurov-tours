import React from 'react';
import styled from 'styled-components';

const SquarePicture = styled.div`
  width: ${props => (props.width)}px;
  height: ${props => (props.height)}px;
  background-image: url(${props => (props.img)});
  background-size: cover;
`;

export default ({ width, height, img }) => (
  <SquarePicture width={width} height={height} img={img} />
);
