import styled from "styled-components";

export const Footer = styled.footer`
  position: relative;
  width: 100%;
  height: 520px;
  margin-top: 220px;
  padding: 260px 0px 0px 0px;
  background-color: #eee;

  @media screen and (min-width: 760px) {
    height: 560px;
    margin-top: 180px;
    padding: 180px 150px 100px 150px;
  }

  .footer-inner {
    flex-direction: column;

    @media screen and (min-width: 760px) {
      flex-direction: row;
    }

    p {
      margin-top: 24px;
    }

    .footer-socials {
      display: flex;
      margin-top: 30px;

      .social {
        position: relative;
        width: 34px;
        height: 34px;
        margin-right: 20px;
        cursor: pointer;

        .bg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 30px;
          height: 30px;
          background: #f53838;
          border-radius: 100%;
        }

        svg {
          position: absolute;
          z-index: 1;
        }
      }
    }

    span {
      display: block;
      margin-top: 30px;
      line-height: 30px;
      color: #afb5c0;
    }

    .footer-col {
      display: none;

      @media screen and (min-width: 760px) {
        display: block;
      }
    }

    h6 {
      font-size: 18px;
      line-height: 30px;
    }

    ul {
      margin-top: 20px;
      width: fit-content;

      li {
        margin-bottom: 10px;
        line-height: 30px;
        color: #4f5665;
        cursor: pointer;
        transition: 0.3s ease;

        &:nth-last-child(1) {
          margin-bottom: 0;
        }

        &:hover {
          color: #f53855;
        }
      }
    }
  }
`;
