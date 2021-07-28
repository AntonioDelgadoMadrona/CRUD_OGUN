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
  padding: 20px;

  & > h2 {
    text-align: center;
    font-size: 1.5rem;
    text-transform: uppercase;
    color: #fff;
  }
`;
