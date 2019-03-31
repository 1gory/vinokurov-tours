import React, { Component } from 'react';
import styled from 'styled-components';

const SquarePictureElem = styled.div`
  width: ${(props) => (props.width)}px;
  height: ${(props) => (props.height)}px;
  background-image: url(${(props) => (props.img)});
  background-size: cover;
`;

const SquarePicture = (props) => {
  const { width, height, img } = props;

  return (
    <SquarePictureElem width={width} height={height} img={img} />
  )
}

export default SquarePicture;