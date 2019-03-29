import React, { Component } from 'react';
import styled from 'styled-components';
import QuestionOption from '../../components/QuestionOption';
import starthree from '../../img/icons/stars-3.svg';
import starfour from '../../img/icons/stars-4.svg';
import starfive from '../../img/icons/stars-5.svg';

const TestQuestionsOptionsWrap = styled.div`
  width: 370px;
`;

const QuestionsCount = styled.p`
  font-family: 'opensans';
  font-size: 16px;
  line-height: 32px;
  color: #aeaeae;
  letter-spacing: normal;
`;

const QuestionsForm = styled.form`
  
`;

const QuestionsItem = (props) => {

  const { number, questionsLength, question, options } = props;

  return (
    <QuestionsItem>
      <QuestionsCount>Вопрос {number}/{questionsLength}</QuestionsCount>
    </QuestionsItem>
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
              title: 'Знакомство с местной культурой и живописные пейзажи',
              value: 'Знакомство с местной культурой и живописные пейзажи',
              type: 'text',
            },
            {
              title: 'Райский пляж недалеко от отеля',
              value: 'Райский пляж недалеко от отеля',
              type: 'text',
            },
            {
              title: 'Экзотические фрукты и морепродукты',
              value: 'Экзотические фрукты и морепродукты',
              type: 'text',
            },
          ]
        },
        {
          question: 'Отели какого уровня предпочитаете?',
          options: [
            {
              title: starthree,
              value: 3,
              type: 'img',
            },
            {
              title: starfour,
              value: 4,
              type: 'img',
            },
            {
              title: starfive,
              value: 5,
              type: 'img',
            },
          ]
        },
        {
          question: 'Сколько будет длиться ваш отдых?',
          options: [
            {
              title: '1 неделя',
              value: 1,
              type: 'text',
            },
            {
              title: '2 недели',
              value: 2,
              type: 'text',
            },
            {
              title: '3 недели',
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

  render () {
    const { questionsData } = this.state;
    const questionsDataLength = questionsData.length;
    let questionsItemTemplate = [];
    console.log(questionsDataLength);
    questionsItemTemplate = questionsData.map((currentItem, index) => {
      const question = currentItem.question;
      const options = currentItem.options;
      let questionsOptionsTemplate = [];
      console.log(options);
      console.log(options.length);
      questionsOptionsTemplate = options.map(curItem => (
        <QuestionOption
          key={curItem.title}
          type={curItem.type}
          title={curItem.title}
          value={curItem.value}
        />
      ));

      return (
        <QuestionsItem key={question} number={index} questionsLength={questionsDataLength} question={question}>
          {questionsOptionsTemplate}
          </QuestionsItem>
      );
    });
    // const { type, title, value, imgSrc, handleOptionClick, handleOptionHover } = props;
    console.log(questionsItemTemplate);
    return (
      <TestQuestionsOptionsWrap>
        <QuestionsForm>
          {questionsItemTemplate}
        </QuestionsForm>
      </TestQuestionsOptionsWrap>
    )
  }
}

export default TestQuestionsOptions;