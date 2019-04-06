import { Container } from 'unstated';

export default class RequestContainer extends Container {
  state = {
    name: '',
    phone: '',
    error: false,
    dataSended: false,
  };

  setName = (str) => {
    const { name } = this.state;
    this.setState({ name: str });
  }

  setPhone = (str) => {
    const { phone } = this.state;
    this.setState({ phone: str });
  }

  sendRequest = () => {
    const { phone } = this.state;
    if (phone.length === 17) {
      /* Post запрос на отправление данных */
      this.setState({ error: false, dataSended: true });
    } else {
      this.setState({ error: true, dataSended: false });
    }
  }
}
