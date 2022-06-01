import styled from "styled-components";

export const Customers = styled.div`
  padding-top: 150px;

  .header {
    width: fit-content;
    margin: 0 auto;
    text-align: center;

    p {
      margin-top: 20px;
      line-height: 30px;
      color: #4f5665;
    }
  }

  .customer-items {
    width: 100%;
    max-width: 1280px;
    margin-top: 60px;
    overflow: hidden;

    .items {
      position: relative;
      height: 270px;
      width: 100%;

      .items-inner {
        position: absolute;
        display: flex;
        justify-content: space-between;
        transition: 0.3s ease;

        .item {
          width: 394px;
          margin-right: 48px;
          padding: 30px;
          border-radius: 10px;
          border: 2px solid #dddddd;
          transition: 0.3s ease;

          &.active {
            border-color: #f53838;
          }

          &:nth-last-child(1) {
            margin-right: 0;
          }

          .item-top {
            display: flex;
            justify-content: space-between;

            .item-header {
              display: flex;

              .avatar {
                width: 50px;
                height: 50px;
                margin-right: 20px;
                border-radius: 100%;

                img {
                  width: 100%;
                  height: 100%;
                }
              }

              h5 {
                margin: 0;
                font-size: 18px;
                line-height: 30px;
              }

              span {
                display: block;
                font-size: 14px;
                line-height: 30px;
                color: #4f5665;
              }
            }

            .item-rating {
              svg {
                margin-left: 16px;
              }
            }
          }

          .item-bottom {
            margin-top: 20px;

            p {
              line-height: 30px;
            }
          }
        }
      }
    }

    .controls {
      display: flex;
      justify-content: space-between;
      margin-top: 60px;

      .counter {
        display: flex;
        align-items: center;

        .count-item {
          width: 15px;
          height: 15px;
          margin-right: 15px;
          background: #dde0e4;
          border-radius: 24px;
          transition: 0.3s ease;

          &.active {
            width: 38px;
            background: #f53838;
          }
        }
      }

      .ctrl {
        display: flex;

        .arrow {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 20px;
          width: 60px;
          height: 60px;
          border: 2px solid #f53838;
          border-radius: 100%;
          cursor: pointer;
          user-select: none;

          &:nth-last-child(1) {
            margin-right: 0;
            background-color: #f53838;
          }
        }
      }
    }
  }
`;
