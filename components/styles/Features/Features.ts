import styled from "styled-components";

export const Features = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 150px;

  .features-img {
    margin-bottom: 50px;

    @media screen and (min-width: 760px) {
      margin: 0;
    }

    svg {
      width: 100%;
      height: fit-content;
    }
  }

  .features-info {
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
