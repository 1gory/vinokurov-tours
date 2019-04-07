import React, { Component } from 'react';
import styled from 'styled-components';
import { Subscribe } from 'unstated';
import QuizOption from '../../components/QuizOption';
import Input from '../Input';
import QuizForm from '../QuizForm';
import stepsData from './stepsData';
import QuizStep from '../../components/QuizStep';
import backlink from '../../img/icons/back-link.svg';
import calender from '../../img/icons/calendar.svg';
import img1 from '../../img/1.jpg';
import StepsImageContainer from '../../state/StepsImageState';

const Wrap = styled.div`
  display: inline-block;
  width: 370px;
  @media screen and (max-width: 450px) {
    width: auto;
  }
`;

const GoBack = styled.button`
  display: inline-block;
  background: none;
  border: 0px;
  background-image: url(${backlink});
  background-repeat: no-repeat;
  background-size: 24px 24px;
  background-position: 0px 0px;
  height: 24px;
  padding-left: 32px;
  font-family: 'opensans';
  font-size: 16px;
  line-height: 24px;
  color: #474d57;
  cursor: pointer;
  margin-bottom: 10px;
  &:hover {
    opacity: 0.7;
  }
`;

const Step = styled.div`
  height: 520px;
`;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfActiveStep: 0,
      data: stepsData,
    };
  }

  handleGoNextQuestion = () => {
    let { numberOfActiveStep } = this.state;
    numberOfActiveStep += 1;
    this.setState({ numberOfActiveStep });
  }

  handleGoBack = (e) => {
    e.preventDefault();
    let { numberOfActiveStep } = this.state;

    if (numberOfActiveStep !== 0) {
      this.setState({ numberOfActiveStep: numberOfActiveStep -= 1 });
    } else {
      return false;
    }
    return true;
  }

  goToFirstStep = (e) => {
    e.preventDefault();
    this.setState({ numberOfActiveStep: 0 });
  }

  render() {
    const {
      container: {
        addAnswer,
        addFormData,
        state: {
          isThanksStep,
        },
      },
    } = this.props;

    const { numberOfActiveStep, data } = this.state;
    const stepsDataLength = data.length;
    const isLastStep = numberOfActiveStep === stepsDataLength - 1;
    let stepsTemplate = [];
    let isVisibleGoBack = numberOfActiveStep !== 0;

    /* Если все ответы получены и это последний слайд, скрываем кнопку возврата назад */
    if (numberOfActiveStep === 0 || isThanksStep) {
      isVisibleGoBack = false;
    }

    /* Формирование шаблона Вопроса */
    stepsTemplate = data.map((currentItem, index) => {
      const { question, options } = currentItem;
      const numberOfQuestion = index + 1;
      let questionsOptionsTemplate = [];
      let visible = false;

      /* Формирование шаблона Опций Вопроса */
      questionsOptionsTemplate = options.map(curItem => (
        <Subscribe to={[StepsImageContainer]}>
          {(imageContainer) => {
            const {
              setImage,
            } = imageContainer;

            return (
              <QuizOption
                key={curItem.content}
                type={curItem.type}
                question={question}
                content={curItem.content}
                hoverContent={curItem.hoverContent}
                value={curItem.value}
                numberOfQuestion={numberOfActiveStep}
                imgSrc={curItem.imgSrc || img1}
                handleOptionClick={addAnswer}
                handleGoNextQuestion={this.handleGoNextQuestion}
                handleOptionHover={setImage}
              />
            );
          }}
        </Subscribe>
      ));

      if (numberOfActiveStep === index) {
        visible = true;
      }

      /* Если это 4-й вопрос, кладем туда Input с DatePicker */
      if (numberOfQuestion === 4) {
        /* Обертка для функции записывания
        в стейт ответа с дефолтными аргументами,
        из инпута приходит только дата */
        const addAnswerWithArguments = (value) => {
          const inputQuestion = question;
          const number = numberOfActiveStep;
          const description = 'Выбранная дата';
          /* Когда выбирается дата, происходит переход на следующий слайд */
          this.handleGoNextQuestion();
          return addAnswer(inputQuestion, number, value, description);
        };

        questionsOptionsTemplate.push(
          <Input
            key={Math.random()}
            type="datepicker"
            hasIcon
            icon={calender}
            inputHandler={addAnswerWithArguments}
          />,
        );
      }

      return (
        <QuizStep
          key={question}
          number={numberOfQuestion}
          questionsLength={stepsDataLength}
          question={question}
          optionsTemplate={questionsOptionsTemplate}
          visible={visible}
        />
      );
    });

    return (
      <Wrap>
        <Step>
          {stepsTemplate}
          {
          isLastStep ? (
            <QuizForm submitHandler={addFormData} goToFirstStepHandler={this.goToFirstStep} />
          ) : (
            ''
          )
        }
        </Step>
        {
          isVisibleGoBack ? (<GoBack onClick={this.handleGoBack}>Назад</GoBack>) : ''
        }
      </Wrap>
    );
  }
}
