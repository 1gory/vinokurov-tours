import React, { Component } from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-component';
import InstagramEmbed from 'react-instagram-embed';
import Button from '../Button';
import feedbacksLinks from './data';

const AboutUs = styled.section`
  padding-top: 94px;
  @media screen and (max-width: 576px) {
    padding-top: 42px;
  }
`;

const Title = styled.h2`
  display: block;
  font-family: 'GothamPro';
  font-size: 36px;
  font-weight: 500;
  line-height: 45px;
  text-align: center;
  color: #474d57;
  margin-bottom: 32px;
  @media screen and (max-width: 576px) {
    font-family: 'opensans';
    font-size: 28px;
    line-height: 36px;
    margin-bottom: 52px;
  }
`;

const Wrap = styled.div`
  width: 100%;
  height: 750px;
  overflow-y: hidden;
  & .aboutus__posts {
    width: 100%;
    min-height: 1000px;
  }
  &.opened {
    height: auto;
  }
  @media screen and (max-width: 1377px) {
    width: 780px;
    display: block;
    margin: auto;
  }
  @media screen and (max-width: 992px) {
    width: 326px;
  }
`;

const TestElem = styled.div`
  display: inline-block;
  width: 350px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  height: auto;
  @media screen and (max-width: 992px) {
    width: 326px;
    margin-left: 0px;
    margin-right: 0px;
  }
`;

const Look = styled.div`
  display: block;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: stretch;
  align-items: flex-start;
  padding-top: 20px;
  padding-bottom: 40px;
  position: relative;
  &:before {
    display: block;
    content: "";
    position: absolute;
    top: -232px;
    left: 0px;
    right: 0px;
    height: 232px;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
  }
`;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feedbacksMassReady: [],
      isAllFeedbacksLoaded: false,
      buttonText: 'посмотреть',
    };

    /* Длинна массива с линками постов instagram */
    this.feedbacksLinksLength = feedbacksLinks.length;
    this.wrapElem = null;
  }

  setWrapRef = (elem) => {
    this.wrapElem = elem;
  };

  /* Когда пост интсаграма отрендерился, заносим информацию об этом в массив */
  setLoadedFeedback = (index) => {
    const { feedbacksMassReady } = this.state;
    const newFeedBacksMassReady = feedbacksMassReady;
    newFeedBacksMassReady[index] = true;
    this.setState({ feedbacksMassReady: newFeedBacksMassReady });
  }

  /* Если все посты отрендерились, апдейтим сетку */
  setFeedBackLoaded = () => {
    const { isAllFeedbacksLoaded, feedbacksMassReady } = this.state;
    if (!isAllFeedbacksLoaded && feedbacksMassReady.length === this.feedbacksLinksLength) {
      setTimeout(() => {
        this.setState({ isAllFeedbacksLoaded: true });
      }, 2000)

    }
  }

  toggleWrap = () => {
    const wrapClassName = this.wrapElem.className;
    if (wrapClassName.indexOf('opened') === -1) {
      this.wrapElem.className = `${wrapClassName} opened`;
      this.setState({ buttonText: 'свернуть' });
    } else {
      this.wrapElem.className = wrapClassName.replace(' opened', '');
      this.setState({ buttonText: 'посмотреть' });
    }
  }

  render() {
    const { buttonText } = this.state;
    let feedbacksTemplate = [];

    const masonryOptions = {
      transitionDuration: 1000,
    };

    feedbacksTemplate = feedbacksLinks.map((curItem, index) => {
      const setLoadedFeedbackWithArguments = () => (this.setLoadedFeedback(index));

      return (
        <TestElem>
          <InstagramEmbed
            key={curItem}
            url={curItem}
            maxWidth="100%"
            hideCaption={false}
            containerTagName="div"
            protocol=""
            injectScript
            onAfterRender={setLoadedFeedbackWithArguments}
          />
        </TestElem>
      );
    });

    return (
      <AboutUs>
        <Title>Отзывы о нас</Title>
        <Wrap ref={this.setWrapRef}>
          <Masonry
            className="aboutus__posts"
            elementType="ul" // default 'div'
            options={masonryOptions} // default {}
            onLayoutComplete={this.setFeedBackLoaded}
          >
            {feedbacksTemplate}
          </Masonry>
        </Wrap>
        <Look>
          <Button
            text={buttonText}
            width="172"
            handleClick={this.toggleWrap}
          />
        </Look>
      </AboutUs>
    );
  }
};
