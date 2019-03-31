import React from 'react';
import PageWrapper from './components/PageWrapper';
import Logo  from './components/Logo';
import TestQuestions  from './components/TestQuestions';
import SquarePicture  from './components/SquarePicture';
import TestQuestionsOptions  from './containers/TestQuestionsOptions';
import TestQuestionsContainer  from './state/TestQuestionsState';
import test1 from './img/1.jpg';
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
    <SquarePicture
      width={670}
      height={633}
      img={test1}
    />
  </PageWrapper>
);
