import styled from "styled-components";
import { device } from "../../../utils/breakpoints";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: #fef6b9;
  background-color: transparent;
  padding: 20px 0 10px 0;
  height: 35px;

  @media ${device.tabletL} {
    display: grid;
  }
`;

export const PaginationInfo = styled.div`
  position: absolute;
  display: flex;
  align-items: center;

  & div {
    margin-right: 20px;
  }
  & span {
    margin-right: 5px;

    @media ${device.mobileL} {
      font-size: 0.9rem;
    }
  }
  & strong {
    font-size: 1.3rem;
    margin-right: 5px;
    font-weight: bold;

    @media ${device.mobileL} {
      font-size: 1.2rem;
    }

  }

  @media ${device.tabletL} {
    position: relative;
    margin: auto;
  }
`;

export const PaginationPager = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;

  & > ul {
    align-items: center;
    margin: 0 auto;
    display: flex;
    list-style: none;

    & > li {
      cursor: pointer;
      margin: auto 10px;

      &.active {
        pointer-events: none;

        & > span {
          pointer-events: none;
          opacity: 1;
          text-shadow: 0px 0px 10px #fef6b9;
        }
      }

      &.disabled {
        pointer-events: none;
        opacity: 0.5;
      }

      & > span,
      & > svg {
        font-weight: bold;
        font-size: 1.3rem;
        color: #fef6b9;

        &:hover {
          opacity: 0.5;
        }
      }
    }
  }

  @media ${device.tabletL} {
    display: flex;
    margin: auto;
    padding-top: 10px;
  }
`;
