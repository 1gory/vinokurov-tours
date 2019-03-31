import React, { Component } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-date-picker';
import dropdown from '../../img/icons/dropdown-arow.svg';
import MaskedInput from 'react-text-mask';

const InputWrapOutter = styled.div`
  margin-bottom: 16px;
`;

const InputWrap = styled.div`
  position: relative;
  width: 370px;
  height: 56px;
  padding-left: 54px;
  border-top: 1px solid #e9e9e9;
  border-right: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  cursor: pointer;
  margin-bottom: 10px;
  &:hover {
    border-top: 1px solid #aeaeae;
    border-right: 1px solid #aeaeae;
    border-bottom: 1px solid #aeaeae;
  }
  &.input-wrap_focused {
    border-top: 1px solid #aeaeae;
    border-right: 1px solid #aeaeae;
    border-bottom: 1px solid #aeaeae;
  }
  .react-date-picker {
    width: 100%;
    height: 100%;
  }
  .react-date-picker__wrapper {
    width: 100%;
    height: 100%;
    border: 0px;
    padding-left: 24px;
    font-family: 'opensans';
    font-size: 16px;
    line-height: 54px;
  }
  .react-date-picker__wrapper input,
  .react-date-picker__wrapper span {
    color: #aeaeae;
  }
  &:hover .react-date-picker__wrapper input,
  &:hover .react-date-picker__wrapper span,
  &:hover .input-wrap__choose-date {
    color: #474d57;
  }
  & input::-webkit-input-placeholder {
    color: #aeaeae;
  }
  & input::-moz-placeholder {
    color: #aeaeae;
  }
  & input:-moz-placeholder {
    color: #aeaeae;
  }
  & input:-ms-input-placeholder {
    color: #aeaeae;
  }
  &:hover input,
  &:hover input::-webkit-input-placeholder,
  &.input-wrap_focused input::-webkit-input-placeholder {
    color: #474d57;
  }
  &:hover input::-moz-placeholder,
  &.input-wrap_focused input::-moz-placeholder {
    color: #474d57;
  }
  &:hover input:-moz-placeholder,
  &.input-wrap_focused input:-moz-placeholder {
    color: #474d57;
  }
  &:hover input:-ms-input-placeholder,
  &.input-wrap_focused input:-ms-input-placeholder {
    color: #474d57;
  }
  &.input-wrap_focused input,
  &.input-wrap_focused .input-wrap__choose-date,
  &.input-wrap_focused .react-date-picker__wrapper input,
  &.input-wrap_focused .react-date-picker__wrapper span {
    color: #474d57;
  }
  &.input-wrap_choose-date-hidden .input-wrap__choose-date {
    display: none;
  }
`;

const InputDecoration = styled.div`
  position: absolute;
  width: 54px;
  height: 56px;
  background-color: #ed1b24;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  top: -1px;
  left: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: stretch;
  align-items: center;
`;

const InputElem = styled.input`
  display: block;
  height: 100%;
  width: 100%;
  border: 0px;
  padding-left: 24px;
  font-family: 'opensans';
  font-size: 16px;
  line-height: 54px;
  color: #aeaeae;
  &:hover {
    color: #aeaeae;
  }
`;

const DatePickerIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${dropdown});
  background-repeat: no-repeat;
  background-size: 10px 5px;
  background-position: 7px 9.5px;
`;

const DatePickerHideInitialDate = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 54px;
  width: 200px;
  padding-left: 24px;
  font-family: 'opensans';
  font-size: 16px;
  line-height: 54px;
  color: #aeaeae;
  background-color: #ffffff;
`;

const InputIconImg = styled.img`
  display: inline-block;
  width: 24px;
  height: 24px;
`;

