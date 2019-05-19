import starthree from '../../img/icons/stars-3.svg';
import starfour from '../../img/icons/stars-4.svg';
import starfive from '../../img/icons/stars-5.svg';
import starthreew from '../../img/icons/stars-3-white.svg';
import starfourw from '../../img/icons/stars-4-white.svg';
import starfivew from '../../img/icons/stars-5-white.svg';
import s11 from '../../img/quiz/views.jpg';
import s12 from '../../img/quiz/beach.jpg';
import s13 from '../../img/quiz/food.jpg';
import s21 from '../../img/quiz/3stars.jpg';
import s22 from '../../img/quiz/4srtars.jpg';
import s23 from '../../img/quiz/5stars.jpg';
import s31 from '../../img/quiz/1week.jpg';
import s32 from '../../img/quiz/2week.jpg';
import s33 from '../../img/quiz/3week.jpg';
import s41 from '../../img/quiz/date.jpg';
import s51 from '../../img/quiz/post.jpg';


const stepsDate = [
  {
    question: 'Что для вас отдых?',
    imgSrc: s13,
    options: [
      {
        content: 'Знакомство с местной культурой и живописные пейзажи',
        value: 'Знакомство с местной культурой и живописные пейзажи',
        type: 'text',
        imgSrc: s11,
      },
      {
        content: 'Райский пляж недалеко от отеля',
        value: 'Райский пляж недалеко от отеля',
        type: 'text',
        imgSrc: s12,
      },
      {
        content: 'Экзотические фрукты и морепродукты',
        value: 'Экзотические фрукты и морепродукты',
        type: 'text',
        imgSrc: s13,
      },
    ],
  },
  {
    question: 'Отели какого уровня предпочитаете?',
    imgSrc: s23,
    options: [
      {
        content: starthree,
        hoverContent: starthreew,
        value: '3 звезды',
        type: 'img',
        imgSrc: s21,
      },
      {
        content: starfour,
        hoverContent: starfourw,
        value: '4 звезды',
        type: 'img',
        imgSrc: s22,
      },
      {
        content: starfive,
        hoverContent: starfivew,
        value: '5 звезд',
        type: 'img',
        imgSrc: s23,
      },
    ],
  },
  {
    question: 'Сколько будет длиться ваш отдых?',
    imgSrc: s33,
    options: [
      {
        content: '1 неделя',
        value: '1 неделя',
        type: 'text',
        imgSrc: s31,
      },
      {
        content: '2 недели',
        value: '2 недели',
        type: 'text',
        imgSrc: s32,
      },
      {
        content: '3 недели',
        value: '3 недели',
        type: 'text',
        imgSrc: s33,
      },
    ],
  },
  {
    question: 'С какого числа планируете начинать',
    options: [],
    imgSrc: s41,
  },
  {
    question: 'Отправьте данные по опросу нам',
    options: [],
    imgSrc: s51,
  },
];

export default stepsDate;
