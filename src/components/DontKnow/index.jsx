import React from 'react';
import styled from 'styled-components';
import { Subscribe } from 'unstated';
import Input from '../../containers/Input';
import Button from '../Button';
import MailContainer from '../../state/MailState';

const Wrap = styled.div`
  height: 496px;
  padding-top: 48px;
  padding-bottom: 48px;
  padding-left: 98px;
  padding-right: 98px;
  background-color: #474d57;
  margin-left: -98px;
  margin-right: -98px;
  @media screen and (max-width: 768px) {
    margin-left: -17px;
    margin-right: -17px;
  }
`;

const LeftColumn = styled.div`
  width: 570px;
`;

const Title = styled.h2`
  font-family: 'GothamPro';
  font-size: 36px;
  line-height: 44.5px;
  color: #ffffff;
  margin-bottom: 24px;
`;

const Caption = styled.p`
  font-family: 'opensans';
  font-size: 14px;
  line-height: 21px;
  width: 370px;
  color: #ffffff;
  margin-bottom: 32px;
`;

const CaptionSmall = styled.p`
  font-family: 'opensans';
  font-size: 12px;
  line-height: 16.5px;
  color: #ffffff;
  padding-top: 32px;
  margin-bottom: 24px;
`;

export default () => (
  <Wrap>
    <LeftColumn>
      <Title>Не знаете, что может понадобиться в Таиланде?</Title>
      <Caption>
        {
          `Вышлем вам на почту памятку для туриста,
           необходимые документы, нужные контакты,
           информация и множество других советов.`
        }
      </Caption>
      <Subscribe to={[MailContainer]}>
        {(mallContainer) => {
          const {
            setMail,
          } = mallContainer;

          return (
            <Input
              type="mail"
              theme="transparent"
              placeholder="Эл. почта"
              inputHandler={setMail}
            />
          );
        }}
      </Subscribe>
      <CaptionSmall>
        {`Нажимая на кнопку "ПОЛУЧИТЬ ПАМЯТКУ",
        вы даете согласие на обработку своих персональных данных.`}
      </CaptionSmall>
      <Button
        text="получить"
        width={193}
      />
    </LeftColumn>
  </Wrap>
);
