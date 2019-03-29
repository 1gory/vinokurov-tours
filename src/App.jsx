import React from 'react';
import PageWrapper from './components/PageWrapper';
import Logo  from './components/Logo';
import TestQuestions  from './components/TestQuestions';
import TestQuestionsOptions  from './containers/TestQuestionsOptions';

export const App = () => (
  <PageWrapper>
    <Logo/>
    <TestQuestions>
      <TestQuestionsOptions />
    </TestQuestions>
  </PageWrapper>
);
