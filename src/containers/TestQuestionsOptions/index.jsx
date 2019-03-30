import React, { Component } from 'react';
import styled from 'styled-components';
import QuestionOption from '../../components/QuestionOption';
import Input from '../../containers/Input';
import starthree from '../../img/icons/stars-3.svg';
import starfour from '../../img/icons/stars-4.svg';
import starfive from '../../img/icons/stars-5.svg';
import starthreew from '../../img/icons/stars-3-white.svg';
import starfourw from '../../img/icons/stars-4-white.svg';
import starfivew from '../../img/icons/stars-5-white.svg';
import backlink from '../../img/icons/back-link.svg';

const TestQuestionsOptionsWrap = styled.div`
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

const QuestionsForm = styled.form`
  
`;

const QuestionsItem = (props) => {

  const { number, questionsLength, question, optionsTemplate, visible } = props;

  return (
    <QuestionsItemWrap visible={visible} >
      <QuestionsCount>Вопрос {number}/{questionsLength}</QuestionsCount>
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
            },
            {
              content: 'Райский пляж недалеко от отеля',
              value: 'Райский пляж недалеко от отеля',
              type: 'text',
            },
            {
              content: 'Экзотические фрукты и морепродукты',
              value: 'Экзотические фрукты и морепродукты',
              type: 'text',
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
    const { container: {
      addAnswer,
    } } = this.props;
    const { numberOfActiveQuestion, questionsData } = this.state;
    const questionsDataLength = questionsData.length;
    let questionsItemTemplate = [];
    let visibleGoBack = numberOfActiveQuestion === 0 ? false : true;

    console.log(questionsDataLength);

    questionsItemTemplate = questionsData.map((currentItem, index) => {
      const question = currentItem.question;
      const options = currentItem.options;
      let numberOfQuestion = index + 1;
      let questionsOptionsTemplate = [];
      let visible = false;

      console.log(options);
      console.log(options.length);
      questionsOptionsTemplate = options.map(curItem => {
        return (
          <QuestionOption
            key={curItem.content}
            type={curItem.type}
            question={question}
            content={curItem.content}
            hoverContent={curItem.hoverContent}
            value={curItem.value}
            handleOptionClick={addAnswer}
            handleGoNextQuestion={this.handleGoNextQuestion}
            numberOfQuestion={numberOfQuestion}
          />
        );
      });

      if (numberOfActiveQuestion === index) {
        visible = true;
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
        <QuestionsForm>
          {questionsItemTemplate}
          {
            visibleGoBack ? (<TestQuestionsBack onClick={this.handleGoBack}>Назад</TestQuestionsBack>) : ''
          }
        </QuestionsForm>
        <Input />
      </TestQuestionsOptionsWrap>
    )
  }
}

export default TestQuestionsOptions;