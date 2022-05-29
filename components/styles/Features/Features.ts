import styled from "styled-components";

export const Features = styled.div`
  margin-top: 150px;
  h2 {
    font-weight: 500;
    font-size: 2.5vw;
    line-height: 1.35;

    @media screen and (min-width: 1600px) {
      font-size: 2vw;
    }
  }

  p {
    margin-top: 20px;
    font-size: 16px;
    line-height: 30px;
    color: #4f5665;
  }

  ul {
    margin-top: 20px;
    padding: 0;
    list-style-type: none;
    li {
        display: flex;
        align-items: center;
      margin-bottom: 15px;
      color: #4f5665;
      svg {
        margin-right: 12px;
      }
    }
  }
`;
