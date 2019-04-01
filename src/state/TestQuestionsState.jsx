import { Container } from 'unstated';

class TestQuestionsContainer extends Container {
  state = {
    testQuestionsData: [],
    testQuestionsCollected: false,
  };

  addAnswer = (question, number, value, description) => {
    const { testQuestionsData } = this.state;
    const newTestQuestionData = JSON.parse(JSON.stringify(testQuestionsData));
    const newObj = {};
    newObj.question = question;
    newObj.numberOfQuestion = number;
    newObj.value = value;
    newObj.description = description;
    newTestQuestionData[number] = newObj;
    this.setState({ testQuestionsData: newTestQuestionData });
  }

  addFormData = (formObj) => {
    const { testQuestionsData, testQuestionsCollected } = this.state;

    if (testQuestionsCollected) {
      return false;
    }

    const testQuestionsDataLength = testQuestionsData.length;
    const newTestQuestionData = JSON.parse(JSON.stringify(testQuestionsData));
    newTestQuestionData[testQuestionsDataLength] = formObj;

    this.setState({
      testQuestionsData: newTestQuestionData,
      testQuestionsCollected: true,
    });
  }

  checkIsTestQuestionsCollected = () => {
    const { testQuestionsData } = this.state;
    const testQuestionsDataLength = testQuestionsData.length;
    const formData = testQuestionsData[testQuestionsDataLength - 1];
  }
}

export default TestQuestionsContainer;
