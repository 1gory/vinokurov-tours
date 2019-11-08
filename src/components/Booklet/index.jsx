import React from 'react';
import styled from 'styled-components';
import { Subscribe } from 'unstated';
import Input from '../../containers/Input';
import Button from '../Button';
import MailContainer from '../../state/MailState';
import request from '../../img/request-bg.jpg';

const Wrap = styled.div`
  height: 496px;
  padding-top: 48px;
  padding-bottom: 48px;
  padding-left: 98px;
  padding-right: 98px;
  background-color: #474d57;
  background-image: url(${request});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  @media screen and (max-width: 768px) {
    padding-left: 17px;
    padding-right: 17px;
  }
  @media screen and (max-width: 576px) {
    padding-top: 24px;
  }
`;

const LeftColumn = styled.div`
  width: 570px;
  @media screen and (max-width: 768px) {
    width: auto;
  }
`;

const Title = styled.h2`
  font-family: 'GothamPro';
  font-weight: 500;
  font-size: 36px;
  line-height: 44.5px;
  color: #ffffff;
  margin-bottom: 24px;
  @media screen and (max-width: 576px) {
    font-family: 'opensans';
    font-weight: 100;
    font-size: 28px;
    line-height: 35.6px;
    font-weight: 500;
    margin-bottom: 33px;
  }
`;

const Caption = styled.p`
  font-family: 'opensans';
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  max-width: 370px;
  color: #ffffff;
  margin-bottom: 32px;
  @media screen and (max-width: 576px) {
    font-size: 12px;
    line-height: 21.3px;
    margin-bottom: 29px;
  }
`;

const CaptionSmall = styled.p`
  font-family: 'opensans';
  font-weight: 500;
  font-size: 12px;
  line-height: 16.5px;
  color: #ffffff;
  padding-top: 16px;
  margin-bottom: 24px;
  max-width: 370px;
  @media screen and (max-width: 576px) {
    font-size: 12px;
    line-height: 16px;
    padding-top: 18px;
  }
`;

const Success = styled.div`
  font-size: 20px;
  line-height: 1.5em;
  font-family: 'GothamPro';
  color: #fff;
`;

export default ({ bookletDirection }) => (
  <Subscribe to={[MailContainer]}>
    {(mallContainer) => {
      const {
        sendMail,
        setMail,
        state: {
          dataSended,
        },
      } = mallContainer;

      return (
        <Wrap>
          <LeftColumn>
            <Title>
              {'Не знаете, что может понадобиться в  '}
              {bookletDirection}
              ?
            </Title>
            <Caption>
              {`Вышлем вам на почту памятку для туриста,
                необходимые документы, нужные контакты,
                информация и множество других советов.`
              }
            </Caption>
            {dataSended
              ? (
                <Success>
                  Спасибо!
                  <br />
                  Письмо придет в течение нескольких минут.
                  <br />
                  Если письмо не пришло, проверьте папку &laquo;Спам&raquo;.
                </Success>
              ) : (
                <>
                  <Input
                    type="email"
                    theme="transparent"
                    placeholder="Эл. почта"
                    inputHandler={setMail}
                  />
                  <CaptionSmall>
                    {`Нажимая на кнопку "ПОЛУЧИТЬ ПАМЯТКУ",
                      вы даете согласие на обработку своих персональных данных.`}
                  </CaptionSmall>
                  <Button
                    text="получить"
                    width={193}
                    handleClick={sendMail}
                  />
                </>
              )}
          </LeftColumn>
        </Wrap>
      );
    }}
  </Subscribe>
);
