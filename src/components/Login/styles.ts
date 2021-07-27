import styled from "styled-components";
import { device } from "../../utils/breakpoints";

export const LoginContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  width: 100vw;
  height: 100vh;

  & > div {
    align-self: center;
    justify-self: center;
  }

  @media ${device.tabletL} {
    grid-template-columns: auto;
  }
`;

export const StyledImgContainer = styled.div`
  position: relative;
  background: #1ce090;
  background: -moz-linear-gradient(top, #1ce090 0%, #0cbd57 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, #1ce090 0%, #0cbd57 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    #1ce090 0%,
    #0cbd57 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    position: absolute;
    height: 100%;
    width: auto;
    opacity: 0.3;
    z-index: 0;
    overflow: hidden;
  }

  & > div {
    text-align: center;
    z-index: 2;
  }

  @media ${device.tabletL} {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  align-items: center;
  margin: auto;

  & > img {
    width: 100%;
  }
`;

export const StyledForm = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background: #0c1b23;
  z-index: 3;
  box-shadow: 0 0 100px #0d0d1e;
`;
