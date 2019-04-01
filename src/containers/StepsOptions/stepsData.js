import starthree from '../../img/icons/stars-3.svg';
import starfour from '../../img/icons/stars-4.svg';
import starfive from '../../img/icons/stars-5.svg';
import starthreew from '../../img/icons/stars-3-white.svg';
import starfourw from '../../img/icons/stars-4-white.svg';
import starfivew from '../../img/icons/stars-5-white.svg';
import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jpg';
import img3 from '../../img/3.jpg';

const stepsDate = [
  {
    question: 'Что для вас отдых в Тайланде?',
    options: [
      {
        content: 'Знакомство с местной культурой и живописные пейзажи',
        value: 'Знакомство с местной культурой и живописные пейзажи',
        type: 'text',
        imgSrc: img1,
      },
      {
        content: 'Райский пляж недалеко от отеля',
        value: 'Райский пляж недалеко от отеля',
        type: 'text',
        imgSrc: img2,
      },
      {
        content: 'Экзотические фрукты и морепродукты',
        value: 'Экзотические фрукты и морепродукты',
        type: 'text',
        imgSrc: img3,
      },
    ],
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
    ],
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
    ],
  },
  {
    question: 'С какого числа планируете начинать',
    options: [],
  },
  {
    question: 'Отправьте данные по опросу нам',
    options: [],
  },
];

export default stepsDate;
