import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const SquarePicture = styled.div`
  width: 670px;
  height: 633px;
  background-image: url(${props => (props.img)});
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  visibility: ${props => (props.out ? 'hidden' : 'visible')};
  animation: ${props => (props.out ? fadeOut : fadeIn)} .1s linear;
  transition: visibility .1s linear;

  @media screen and (max-width: 1366px) {
    width: 480px;
    height: 533px;
  }
`;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeImg: props.img,
      isVisible: true,
    };
  }

  componentDidUpdate(prevProps) {
    const { img } = this.props;

    if (prevProps.img !== img) {
      this.updateImage(img);
    }
  }

  updateImage = (img) => {
    this.setState({
      isVisible: false,
    });

    setTimeout(() => this.setState({
      activeImg: img,
    }), 100);

    setTimeout(() => this.setState({
      isVisible: true,
    }), 100);
  };

  render() {
    const { width, height } = this.props;
    const { isVisible, activeImg } = this.state;
    return (
      <SquarePicture width={width} height={height} img={activeImg} out={!isVisible} />
    );
  }
}
