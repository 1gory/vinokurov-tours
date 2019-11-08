import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';

const Wrap = styled.section`
  height: 100px;
  padding-left: 98px;
  padding-right: 98px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: flex-start;
  background-color: #474d57;
  padding-top: 21px;
  @media screen and (max-width: 768px) {
    padding-left: 17px;
    padding-right: 17px;
    padding-bottom: 48px;
    height: auto;
    display: block;
    padding-left: 68.5px;
    margin-left: -68.5px;
    padding-top: 25px;
  }
`;

const LeftColumn = styled.div`
  display: inline-block;
  max-width: 337px;
  padding-top: 12px;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const RightColumn = styled.div`
  display: inline-block;
  width: 250px;
  text-align: right;
  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
    padding-top: 29px;
    text-align: center;
  }
`;

const Phone = styled.a`
  font-family: 'opensans';
  font-weight: 900;
  font-size: 24px;
  line-height: 31.2px;
  color: #ffffff;
  text-decoration: none;
  outline: none;
  @media screen and (max-width: 768px) {
    display: inline-block;
  }
`;

// const NavElement = styled.div`
//   display: block;
//   width: 100%;
//   @media screen and (max-width: 768px) {
//     padding-top: 29px;
//     text-align: center;
//   }
// `;
// const Link = styled.a`
//   display: inline-block;
//   font-family: 'opensans';
//   font-weight: 500;
//   font-size: 14px;
//   line-height: 21px;
//   color: #ffffff;
//   border-bottom: 1px dashed #ffffff;
//   cursor: pointer;
//   text-decoration: none;
//   outline: none;
//   &:hover {
//     border-bottom: 0px;
//     border-bottom: 1px dashed #474d57;
//   }
//   @media screen and (max-width: 768px) {
//     display: inline-block;
//   }
// `;

export default () => (
  <Wrap>
    <LeftColumn>
      <Logo
        theme="white"
      />
    </LeftColumn>
    <RightColumn>
      <div>
        <Phone href="tel:+79031679008">+7 (903) 167-90-08</Phone>
      </div>
      {/* <Link href="/">Заказать обратный звонок</Link> */}
    </RightColumn>
  </Wrap>
);
