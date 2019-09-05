import React from 'react';
import styled from 'styled-components';
import {
  YMaps,
  Map as YandexMap,
  Placemark,
  GeolocationControl,
} from 'react-yandex-maps';
import PageWrapper from '../SectionWrap';
import location from '../../img/icons/contacts-location.svg';
import phone from '../../img/icons/contacts-phone.svg';
import mail from '../../img/icons/contacts-mail.svg';
import clock from '../../img/icons/contacts-clock.svg';

const Wrap = styled.section`
  padding-left: 98px;
  margin-left: -98px;
  margin-right: -98px;
  padding-top: 80px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: flex-start;
  @media screen and (max-width: 992px) {
    display: block;
  }
  @media screen and (max-width: 768px) {
    margin-left: -17px;
    margin-right: -17px;
    padding-left: 17px;
    padding-right: 17px;
  }
  @media screen and (max-width: 576px) {
    padding-top: 24px;
  }
`;

const LeftColumn = styled.div`
  width: 430px;
  padding-top: 24px;
  margin-right: 30px;
  flex: 0 0 430px;
  padding-bottom: 15px;
  @media screen and (max-width: 992px) {
    display: block;
  }
  @media screen and (max-width: 576px) {
    display: block;
    width: 100%;
    padding-bottom: 24.9px;
  }
`;

const RightColumn = styled.div`
  position: relative;
  flex: 0 1 776px;
  height: 527px;
  @media screen and (max-width: 992px) {
    display: block;
    flex: none;
    height: 527px;
    margin-left: -98px;
  }
  @media screen and (max-width: 768px) {
    margin-left: -17px;
    margin-right: -17px;
  }
`;

const Title = styled.h2`
  font-family: 'GothamPro';
  font-weight: 500;
  font-size: 36px;
  line-height: 44.5px;
  color: #474d57;
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

const Info = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: flex-start;
  margin-bottom: 17px;
`;

const InfoTitle = styled.h4`
  display: inline-block;
  font-family: 'opensans';
  font-weight: 900;
  font-size: 16px;
  line-height: 24px;
  color: #474d57;
  max-width: 170px;
  padding-left: 32px;
  position: relative;
  &:before {
    position: absolute;
    content: '';
    left: 0px;
    top: 0px;
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const InfoTitleLocation = styled(InfoTitle)`
  &:before {
    background-image: url(${location});
  }
`;

const InfoTitlePhone = styled(InfoTitle)`
  &:before {
    background-image: url(${phone});
  }
`;

const InfoTitleMail = styled(InfoTitle)`
  &:before {
    background-image: url(${mail});
  }
`;

const InfoTitleClock = styled(InfoTitle)`
  &:before {
    background-image: url(${clock});
  }
`;

const InfoCaption = styled.p`
  display: inline-block;
  width: 228.7px;
  font-family: 'opensans';
  font-size: 14px;
  line-height: 21px;
  color: #474d57;
  @media screen and (max-width: 576px) {
    width: 170px;
  }
`;

export const Phone = styled(InfoCaption)`
  text-decoration: none;
`;

const VKwidget = styled.div`
  padding-top: 25px;
`;

export default () => {
  const mapStyle = {
    width: '100%',
    position: 'absolute',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  };

  const mapState = {
    center: [55.912408, 37.746960],
    zoom: 16,
  };

  return (
    <PageWrapper>
      <Wrap>
        <LeftColumn>
          <Title>Контакты</Title>
          <div>
            <Info>
              <InfoTitleLocation>Адрес:</InfoTitleLocation>
              <InfoCaption>141008, г. Мытищи, улица Колпакова, дом 2</InfoCaption>
            </Info>
            <Info>
              <InfoTitlePhone>Телефон:</InfoTitlePhone>
              <Phone as={styled.a``} href="tel:+79031679008">+7 (903) 167-90-08</Phone>
            </Info>
            <Info>
              <InfoTitleMail>Эл. почта:</InfoTitleMail>
              <InfoCaption>info@vinokurov-tours.ru</InfoCaption>
            </Info>
            <Info>
              <InfoTitleClock>График:</InfoTitleClock>
              <InfoCaption>
                Пн–Пт: 9:00 – 17:00
                <br />
                Сб-Вс: выходной
              </InfoCaption>
            </Info>
          </div>
          <VKwidget>
            <div id="vk_groups" />
          </VKwidget>
        </LeftColumn>
        <RightColumn>
          <YMaps>
            <YandexMap
              state={mapState}
              style={mapStyle}
            >
              <Placemark
                defaultGeometry={mapState.center}
                options={
                  {
                    preset: 'islands#circleIcon',
                    iconColor: '#ed1b24',
                  }
                }
              />
              <GeolocationControl options={{ float: 'left' }} />
            </YandexMap>
          </YMaps>
        </RightColumn>
      </Wrap>
    </PageWrapper>
  );
};
