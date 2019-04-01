import React, { Component } from 'react';
import styled from 'styled-components';
import Input from '../Input';
import Button from '../../components/Button';
import userImg from '../../img/icons/user.svg';
import phoneImg from '../../img/icons/phone.svg';
import mailImg from '../../img/icons/mail.svg';
import accept from '../../img/icons/accept.svg';

const TestQuestionsFormElem = styled.form`

`;

const QuestionsDisclaimer = styled.div`
  font-family: 'opensans';
  font-size: 12px;
  line-height: 16.5px;
  color: #474d57;
  margin-bottom: 32px;
  letter-spacing: normal;
`;

const QuestionsCircle = styled.div`
  width: 130px;
  height: 130px;
  background-color: #ed1b24;
  border-radius: 50%;
  background-image: url(${accept});
  background-repeat: no-repeat;
  backgorund-size: 51.3px 39.1px;
  background-position: 50% 50%;
  margin-bottom: 24px;
`;

const QuestionThanks = styled.p`
  font-family: 'GothamPro';
  font-weight: 900;
  font-size: 28px;
  line-height: 38.5px;
  color: #474d57;
  margin-bottom: 46px;
`;

class TestQuestionsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputsData: [
        {
          icon: userImg,
          placeholder: 'Имя',
          type: 'name',
          handler: this.setName,
        },
        {
          icon: phoneImg,
          placeholder: 'Телефон',
          type: 'phone',
          error: false,
          handler: this.setPhone,
        },
        {
          icon: mailImg,
          placeholder: 'Эл. почта',
          type: 'mail',
          handler: this.setMail,
        },
      ],
      name: '',
      phone: '',
      mail: '',
      dataSended: false,
    };
  }

  setName = (nameString) => {
    this.setState({ name: nameString });
  }

  setPhone = (phoneString) => {
    this.setState({ phone: phoneString });
  }

  setMail = (mailString) => {
    this.setState({ mail: mailString });
  }

  validateUserData = (e) => {
    e.preventDefault();
    const { submitHandler } = this.props;
    const {
      inputsData,
      name,
      phone,
      mail,
    } = this.state;
    const newInputsData = inputsData;
    const formDataObj = {};

    if (phone.length !== 17) {
      newInputsData[1].error = true;
      this.setState({ inputsData: newInputsData });
    } else {
      formDataObj.name = name;
      formDataObj.phone = phone;
      formDataObj.mail = mail;
      newInputsData[1].error = false;
      submitHandler(formDataObj);
      this.setState({
        inputsData: newInputsData,
        dataSended: true,
      });
    }
  }

  render() {
    const { inputsData, dataSended } = this.state;
    let inputsTemplate = [];

    inputsTemplate = inputsData.map(curItem => (
      <Input
        type={curItem.type}
        hasIcon
        icon={curItem.icon}
        placeholder={curItem.placeholder}
        inputHandler={curItem.handler}
        error={curItem.error}
      />
    ));

    return (
      <TestQuestionsFormElem>
        {
          dataSended ? (
            <>
              <QuestionsCircle />
              <QuestionThanks>Спасибо, что вы выбрали нас!</QuestionThanks>
              <Button width={204} text="перейти на" />
            </>
          ) : (
            <>
              {inputsTemplate}
              <QuestionsDisclaimer>
                Нажимая на кнопку "ОТПРАВИТЬ",
                вы даете согласие на обработку
                своих персональных данных.
              </QuestionsDisclaimer>
              <Button width={170} text="отправить" handleClick={this.validateUserData} />
            </>
          )
        }
      </TestQuestionsFormElem>
    );
  }
}

export default TestQuestionsForm;
