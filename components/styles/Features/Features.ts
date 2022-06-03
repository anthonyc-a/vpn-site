import styled from "styled-components";

export const Features = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-between;
  padding-top: 100px;

  @media screen and (min-width: 760px) {
    padding-top: 150px;
    flex-direction: row;
  }

  .features-img {
    margin-bottom: 50px;

    @media screen and (min-width: 760px) {
      margin: 0;
    }

    svg {
      width: 100%;
      height: fit-content;

      @media screen and (min-width: 760px) {
        width: unset;
        height: unset;
      }
    }
  }

  .features-info {
    text-align: center;

    @media screen and (min-width: 760px) {
      width: 45%;
      text-align: unset;
    }
  }

  .info-inner {
    opacity: 0;
    transform: translateY(10px);
  }

  p {
    margin-top: 20px;
    font-size: 16px;
    line-height: 30px;
    color: #4f5665;

    @media screen and (min-width: 760px) {
      width: 70%;
    }
  }

  ul {
    margin-top: 20px;
    padding: 0;
    list-style-type: none;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 15px;
      color: #4f5665;

      @media screen and (min-width: 760px) {
        justify-content: unset;
      }

      svg {
        margin-right: 12px;
      }
    }
  }
`;
