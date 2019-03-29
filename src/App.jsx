import React from 'react';
import PageWrapper from './components/PageWrapper';
import Logo  from './components/Logo';
import TestQuestions  from './components/TestQuestions';
import TestQuestionsOptions  from './containers/TestQuestionsOptions';
import TestQuestionsContainer  from './state/TestQuestionsState';
import { Subscribe } from 'unstated';

export const App = () => (
  <PageWrapper>
    <Logo/>
    <TestQuestions>
      <Subscribe to={[TestQuestionsContainer]}>
        {container => (
          <TestQuestionsOptions container={container} />
        )}
      </Subscribe>
    </TestQuestions>
  </PageWrapper>
);
