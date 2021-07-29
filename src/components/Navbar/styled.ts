import { device } from "../../utils/breakpoints";
import styled from "styled-components";

export const StyledNavbar = styled.header`
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  background: #000;
  display: grid;
  grid-template-columns: max-content auto;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: 70px;
  color: #fef6b9;
  box-sizing: border-box;

  @media ${device.tabletS} {
    padding: 10px 30px 0px 30px;
    height: 85px;
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
  }
`;

export const ImgContainer = styled.div`
  width: 150px;
  height: auto;
  display: flex;
  align-items: center;

  @media ${device.tabletS} {
    justify-self: center;
    width: 100px;
    margin-bottom: -10px;
  }

  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const LinksContainer = styled.div`
  width: auto;
  text-align: right;
  justify-content: right;

  & > ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media ${device.tabletS} {
      padding-left: 0;
    }

    & > li:not(:last-child) {
      margin-right: 30px;

      & strong {
        font-size: 1.1rem;
        color: #fff;
        opacity: 0.9;

        @media ${device.mobileL} {
          display: none;
        }
      }
    }

    & span {
      font-size: 1.3rem;
      text-decoration: none;
      display: flex;
      align-items: flex-end;
      width: max-content;
      justify-content: space-between;
      height: 30px;
      color: inherit;
      cursor: pointer;

      :hover {
        opacity: 0.8;
      }

      & > svg {
        margin-right: 5px;
      }

      &.inactive {
        pointer-events: none;
        opacity: 0.5;
      }
    }
  }
`;
