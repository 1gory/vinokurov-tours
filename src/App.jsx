import React from 'react';
import PageWrapper from './components/PageWrapper';
import FirstScreen from './components/FirstScreen';
import WhatYouGet from './components/WhatYouGet';
import Numbers from './components/Numbers';
import About from './components/About';
import DontKnow from './components/DontKnow';
import QuizSection from './components/QuizSection';
import Steps from './components/QuizSection';

export default () => (
  <PageWrapper>
    <FirstScreen />
    <WhatYouGet />
    <Numbers />
    <About />
    <DontKnow />
    <QuizSection />
    <Steps />
  </PageWrapper>
);
