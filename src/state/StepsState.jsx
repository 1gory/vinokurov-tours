import { Container } from 'unstated';
import img from '../img/quiz/food.jpg';

export default class StepsContainer extends Container {
  state = {
    imgSrc: img,
    stepsData: [],
    stepsCollected: false,
    isThanksStep: false,
  };

  setImage = (src) => {
    this.setState({ imgSrc: src });
  };

  resetQuiz = () => {
    this.setState({
      stepsData: [],
      stepsCollected: false,
      isThanksStep: false,
    });
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

    fetch('/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        stepsData,
        phone: formObj.phone,
        name: formObj.name,
        email: formObj.email,
      }),
    })
      .then(async (
      // data
      ) => {
        // const response = await data.json();
      })
      .catch((/* error */) => {

      });

    return true;
  }
}
