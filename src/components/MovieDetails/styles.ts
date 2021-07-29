// DEPENDENCIES
import styled from "styled-components";

export const StyledMovieDetails = styled.div`
  width: 100%;
  margin-top: 20px;

  & > a {
    text-decoration: none;
    display: flex;
    align-items: flex-end;
    width: max-content;
    justify-content: space-between;
    background-color: #000;
    padding: 5px;
    border-radius: 10px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    &:hover > svg {
      opacity: 0.8;
    }

    & > svg {
      font-size: 1.5rem;
      margin-right: 5px;
      color: #fef6b9;
    }
  }
`;

export const StyledDetails = styled.div`
  background: #000;
  height: 600px;
  margin-top: 20px;
  border-radius: 10px;
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 5%;
  position: relative;
  overflow: hidden;
  padding: 50px;
  box-sizing: border-box;

  & button {
    position: absolute;
    bottom: 15%;
    left: 45%;
    z-index: 2;

    & > svg {
      margin-right: 5px;
    }
  }

  & .movieDetails__backImg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    opacity: 0.1;
  }

  & > div {
    z-index: 1;
    color: #fff;
  }

  & .movieDetails__posterImg {
    width: 250px;
    height: auto;

    & > img {
      width: 100%;
      height: auto;
    }
  }

  & .movieDetails__votes {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  & .movieDetails__info > h1,
  & .movieDetails__info > h3,
  & .movieDetails__info > h4:not(:nth-child(4)) {
    margin-bottom: 40px;
  }
`;
