import React from 'react';
import Scroll from 'react-scroll';
import ReactPixel from 'react-facebook-pixel';
import FirstScreen from './components/FirstScreen';
import WhatYouGet from './components/WhatYouGet';
import Numbers from './components/Numbers';
import About from './components/About';
import Booklet from './components/Booklet';
import InstagramFeedback from './components/InstagramFeedback';
// import Why from './components/Why';
import LeftRequest from './components/LeftRequest';
// import TouristsPhoto from './components/TouristsPhoto';
import QuizSection from './components/QuizSection';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

if (typeof window !== 'undefined') {
  ReactPixel.init('659158531202483');
  ReactPixel.pageView();
}

const { scroller } = Scroll;

const scrollToMyRef = () => {
  scroller.scrollTo('QuizSection', {
    duration: 300,
    delay: 100,
    smooth: true,
    offset: 100,
  });
};

export default ({ data }) => (
  <>
    <FirstScreen scrollToMyRef={scrollToMyRef} offer={data.offer} directions={data.directions} />
    <QuizSection />
    <WhatYouGet direction={data.booklet} />
    <Numbers />
    <About />
    <Booklet bookletDirection={data.booklet} />
    <InstagramFeedback />
    {/* <Why /> */}
    <LeftRequest />
    {/* <TouristsPhoto /> */}
    <Contacts />
    <Footer />
  </>
);
