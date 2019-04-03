import React from 'react';
import styled from 'styled-components';

const SquarePicture = styled.div`
  width: ${props => (props.width)};
  height: ${props => (props.height)};
  background-image: url(${props => (props.img)});
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
`;

export default ({ width, height, img }) => (
  <SquarePicture width={width} height={height} img={img} />
);
