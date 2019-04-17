import { Container } from 'unstated';

export default class extends Container {
  state = {
    stepsData: [],
    stepsCollected: false,
    isThanksStep: false,
  };

  addAnswer = (question, number, value, description) => {
    const { stepsData } = this.state;
    const newTestQuestionData = JSON.parse(JSON.stringify(stepsData));
    const tempObj = {};
    tempObj.question = question;
    tempObj.numberOfQuestion = number;
    tempObj.value = value;
    tempObj.description = description;
    newTestQuestionData[number] = tempObj;
    this.setState({
      stepsData: newTestQuestionData,
      isThanksStep: false,
    });
  };

  addFormData = (formObj) => {
    const { stepsData, stepsCollected } = this.state;

    if (stepsCollected) {
      return false;
    }

    const testQuestionsDataLength = stepsData.length;
    const newTestQuestionData = JSON.parse(JSON.stringify(stepsData));
    newTestQuestionData[testQuestionsDataLength] = formObj;

    this.setState({
      stepsData: newTestQuestionData,
      stepsCollected: true,
      isThanksStep: true,
    });

    return true;
  }
}
