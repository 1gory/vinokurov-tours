import React, { Component } from 'react';
import { render } from 'react-dom';
import { Container } from 'unstated';

class TestQuestionsContainer extends Container {
  state = {
    testQuestionsData: {},
  };

  addAnswer = (question, number, value, description) => {
    let { testQuestionsData } = this.state;
    let newTestQuestionData = JSON.parse(JSON.stringify(testQuestionsData));
    let newObj = {};
    newObj.question = question;
    newObj.numberOfQuestion = number;
    newObj.value = value;
    newObj.description = description;
    newTestQuestionData[number] = newObj;
    this.setState({ testQuestionsData: newTestQuestionData });
  }
}

export default TestQuestionsContainer;