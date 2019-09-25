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
    subOffer: 'С учётом всех ваших потребностей. Через \r\n проверенных Туроператоров.',
    booklet: 'Тайланде',
    directions: [
      directions.dominican,
      directions.turkey,
    ],
  },
  {
    offer: 'Подберём вам тур в Турцию для семейного отдыха за 10 минут.',
    subOffer: 'Страховка от невыезда в подарок.',
    booklet: 'Турции',
    directions: [
      directions.dominican,
      directions.thailand,
    ],
  },
  {
    offer: 'Подбор туров в Доминикану за 10 минут',
    subOffer: 'С учётом всех ваших потребностей. Через \r\n проверенных Туроператоров.',
    booklet: 'Доминикане',
    directions: [
      directions.thailand,
      directions.turkey,
    ],
  },
];
