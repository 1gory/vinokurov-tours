import React, { Component } from 'react';
import styled from 'styled-components';
import QuestionOption from '../../components/QuestionOption';
import Input from '../../containers/Input';
import TestQuestionsForm from '../TestQuestionsForm';
import starthree from '../../img/icons/stars-3.svg';
import starfour from '../../img/icons/stars-4.svg';
import starfive from '../../img/icons/stars-5.svg';
import starthreew from '../../img/icons/stars-3-white.svg';
import starfourw from '../../img/icons/stars-4-white.svg';
import starfivew from '../../img/icons/stars-5-white.svg';
import backlink from '../../img/icons/back-link.svg';
import calender from '../../img/icons/calendar.svg';
import test1 from '../../img/1.jpg';
import test2 from '../../img/2.jpg';
import test3 from '../../img/3.jpg';
import test4 from '../../img/4.jpg';
import test5 from '../../img/5.jpg';

const TestQuestionsOptionsWrap = styled.div`
  display: inline-block;
  width: 370px;
`;

const QuestionsCount = styled.p`
  font-family: 'opensans';
  font-size: 16px;
  line-height: 22px;
  color: #aeaeae;
  letter-spacing: normal;
  margin-bottom: 8px;
`;

const QuestionsQuestion = styled.h3`
  font-family: 'GothamPro';
  font-weight: 900;
  color: #474d57;
  font-size: 28px;
  line-height: 38.5px;
  margin-top: 0px;
  margin-bottom: 40px;
`;

const QuestionsItemWrap = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  margin-bottom: 40px;
`;

const TestQuestionsBack = styled.div`
  display: inline-block;
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
  &:hover {
    opacity: 0.7;
  }
`;

const QuestionsItem = (props) => {
  const { number, questionsLength, question, optionsTemplate, visible } = props;
  /* Если вопрос последний, отображаем форму завершения опроса */
  return (
    <QuestionsItemWrap visible={visible} >
      <QuestionsCount>
        {
          number === questionsLength ? ('Завершение опроса') : (`Вопрос ${number}/${questionsLength - 1}`)
        }
        </QuestionsCount>
      <QuestionsQuestion>{question}</QuestionsQuestion>
      {optionsTemplate}
    </QuestionsItemWrap>
  )
}

class TestQuestionsOptions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfActiveQuestion: 0,
      questionsData: [
        {
          question: 'Что для вас отдых в Тайланде?',
          options: [
            {
              content: 'Знакомство с местной культурой и живописные пейзажи',
              value: 'Знакомство с местной культурой и живописные пейзажи',
              type: 'text',
              imgSrc: test1,
            },
            {
              content: 'Райский пляж недалеко от отеля',
              value: 'Райский пляж недалеко от отеля',
              type: 'text',
              imgSrc: test2,
            },
            {
              content: 'Экзотические фрукты и морепродукты',
              value: 'Экзотические фрукты и морепродукты',
              type: 'text',
              imgSrc: test3,
            },
          ]
        },
        {
          question: 'Отели какого уровня предпочитаете?',
          options: [
            {
              content: starthree,
              hoverContent: starthreew,
              value: 3,
              type: 'img',
            },
            {
              content: starfour,
              hoverContent: starfourw,
              value: 4,
              type: 'img',
            },
            {
              content: starfive,
              hoverContent: starfivew,
              value: 5,
              type: 'img',
            },
          ]
        },
        {
          question: 'Сколько будет длиться ваш отдых?',
          options: [
            {
              content: '1 неделя',
              value: 1,
              type: 'text',
            },
            {
              content: '2 недели',
              value: 2,
              type: 'text',
            },
            {
              content: '3 недели',
              value: 3,
              type: 'text',
            },
          ]
        },
        {
          question: 'С какого числа планируете начинать',
          options: [],
        },
        {
          question: 'Отправьте данные по опросу нам',
          options: [],
        },
      ],
    }

  }

  handleGoNextQuestion = () => {
    let { numberOfActiveQuestion } = this.state;
    numberOfActiveQuestion += 1;
    this.setState({ numberOfActiveQuestion });
  }

  handleGoBack = () => {
    let { numberOfActiveQuestion } = this.state;

    if (numberOfActiveQuestion === 0) {
      return false;
    } else {
      this.setState({ numberOfActiveQuestion: numberOfActiveQuestion -= 1 })
    }
  }

  render () {
    const {
      container: {
        addAnswer,
        addFormData,
        state: {
          testQuestionsCollected,
        },
      },
      imageContainer: {
        setImage,
      },
    } = this.props;

    const { numberOfActiveQuestion, questionsData } = this.state;
    const questionsDataLength = questionsData.length;
    let lastQuestion = numberOfActiveQuestion === questionsDataLength - 1;
    let questionsItemTemplate = [];
    let visibleGoBack = numberOfActiveQuestion === 0 ? false : true;

    /* Если все ответы получены, скрываем кнопку возврата назад */
    if (testQuestionsCollected) {
      visibleGoBack = false;
    }

    console.log(numberOfActiveQuestion);
    console.log(questionsDataLength);
    console.log("last" + lastQuestion);
    /* Формирование шаблона Вопроса */
    questionsItemTemplate = questionsData.map((currentItem, index) => {
      const question = currentItem.question;
      const options = currentItem.options;
      let numberOfQuestion = index + 1;
      let questionsOptionsTemplate = [];
      let visible = false;

      /* Формирование шаблона Опций Вопроса */
      questionsOptionsTemplate = options.map(curItem => {
        return (
          <QuestionOption
            key={curItem.content}
            type={curItem.type}
            question={question}
            content={curItem.content}
            hoverContent={curItem.hoverContent}
            value={curItem.value}
            numberOfQuestion={numberOfActiveQuestion}
            imgSrc={curItem.imgSrc}
            handleOptionClick={addAnswer}
            handleGoNextQuestion={this.handleGoNextQuestion}
            handleOptionHover={setImage}
          />
        );
      });

      if (numberOfActiveQuestion === index) {
        visible = true;
      }

      /* Если это 4-й вопрос, кладем туда Input с DatePicker */
      if (numberOfQuestion === 4) {
        /* Обертка для функции записывания в стейт ответа с дефолтными аргументами, из инпута приходит только дата */
        const addAnswerWithArguments = (value) => {
          const inputQuestion = question;
          const number = numberOfActiveQuestion;
          const description = 'Выбранная дата';
          /* Когда выбирается дата, происходит переход на следующий слайд */
          this.handleGoNextQuestion();
          return addAnswer(inputQuestion, number, value, description);
        }

        questionsOptionsTemplate.push(
          <Input
            type={'datepicker'}
            hasIcon={true}
            icon={calender}
            inputHandler={addAnswerWithArguments}
          />
        )
      }

      return (
        <QuestionsItem
          key={question}
          number={numberOfQuestion}
          questionsLength={questionsDataLength}
          question={question}
          optionsTemplate={questionsOptionsTemplate}
          visible={visible}
        />
      );
    });

    return (
      <TestQuestionsOptionsWrap>
        {questionsItemTemplate}
        {
          lastQuestion ? (
            <TestQuestionsForm submitHandler={addFormData} />
          ) : (
            ''
          )
        }
        {
          visibleGoBack ? (<TestQuestionsBack onClick={this.handleGoBack}>Назад</TestQuestionsBack>) : ''
        }
      </TestQuestionsOptionsWrap>
    )
  }
}

export default TestQuestionsOptions;