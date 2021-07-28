import { device } from "../../utils/breakpoints";
import styled from "styled-components";

export const StyledNavbar = styled.header`
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: 70px;
  color: #fef6b9;
  box-sizing: border-box;
`;

export const ImgContainer = styled.div`
  width: 150px;
  height: auto;
  display: flex;
  align-items: center;

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

    & > li {
      margin-right: 10px;

      & strong {
        margin-right: 30px;
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
    }
  }
`;
