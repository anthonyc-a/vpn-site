import styled from "styled-components";

export const Global = styled.div`
  margin-top: 150px;

  .global-header {
    width: fit-content;
    margin: 0 auto;
    text-align: center;

    p {
      margin-top: 20px;
      line-height: 30px;
    }
  }
  svg {
    display: block;
    margin: 80px auto 0 auto;
  }

  .brands {
    display: flex;
    margin-top: 80px;

    svg {
      filter: grayscale(1);
      opacity: 0.25;
      .st0 {
        fill: #ff4500;
      }
      .st1 {
        fill: #222222;
      }
      .st2 {
        fill: #ffffff;
      }
      .st3 {
        display: none;
      }
      .st4 {
        display: inline;
        fill: none;
        stroke: #d8d8d8;
        stroke-width: 0.4925;
        stroke-miterlimit: 10;
      }
      .st5 {
        display: inline;
        fill: none;
        stroke: #d8d8d8;
        stroke-width: 0.5589;
        stroke-miterlimit: 10;
      }
      .st6 {
        display: inline;
      }
    }
  }
`;
