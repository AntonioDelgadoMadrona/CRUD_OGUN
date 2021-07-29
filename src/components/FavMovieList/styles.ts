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
