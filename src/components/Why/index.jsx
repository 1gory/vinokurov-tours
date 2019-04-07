import React, { Component } from 'react';
import styled from 'styled-components';
import whyData from './data';

const Why = styled.div`
  padding-top: 72px;
  padding-bottom: 56px;
  background-color: #f3f3f3;
  margin-left: -98px;
  margin-right: -98px;
  padding-left: 98px;
  padding-right: 98px;
  @media screen and (max-width: 576px) {
    padding-top: 14px;
    margin-left: -17px;
    margin-right: -17px;
    padding-left: 17px;
    padding-right: 17px;
  }
`;

const Title = styled.h2`
  font-family: 'GothamPro';
  font-weight: 500;
  font-size: 36px;
  line-height: 44.5px;
  color: #474d57;
  margin-bottom: 56px;
  max-width: 600px;
  @media screen and (max-width: 576px) {
    font-family: 'opensans';
    font-weight: 100;
    font-size: 28px;
    line-height: 35.6px;
    font-weight: 500;
    margin-bottom: 47px;
  }
`;

const Wrap = styled.div`
  width: 1000px;
  @media screen and (max-width: 1366px) {
    width: 100%;
  }
`;

const LeftColumn = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 270px;
  margin-right: 130px;
  & div:last-child {
    border-bottom: 0px;
  }
  @media screen and (max-width: 1366px) {
    display: block;
    margin-right: 0px;
  }
  @media screen and (max-width: 576px) {
    margin-bottom: 71px;
  }
`;

const RightColumn = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 570px;
  @media screen and (max-width: 1366px) {
    display: block;
    width: auto;
  }
`;

const Button = styled.div`
  font-family: 'GothamPro';
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #474d57;
  margin-bottom: 17px;
  width: 100%;
  border-bottom: 1px solid #474d57;
  padding: 12px 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &.active {
    color: #ffffff;
    background-color: #ed1b24;
    border-bottom: 1px solid #ed1b24;
    border-radius: 5px;
  }
`;

const Slide = styled.div`
  display: inline-block;
  width: 570px;
  @media screen and (max-width: 992px) {
    width: auto;
  }
`;

const Number = styled.h3`
  font-family: GothamPro;
  font-weight: 900;
  font-size: 36px;
  line-height: 44px;
  color: #ed1b24;
  margin-bottom: 24px;
  @media screen and (max-width: 576px) {
    margin-bottom: 31px;
  }
`;

const Text = styled.p`
  font-family: 'opensans';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #2d2d2d;
  @media screen and (max-width: 576px) {
    font-size: 14px;
    line-height: 21px;
  }
`;

const ButtonElem = ({
  text,
  handler,
  index,
  numberOfActiveSlide,
}) => {
  let active = false;
  if (numberOfActiveSlide === index) {
    active = true;
  }
  return (<Button className={(active ? 'active' : '')} active={active} onClick={handler} onMouseEnter={handler}>{text}</Button>);
};

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfActiveSlide: 0,
    };
  }

  setActiveSlide = (number) => {
    this.setState({ numberOfActiveSlide: number });
  }

  render() {
    const { numberOfActiveSlide } = this.state;
    let buttonsTemplate = [];

    buttonsTemplate = whyData.map((curItem, index) => {
      const setActiveSlideWithIndex = () => (this.setActiveSlide(index));

      return (
        <ButtonElem
          handler={setActiveSlideWithIndex}
          text={`${curItem.number}. ${curItem.buttonText}`}
          index={index}
          numberOfActiveSlide={numberOfActiveSlide}
        />
      );
    });

    return (
      <Why>
        <Title>Почему 80% клиентов обращаются к нам снова?</Title>
        <Wrap>
          <LeftColumn>
            {buttonsTemplate}
          </LeftColumn>
          <RightColumn>
            <Slide>
              <Number>{whyData[numberOfActiveSlide].number}</Number>
              <Text>{whyData[numberOfActiveSlide].slideText}</Text>
            </Slide>
          </RightColumn>
        </Wrap>
      </Why>
    );
  }
}
