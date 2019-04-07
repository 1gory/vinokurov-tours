import React from 'react';
import styled from 'styled-components';
import { Subscribe } from 'unstated';
import Input from '../../containers/Input';
import RequestContainer from '../../state/RequestState';
import Button from '../Button';
import request from '../../img/request-bg.jpg';

const Wrap = styled.div`
  height: 496px;
  padding-top: 48px;
  padding-bottom: 48px;
  padding-left: 98px;
  padding-right: 98px;
  background-image: url(${request});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  @media screen and (max-width: 768px) {
    padding-left: 17px;
    padding-right: 17px;
  }
  @media screen and (max-width: 576px) {
    padding-top: 26px;
    height: 471px;
    padding-bottom: 28px;
  }
`;

const Column = styled.div`
  width: 370px;
`;

const Title = styled.h2`
  font-family: 'GothamPro';
  font-weight: 500;
  font-size: 36px;
  line-height: 44.5px;
  color: #ffffff;
  margin-bottom: 32px;
  max-width: 600px;
  @media screen and (max-width: 576px) {
    font-family: 'opensans';
    font-weight: 100;
    font-size: 28px;
    line-height: 35.6px;
    font-weight: 500;
    margin-bottom: 30px;
  }
`;

const TopCaption = styled.p`
  font-family: 'opensans';
  font-size: 14px;
  line-height: 22.5px;
  color: #ffffff;
  margin-bottom: 24px;
  padding-top: 8px;
  @media screen and (max-width: 576px) {
    font-size: 12px;
    line-height: 21.3px;
    argin-bottom: 21px;
  }
`;

const BottomCaption = styled.p`
  font-family: 'opensans';
  font-weight: 500;
  font-size: 12px;
  line-height: 16.5px;
  color: #ffffff;
  margin-bottom: 24px;
  @media screen and (max-width: 576px) {
    margin-bottom: 26px;
    padding-top: 9px;
  }
`;

export default () => (
  <Wrap>
    <Column>
      <Title>Оставьте заявку</Title>
      <TopCaption>
        {`Мы ответим вам в течение 20 минут,
      и уже в течение дня подберем лучшее предложение.`}
      </TopCaption>
      <Subscribe to={[RequestContainer]}>
        {(requestContainer) => {
          const {
            state: {
              error,
            },
            setName,
            setPhone,
            sendRequest,
          } = requestContainer;
          return (
            <div>
              <Input
                theme="transparent"
                hasIcon={false}
                type="name"
                placeholder="Имя"
                inputHandler={setName}
              />
              <Input
                error={error}
                theme="transparent"
                hasIcon={false}
                type="phone"
                placeholder="Телефон"
                inputHandler={setPhone}
              />
              <BottomCaption>
                {`Нажимая на кнопку «ОТПРАВИТЬ»,
              вы даете согласие на обработку своих персональных данных.`}
              </BottomCaption>
              <Button
                text="отправить"
                width="170"
                handleClick={sendRequest}
              />
            </div>
          );
        }}
      </Subscribe>
    </Column>
  </Wrap>
);
