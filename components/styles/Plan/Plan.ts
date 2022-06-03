import styled from "styled-components";

export const Plan = styled.div`
  padding-top: 0px;

  @media screen and (min-width: 760px) {
    padding-top: 200px;
  }

  .plan-header {
    width: fit-content;
    margin: 0 auto;
    text-align: center;

    p {
      margin-top: 20px;
      line-height: 30px;
    }
  }

  .plan-items {
    display: flex;
    flex-direction: column;
    margin: 60px auto 0 auto;
    width: fit-content;

    @media screen and (min-width: 760px) {
      flex-direction: row;
    }

    .plan-item {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 330px;
      height: 720px;
      margin-bottom: 50px;
      padding: 80px 0 50px 0;
      border: 2px solid #dddddd;
      background-color: white;
      border-radius: 10px;
      opacity: 0;
      transform: translateY(10px);

      @media screen and (min-width: 760px) {
        height: 760px;
        margin-right: 50px;
        margin-bottom: 0;
      }

      &:nth-last-child(1) {
        margin-right: 0;
        border: 2px solid #f53838;
      }

      h5 {
        margin-top: 30px;
      }

      ul {
        margin-top: 30px;
        list-style-type: none;
        padding: 0;

        li {
          margin-bottom: 10px;

          &:nth-last-child(1) {
            margin-bottom: 0;
          }

          svg {
            margin-right: 25px;
          }
        }
      }

      .plan-price {
        position: absolute;
        bottom: 50px;

        span {
          font-weight: 300;
        }

        button {
          margin-top: 20px;
          padding: 13px 64px;
          background: transparent;
          border: none;
          border-radius: 50px;
          font-family: "Rubik";
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          cursor: pointer;

          &:nth-last-child(1) {
            color: #f53855;
            border: 2px solid #f53838;
            transition: all 0.3s ease;

            &:hover {
              background: #f53838;
              color: white;
            }
          }

          &.active {
            background-color: #f53838;
            color: white;
          }
        }
      }
    }
  }
`;
