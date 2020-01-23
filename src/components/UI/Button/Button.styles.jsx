import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: #fff;
  color: #000;
  border: 1px solid #000;

  &:hover {
    background-color: #000;
    color: #fff;
    border: none;
  }
`;

const googleButtonStyles = css`
  background-color: #4285f4;
  color: #fff;
  border: none;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = props => {
  if (props.googleBtn) {
    return googleButtonStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
}

export const ButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: .5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;