import styled from "styled-components";

export const Plan = styled.div`
  margin-top: 200px;
  .plan-header {
    width: fit-content;
    margin: 0 auto;
    text-align: center;
  }

  .plan-items {
    display: flex;
    margin: 60px auto 0 auto;
    width: fit-content;

    .plan-item {
      width: 330px;
      height: 760px;
      margin-right: 50px;
      border: 2px solid #dddddd;
      border-radius: 10px;

      &:nth-last-child(1) {
        margin-right: 0;
      }
    }
  }
`;
