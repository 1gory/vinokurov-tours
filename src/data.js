import thailand from './img/directions/thailand.jpg';
import dominican from './img/directions/dominican.jpg';
import turkey from './img/directions/turkey.jpg';

const directions = {
  thailand: {
    name: 'Тайланд',
    link: '/',
    src: thailand,
  },
  dominican: {
    name: 'Доминикана',
    link: '/dominican',
    src: dominican,
  },
  turkey: {
    name: 'Турция',
    link: '/turkey',
    src: turkey,
  },
};

export default [
  {
    offer: 'Подбор туров в Таиланд за 10 минут',
    booklet: 'Тайланде',
    directions: [
      directions.dominican,
      directions.turkey,
    ],
  },
  {
    offer: 'Подбор Туров в Турцию за 10 минут',
    booklet: 'Турции',
    directions: [
      directions.dominican,
      directions.thailand,
    ],
  },
  {
    offer: 'Подбор туров в Доминикану за 10 минут',
    booklet: 'Доминикане',
    directions: [
      directions.thailand,
      directions.turkey,
    ],
  },
];
