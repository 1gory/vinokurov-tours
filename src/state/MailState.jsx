import { Container } from 'unstated';

export default class MailContainer extends Container {
  state = {
    mail: '',
  };

  setMail = (str) => {
    this.setState({ mail: str });
  }

  sendMail = () => {
    const { mail } = this.state;
    /* post запрос на отправку */
    console.log(`Email ${mail} отправлен`);
  }
}
