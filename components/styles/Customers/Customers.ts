import styled from "styled-components";

export const Customers = styled.div`
  margin-top: 150px;

  .header {
    width: fit-content;
    margin: 0 auto;
    text-align: center;

    p {
      margin-top: 20px;
      line-height: 30px;
    }
  }

  .customer-items {
    width: 100%;
    max-width: 1280px;
    margin-top: 60px;
    overflow: hidden;

    .items {
      position: relative;
      height: 230px;
      width: 100%;
      .items-inner {
        position: absolute;
        display: flex;
        justify-content: space-between;
        transition: 0.3s ease;
        .item {
          width: 394px;
          height: 230px;
          margin-right: 50px;
          border-radius: 10px;
          border: 2px solid #dddddd;

          &:nth-last-child(1) {
            margin-right: 0;
          }
        }
      }
    }
  }
`;
