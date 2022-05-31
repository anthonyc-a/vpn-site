import styled from "styled-components";

export const Subscribe = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: -165px;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  width: 100%;
  max-width: 1140px;
  height: 220px;
  margin: 65px auto 0 auto;
  padding: 0 70px;
  border-radius: 10px;
  background-color: white;
  z-index: 1;
  opacity: 0;

  .subscribe-header {
    h2 {
      line-height: 45px;
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
      background: rgba(245, 56, 56, 0.35);
      filter: blur(54px);
      border-radius: 10px;
      z-index: -1;
    }
  }
`;
