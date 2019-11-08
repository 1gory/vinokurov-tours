import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import linkIconWhite from '../../img/icons/link-white.svg';
import linkIcon from '../../img/icons/link.svg';
import close from '../../img/icons/close.svg';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '95%',
    height: '95%',
  },
};

const TermsLink = styled.button`
  display: inline-block;
  font-family: 'opensans';
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  color: #ed1b24;
  width: auto;
  position: relative;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  background: none;
  border: 0;
  appearance: none;
  padding-top: 12px;
  &:hover {
    text-decoration: underline;
  }
  &:after {
    content: "";
    display: inline-block;
    background-image: url(${linkIcon});
    background-repeat: no-repeat;
    background-size: 16px 16px;
    background-position: top right;
    width: 16px;
    height: 16px;
    padding-left: 7px;
  }
  @media screen and (max-width: 768px) {
    color: #fff;
    &:after {
      background-image: url(${linkIconWhite});
    }
  }
`;
const A = styled.a`
  display: inline-block;
  font-family: 'opensans';
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #ed1b24;
  width: auto;
  position: relative;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  background: none;
  border: 0;
  appearance: none;
  &:hover {
    text-decoration: underline;
  }
  &:after {
    content: "";
    display: inline-block;
    background-image: url(${linkIcon});
    background-repeat: no-repeat;
    background-size: 16px 16px;
    background-position: top right;
    width: 16px;
    height: 16px;
    padding-left: 7px;
  }
`;

const H1 = styled.h1`
  font-family: 'GothamPro';
  font-weight: 900;
  font-style: normal;
  font-size: 26px;
  line-height: 35.6px;
  color: #343434;
  letter-spacing: normal;
  margin-bottom: 35px;
  @media screen and (max-width: 768px) {
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 25px;
  }
`;

