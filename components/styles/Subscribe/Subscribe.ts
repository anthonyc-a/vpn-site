import styled from "styled-components";

export const Subscribe = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: -180px;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  width: calc(100% - 40px);
  max-width: 1140px;
  height: fit-content;
  margin: 65px auto 0 auto;
  padding: 0 20px 20px 20px;
  border-radius: 10px;
  background-color: white;
  z-index: 1;
  opacity: 0;

  @media screen and (min-width: 760px) {
    flex-direction: row;
    align-items: center;
    top: -165px;
    height: 220px;
    padding: 0 70px;
  }

  .subscribe-header {
    h2 {
      line-height: 45px;

      @media screen and (min-width: 760px) {
        width: 100%;
      }
    }
    p {
      margin-top: 20px;
      color: #4f5665;
    }
  }

  button {
    padding: 18px 88px;
    background: #f53838;
    border-radius: 10px;
    font-family: "Rubik";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
    color: white;
    transition: 0.3s ease;

    &:after {
      content: "";
      position: absolute;
      top: 25%;
      left: 50%;
      transform: translateX(-50%);
      width: 90%;
      height: 100%;
      background: rgba(245, 56, 56, 0.25);
      filter: blur(54px);
      border-radius: 10px;
      z-index: -1;
    }
  }
`;
