import styled from "styled-components";

interface IExtendedProps {
  showError: string;
}

export const InputContainer = styled.div`
  display: block;
  width: auto;
  height: auto;
`;

export const StyledLabel = styled.label`
  padding-left: 10px;
  font-weight: bold;
  font-size: 1.1rem;
  color: #fff;
`;

export const StyledInput = styled.input<IExtendedProps>`
  display: block;
  width: auto;
  height: 35px;
  border: 1px solid lightgray;
  padding: 0 10px;
  line-height: 1.5;
  font-weight: 300;
  background-color: #fff;
  background-clip: padding-box;
  -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  -o-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  flex: 1 1 auto;
  border-radius: 5px;
  font-size: 1.1rem;
  margin: 5px 0;

  &:focus {
    outline: none;
  }

  ${({ showError }) =>
    showError &&
    `
        border: 1px solid #ed6071;
  `}
`;

export const StyledError = styled.div`
  min-height: 18px;
  width: 100%;
  padding-left: 10px;

  & span {
    color: #ed6071;
    font-size: 1rem;
    font-weight: bold;
  }
`;