const H4 = styled.h4`
  font-family: 'GothamPro';
  font-size: 20px;
  line-height: 21px;
  color: #474d57;
  margin-top: 18px;
`;
const P = styled.p`
  font-family: 'opensans';
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #474d57;
  margin-top: 9px;
  &:first-child {
    margin-top: 5px;
  }
  @media screen and (max-width: 450px) {
    margin-top: 18px;
    &:first-child {
      margin-top: 5px;
    }
  }
`;
const UL = styled.ul`
  font-family: 'opensans';
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #474d57;
  margin-top: 9px;
  @media screen and (max-width: 450px) {
    margin-top: 18px;
  }
`;
const LI = styled.li`
  font-family: 'opensans';
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #474d57;
  margin-top: 5px;
`;
const Close = styled.button`
  appearance: none;
  width: auto;
  padding: 0;
  position: absolute;
  top: 20px;
  right: 20px;
  border: 0;
  background: transparent;
  &:after {
    content: "";
    display: inline-block;
    background-image: url(${close});
    background-repeat: no-repeat;
    background-size: 16px 16px;
    background-position: top right;
    width: 16px;
    height: 16px;
    padding-left: 7px;
  }
`;

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('body');

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.title = 'Условия оплаты';
    this.text = 'Общество с ограниченной ответственностью ООО&laquo;Олинклюзив&raquo;';
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { modalIsOpen } = this.state;
    return (
      <div>
        <TermsLink onClick={this.openModal}>{this.title}</TermsLink>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <H1>Общество с ограниченной ответственностью ООО&laquo;Олинклюзив&raquo;</H1>
          <H4>Условия оплаты</H4>
          <Close type="button" onClick={this.closeModal} />

          <div>
            <H4>Контакты:</H4>
            <P>
Фактический адрес: 141021 МО г.Мытищи, ул.Сукромка, д.24а
              <br />
            Электронная почта: enigmatuur@mail.ru
              <br />
            Телефоны: 8-903-167-90-08.
            </P>

            <H4>Реквизиты: </H4>
            <P>
ООО&laquo;Олинклюзив&raquo;
              <br />
            ИНН 5029176006  / ОГРН  1135029006375
              <br />
            Юридический адрес: 141021 МО г.Мытищи, ул.Сукромка, д.24а
              <br />
            Тел./факс: (903) 167-90-08, (916) 090-13-32.
            </P>

            <H4>Сфера деятельности:</H4>
            <P>
Продажа пакетных туров, авиа и&nbsp;ж/д билетов, помощь
            в&nbsp;получении виз и&nbsp;заграничных паспортов.
            Организацией экскурсий и&nbsp;полным сопровождением клиентов
            во&nbsp;время их&nbsp;путешествий.
            </P>

            <H4>Способы оплаты:</H4>
            <UL>
              <LI>Наличный расчёт в&nbsp;офисе компании;</LI>
              <LI>Банковской картой через платёжный терминал в&nbsp;офисе компании;</LI>
              <LI>Банковской картой, он-лайн;</LI>
            </UL>
            <P>
Для оплаты услуги с&nbsp;помощью банковской карты,
              необходимо перейти по&nbsp;ссылке прикреплённой
              к&nbsp;письму от&nbsp;нашей организации и&nbsp;проследовать
              по&nbsp;инструкции. Оплата происходит через ПАО СБЕРБАНК
              с&nbsp;использованием банковских карт следующих платёжных систем:
            </P>
            <UL>
              <LI>МИР;</LI>
              <LI>VISA International;</LI>
              <LI>Mastercard Worldwide;</LI>
              <LI>JCB.</LI>
            </UL>

            <H4>Условия оплаты в&nbsp;рассрочку:</H4>
            <A href="https://www.pokupay.ru/credit_terms" rel="nofollow" target="_blank">pokupay.ru</A>

            <H4>Возврат товара:</H4>
            <P>
В&nbsp;случае расторжения Договора по&nbsp;инициативе Заказчика,
            отказа Заказчика от&nbsp;исполнения Договора&nbsp;и (или) отказа
            Заказчика от&nbsp;забронированного и&nbsp;подтвержденного турпродукта,
            Заказчик обязан оплатить Исполнителю фактически понесенные Исполнителя
            расходы по&nbsp;исполнению настоящего Договора (в&nbsp;том числе денежные
            средства, переданные Исполнителем третьим лицам (туроператору, принимающей
            стороне, перевозчику, страховщику или иным лицам), в&nbsp;том числе
            неустойки, оплаченные Исполнителем указанным лицам в&nbsp;связи
            с&nbsp;отказом Заказчика от&nbsp;турпродукта), которые были осуществлены
            Исполнителем до&nbsp;момента получения от&nbsp;Заказчика письменного
            заявления о&nbsp;расторжении договора (заявления об&nbsp;отказе
            от&nbsp;турпродукта, уведомления об&nbsp;отказе от&nbsp;исполнения
            Договора). Размер фактических расходов Исполнителя,
            подлежащих возмещению Заказчиком, может составить при расторжении
            Договора&nbsp;и (или) отказа Заказчика от&nbsp;турпродукта
            </P>

            <UL>
              <LI>
в&nbsp;срок свыше 30&nbsp;суток до&nbsp;начала поездки&nbsp;&mdash;
             10&nbsp;% от&nbsp;общей цены турпродукта, указанной в&nbsp;Договоре;
              </LI>
              <LI>
в&nbsp;срок от&nbsp;30&nbsp;до&nbsp;14&nbsp;суток
             до&nbsp;начала поездки&nbsp;&mdash; 25&nbsp;% от&nbsp;общей цены
             турпродукта, указанной в&nbsp;Договоре;
              </LI>
              <LI>
в&nbsp;срок от&nbsp;14&nbsp;до&nbsp;7&nbsp;суток
             до&nbsp;начала поездки&nbsp;&mdash; 50&nbsp;% от&nbsp;общей цены
             турпродукта, указанной в&nbsp;Договоре;
              </LI>
              <LI>
в&nbsp;срок от&nbsp;7&nbsp;до&nbsp;3&nbsp;суток
             до&nbsp;начала поездки&nbsp;&mdash; 75&nbsp;% от&nbsp;общей цены
             турпродукта, указанной в&nbsp;Договоре;
              </LI>
              <LI>
в&nbsp;срок менее 3&nbsp;суток до&nbsp;начала поездки, а&nbsp;
            также при отказе Заказчика от&nbsp;турпродукта, сроки которого
            выпадают на&nbsp;периоды &laquo;высоких дат&raquo;&nbsp;&mdash;
            праздники, каникулы, специальные программы (в&nbsp;том числе
            олимпиады, чемпионаты) и&nbsp;прочие неординарные даты
            и&nbsp;события&nbsp;&mdash; 95&nbsp;% общей цены турпродукта,
            указанной в&nbsp;Договоре.
              </LI>
            </UL>

            <P>
Возврат денежных средств, производится на&nbsp;ваш банковский
            счёт в&nbsp;течение 5-30 рабочих дней (срок зависит от&nbsp;банка,
            который выдал вашу банковскую карту).
            </P>

            <H4>Процесс передачи данных:</H4>
            <P>
Для оплаты (ввода реквизитов Вашей карты) Вы&nbsp;будете
            перенаправлены на&nbsp;платёжный шлюз ПАО СБЕРБАНК.
            Соединение с&nbsp;платёжным шлюзом и&nbsp;передача информации
            осуществляется в&nbsp;защищённом режиме с&nbsp;использованием
            протокола шифрования SSL. В&nbsp;случае если Ваш банк поддерживает
            технологию безопасного проведения интернет-платежей Verified
            By&nbsp;Visa, MasterCard SecureCode, MIR Accept, J-Secure
            для проведения платежа также может потребоваться ввод специального
            пароля.
            </P>
            <P>
Настоящий сайт поддерживает 256-битное шифрование.
            Конфиденциальность сообщаемой персональной информации обеспечивается
            ПАО СБЕРБАНК. Введённая информация не&nbsp;будет предоставлена
            третьим лицам за&nbsp;исключением случаев, предусмотренных
            законодательством РФ. Проведение платежей по&nbsp;банковским картам
            осуществляется в&nbsp;строгом соответствии с&nbsp;требованиями
            платёжных систем МИР, Visa Int., MasterCard Europe Sprl, JCB.
            </P>


          </div>
        </Modal>
      </div>
    );
  }
}
