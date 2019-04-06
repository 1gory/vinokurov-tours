import React from 'react';
import PageWrapper from './components/PageWrapper';
import FirstScreen from './components/FirstScreen';
import WhatYouGet from './components/WhatYouGet';
import Numbers from './components/Numbers';
import About from './components/About';
import DontKnow from './components/DontKnow';
import AboutAs from './components/AboutUs';
import Why from './components/Why';
import LeftRequest from './components/LeftRequest';
import QuizSection from './components/QuizSection';

export default () => (
  <PageWrapper>
    <FirstScreen />
    <WhatYouGet />
    <Numbers />
    <About />
    <DontKnow />
    <AboutAs />
    <Why />
    <LeftRequest />
    <QuizSection />
  </PageWrapper>
);
