import { Container } from 'unstated';

export default class MailContainer extends Container {
  state = {
    mail: '',
  };

  setMail = (str) => {
    const { mail } = this.state;
    console.log(mail);
    this.setState({ mail: str });
  }
}
