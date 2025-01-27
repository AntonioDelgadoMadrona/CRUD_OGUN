import styled from "styled-components";
import { device } from "../../../utils/breakpoints";
import { InputContainer } from "./../../common/Input/styles";

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  color: #ffffff;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  & h2 {
    font-size: 30px;
    margin-top: 0;
    text-align: center;
  }

  & img {
    display: none;
    width: 250px;
    height: auto;
    margin: 0 auto 50px auto;

    @media ${device.tabletL} {
      display: block;
    }
  }

  & label {
    color: #fff;
  }

  & ${InputContainer} {
    margin: 15px auto;

    & > input {
      width: 300px;
    }
  }

  & button {
    display: block;
    margin: 10px auto;
  }
`;
