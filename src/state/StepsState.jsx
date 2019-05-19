import { Container } from 'unstated';
import img from '../img/quiz/food.jpg';

export default class StepsImageContainer extends Container {
  state = {
    imgSrc: img,
  };

  setImage = (src) => {
    this.setState({ imgSrc: src });
  }
}
