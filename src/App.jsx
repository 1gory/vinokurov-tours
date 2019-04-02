import React from 'react';
import PageWrapper from './components/PageWrapper';
import FirstScreen from './components/FirstScreen';
import QuizSection from './components/QuizSection';
import Steps from './components/QuizSection';

export default () => (
  <PageWrapper>
    <FirstScreen />
    <QuizSection />
    <Steps />
  </PageWrapper>
);
