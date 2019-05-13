import React from 'react';
import Scroll from 'react-scroll';
import FirstScreen from './components/FirstScreen';
import WhatYouGet from './components/WhatYouGet';
import Numbers from './components/Numbers';
import About from './components/About';
import Booklet from './components/Booklet';
import InstagramFeedback from './components/InstagramFeedback';
import Why from './components/Why';
import LeftRequest from './components/LeftRequest';
import TouristsPhoto from './components/TouristsPhoto';
import QuizSection from './components/QuizSection';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

const { scroller } = Scroll;

const scrollToMyRef = () => {
  scroller.scrollTo('QuizSection', {
    duration: 300,
    delay: 100,
    smooth: true,
    offset: 100,
  });
};

export default () => (
  <>
    <FirstScreen scrollToMyRef={scrollToMyRef} />
    <QuizSection />
    <WhatYouGet />
    <Numbers />
    <About />
    <Booklet />
    <InstagramFeedback />
    <Why />
    <LeftRequest />
    <TouristsPhoto />
    <Contacts />
    <Footer />
  </>
);
