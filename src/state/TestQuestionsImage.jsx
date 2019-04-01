import { Container } from 'unstated';
import test1 from '../img/1.jpg';

class TestQuestionsImageContainer extends Container {
  state = {
    imgSrc: test1,
  };

  setImage = (src) => {
    this.setState({ imgSrc: src });
  }
}

export default TestQuestionsImageContainer;
