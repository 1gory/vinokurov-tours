import { Container } from 'unstated';

class StepsContainer extends Container {
  state = {
    stepsData: [],
    stepsCollected: false,
  };

  addAnswer = (question, number, value, description) => {
    const { stepsData } = this.state;
    const newTestQuestionData = JSON.parse(JSON.stringify(stepsData));
    const newObj = {};
    newObj.question = question;
    newObj.numberOfQuestion = number;
    newObj.value = value;
    newObj.description = description;
    newTestQuestionData[number] = newObj;
    this.setState({ stepsData: newTestQuestionData });
  }

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
    });
  }
}

export default StepsContainer;
