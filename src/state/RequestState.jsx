import { Container } from 'unstated';

export default class RequestContainer extends Container {
  state = {
    name: '',
    phone: '',
    error: false,
    dataSended: false,
  };

  setName = (str) => {
    this.setState({ name: str });
  }

  setPhone = (str) => {
    this.setState({ phone: str });
  }

  sendRequest = () => {
    const { phone, name } = this.state;
    if (phone.length === 17) {
      fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ phone, name }),
      })
        .then(async (
        // data
        ) => {
          // const response = await data.json();
        })
        .catch((/* error */) => {

        });
      /* Post запрос на отправление данных */
      this.setState({ error: false, dataSended: true });
    } else {
      this.setState({ error: true, dataSended: false });
    }
  }
}
