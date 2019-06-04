/* eslint no-undef: 0 */
import { Container } from 'unstated';
import ReactPixel from 'react-facebook-pixel';

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
    ym(53328166, 'reachGoal', 'booklet');
    ReactPixel.track('Lead');
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
