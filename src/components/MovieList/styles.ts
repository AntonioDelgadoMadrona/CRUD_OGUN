import styled from "styled-components";
import { device } from "../../utils/breakpoints";

export const movieListContainer = styled.div`
  width: 100%;
  height: 100%;

  & > h1 {
    font-size: 1.5rem;
    text-align: center;
    color: #fff;
    text-transform: uppercase;
  }
`;

export const StyledPosterImg = styled.div`
  width: 100%;
  height: 350px;
  overflow: hidden;

  & img,
  & svg {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-shadow: 0 5px 5px rgb(0 0 0 / 25%);
  }

  @media ${device.mobileL} {
    height: 280px;
  }

  @media ${device.mobileM} {
    height: 250px;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  background-color: #000;
  padding-top: 10px;
  border-radius: 10px 10px 0 0;
  margin-bottom: -8px;

  & .input__container {
    display: grid;
    grid-template-columns: max-content max-content;
    align-items: center;
    column-gap: 20px;
    justify-content: center;

    @media ${device.tabletS} {
      grid-template-columns: auto;
      grid-template-rows: auto auto;
      column-gap: 0;
    }
  }
`;
