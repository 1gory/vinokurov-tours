import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import PageWrapper from './components/PageWrapper';
import FirstScreen from './components/FirstScreen';
import WhatYouGet from './components/WhatYouGet';
import Numbers from './components/Numbers';
import About from './components/About';
import DontKnow from './components/DontKnow';
import AboutAs from './components/AboutUs';
import Why from './components/Why';
import LeftRequest from './components/LeftRequest';
import TouristsPhoto from './components/TouristsPhoto';
import QuizSection from './components/QuizSection';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

export default class extends Component {
  setSectionRef = (element) => {
    this.QuizSection = element;
  };

  scrollToMyRef = () => {
    scrollToComponent(this.QuizSection, {
      offset: 0,
      align: 'top',
      duration: 500,
      ease: 'inCirc',
    });
  };

  render() {
    return (
      <PageWrapper>
        <FirstScreen scrollToMyRef={this.scrollToMyRef} />
        <WhatYouGet />
        <Numbers />
        <About />
        <DontKnow />
        <AboutAs />
        <Why />
        <QuizSection ref={this.setSectionRef} />
        <LeftRequest />
        <TouristsPhoto />
        <Contacts />
        <Footer />
      </PageWrapper>
    );
  }
}
