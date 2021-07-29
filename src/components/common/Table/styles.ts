// DEPENDENCIES
import styled from "styled-components";

import { device } from "../../../utils/breakpoints";

export const StyledTable = styled.div`
  padding: 20px;
  background-color: #000;
  border-radius: 10px;
  width: 100%;
  height: auto;
  min-height: 650px;
  box-sizing: border-box;
`;

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, auto);
  column-gap: 20px;
  row-gap: 35px;
  width: 100%;
  margin-bottom: 20px;

  & img.noResults {
    grid-column: 1 / -1;
    align-self: center;
    margin: 40px auto 20px auto;

    @media ${device.tabletS} {
      width: 300px;
    }
  }

  @media ${device.tabletL} {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, auto);
  }

  @media ${device.tabletM} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(7, auto);
  }

  @media ${device.tabletS} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(10, auto);
  }

  @media ${device.mobileL} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(10, auto);
  }

  @media ${device.mobileM} {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(20, auto);
  }
`;

export const StyledItem = styled.div`
  width: 100%;
  color: #fff;
  text-align: center;

  &:hover {
    cursor: pointer;
    opacity: 0.9;

    & img {
      transform: scale(1.1);
      transition-duration: 1s;
    }
  }

  & h4 {
    margin-top: 5px;
    margin-bottom: 8px;
    font-size: 1rem;
  }

  & > div.info {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 15px;
    justify-content: center;
    color: #fff;
    opacity: 0.8;
  }
`;
