import { Container } from 'unstated';
import img from '../img/1.jpg';

class StepsImageContainer extends Container {
  state = {
    imgSrc: img,
  };

  setImage = (src) => {
    this.setState({ imgSrc: src });
  }
}

export default StepsImageContainer;
