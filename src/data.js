import thailand from './img/directions/thailand.jpg';
import russia from './img/directions/russia.jpg';
import turkey from './img/directions/turkey.jpg';

const directions = {
  thailand: {
    name: 'Тайланд',
    link: '/',
    src: thailand,
  },
  russia: {
    name: 'Россия',
    link: '/russia',
    src: russia,
  },
  turkey: {
    name: 'Турция',
    link: '/turkey',
    src: turkey,
  },
};

export default [
  {
    offer: 'Подберем для вас тур в Таиланд за 10 минут',
    subOffer: 'Страховка от невыезда в подарок',
    booklet: 'Тайланде',
    directions: [
      directions.russia,
      directions.turkey,
    ],
  },
  {
    offer: 'Подберем для вас тур в Турцию за 10 минут',
    subOffer: 'Страховка от невыезда в подарок',
    booklet: 'Турции',
    directions: [
      directions.thailand,
      directions.russia,
    ],
  },
  {
    offer: 'Подберем для вас тур в Россию за 10 минут',
    subOffer: 'Страховка от невыезда в подарок',
    booklet: 'России',
    directions: [
      directions.thailand,
      directions.turkey,
    ],
  },
];