const ErrorMessage = styled.div`
  display: inline-block;
  font-family: 'opensans';
  font-size: 10px;
  line-height: 14px;
  color: #ed1b24;
`;

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      isDateChanged: false,
      inputData: '',
      inputDataInvalid: false,
      inputFocused: false,
    }

    this.inputWrap = React.createRef();
  }

  handleChangeDate = (date) => {
    const { inputHandler } = this.props;
    const { isDateChanged } = this.state;
    const InputWrapClassName = this.inputWrap.current.className;
    let newDate = date;
    if (!isDateChanged) {
      this.inputWrap.current.className = `${InputWrapClassName} input-wrap_choose-date-hidden`;
    }

    inputHandler(newDate);

    this.setState({
      date: newDate,
      isDateChanged: true,
    });
  }

  handleToggleDatePicker = () => {
    let InputWrapClassName = this.inputWrap.current.className;
    if (InputWrapClassName.indexOf('input-wrap_focused') === -1) {
      this.inputWrap.current.className = `${InputWrapClassName} input-wrap_focused`;
    } else {
      this.inputWrap.current.className = InputWrapClassName.replace('input-wrap_focused', '');
    }
  }

  handleNameChange = (e) => {
    const { inputHandler } = this.props;
    const input = e.target;
    const name = e.target.value;
    const regExpr = new RegExp(/^[а-яА-Яa-zA-Z\s-ё]*$/);
    const isNameValid = regExpr.test(name);

    if (isNameValid) {
      inputHandler(name);

      this.setState({
        inputData: name,
      });
    }
  }

  handlePhoneChange = (e) => {
    const { inputHandler } = this.props;
    const input = e.target;
    const number = input.value;
    const regExpr = /\d+/g;
    const editedNumber = number.match(regExpr).join('');

    console.log(number.length);

    if (editedNumber.length === 11) {
      inputHandler(number);

      this.setState({
        inputData: number,
        inputDataInvalid: false,
      })
    } else {
      inputHandler('');

      this.setState({
        inputData: number,
        inputDataInvalid: true,
      })
    }
  };

  handleMailChange = (e) => {
    const { inputHandler } = this.props;
    const input = e.target;
    const mail = input.value;

    inputHandler(mail);

    this.setState({
      inputData: mail,
    })
  }

  handleInputFocus = () => {
    const InputWrapClassName = this.inputWrap.current.className;
    this.inputWrap.current.className = `${InputWrapClassName} input-wrap_focused`;

    this.setState({
      inputFocused: true,
    })
  }

  handleInputBlur = () => {
    const InputWrapClassName = this.inputWrap.current.className;
    this.inputWrap.current.className = InputWrapClassName.replace('input-wrap_focused', '');

    this.setState({
      inputFocused: false,
    })
  }

  render() {
    const { icon, hasIcon, type, placeholder, inputHandler, error } = this.props;
    const { inputData, inputDataInvalid, inputFocused } = this.state;
    const isErrorMessageVisible = error || (inputDataInvalid && inputFocused);
    console.log(error);
    console.log(error || (inputDataInvalid && inputFocused));
    console.log("Обновился компонент инпут");

    let inputType = null;
    switch (type) {
      case 'datepicker':
        inputType = (
          <div>
            <DatePicker
              onChange={this.handleChangeDate}
              value={this.state.date}
              minDate={this.state.date}
              clearIcon={null}
              calendarIcon={
                <DatePickerIcon />
              }
              onCalendarOpen={this.handleToggleDatePicker}
              onCalendarClose={this.handleToggleDatePicker}
            />
            <DatePickerHideInitialDate className='input-wrap__choose-date'>Выберите дату</DatePickerHideInitialDate>
          </div>
        );
        break;
      case 'name':
        inputType = (
          <InputElem
            placeholder={placeholder}
            onChange={this.handleNameChange}
            value={inputData}
            onFocus={this.handleInputFocus}
            onBlur={this.handleInputBlur}
          />
        );
        break;
      case 'phone':
        inputType = (
          <MaskedInput
            mask={['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholder={placeholder}
            guide={true}
            onChange={this.handlePhoneChange}
            keepCharPositions={true}
            value={inputData}
            render={(ref, props) => (
              <InputElem ref={ref} {...props} />
            )}
            onFocus={this.handleInputFocus}
            onBlur={this.handleInputBlur}
          />
        );
        break;
      case 'mail':
        inputType = (
          <InputElem
            placeholder={placeholder}
            onChange={this.handleMailChange}
            value={inputData}
            onFocus={this.handleInputFocus}
            onBlur={this.handleInputBlur}
          />
        );
        break;
      default:
        inputType = (
          <InputElem
            placeholder={placeholder}
            onChange={this.handleNameChange}
          />
        );
    }
    
    return (
      <InputWrapOutter >
        <InputWrap ref={this.inputWrap}>
          {
            hasIcon ? (
              <InputDecoration>
                <InputIconImg src={icon} />
              </InputDecoration>
            ) : (
              ''
            )
          }

          {inputType}
        </InputWrap>
        {
          isErrorMessageVisible ? (
            <ErrorMessage>Введите номер полностью</ErrorMessage>
          ) : (
            ''
          )
        }
      </InputWrapOutter>
    )
  }
}

export default Input;