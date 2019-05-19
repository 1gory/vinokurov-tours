import { Container } from 'unstated';

export default class MailContainer extends Container {
  state = {
    email: '',
    dataSended: false,
  };

  setMail = (str) => {
    this.setState({ email: str });
  };

  sendMail = () => {
    const { email } = this.state;
    fetch('/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ email, isBookletRequest: true }),
    })
      .then(async (
      // data
      ) => {
        // const response = await data.json();
      })
      .catch((/* error */) => {

      });
    this.setState({ dataSended: true });
    // console.log(`Email ${mail} отправлен`);
  }
}
