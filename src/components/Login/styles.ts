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
  
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    position: absolute;
    height: 100%;
    width: auto;
    opacity: 1;
    z-index: 0;
    overflow: hidden;
  }

  & > div {
    text-align: center;
    z-index: 2;
    background: rgba(0, 0, 0, .7);
    padding: 10px 20px;
  }

  & h1,
  & h2 {
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
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
  background: #000;
  z-index: 3;
  box-shadow: 0 0 100px #0d0d1e;
`;
