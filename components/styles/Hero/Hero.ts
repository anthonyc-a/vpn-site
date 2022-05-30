import styled from "styled-components";

export const Hero = styled.div`
  position: relative;
  padding-top: calc(6rem + 111px);

  @media screen and (min-width: 1600px) {
    padding-top: calc(8rem + 111px);
  }

  .hero-info {
    opacity: 0;
    transform: translateY(10px);
  }

  h1 {
    font-weight: 500;
    font-size: 3.5vw;
    line-height: 1.35;
    letter-spacing: 0.4px;

    @media screen and (min-width: 1600px) {
      font-size: 2.5vw;
    }
  }

  p {
    margin-top: 20px;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #4f5665;
  }

  button {
    margin-top: 50px;
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

    &:hover {
      filter: brightness(0.9);
    }

    &:after {
      content: "hi";
      position: absolute;
      top: 50%;
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

  .hero-img {
    position: relative;

    svg {
      left: 0;
      transform: scale(1.1);

      @media screen and (min-width: 1600px) {
        transform: scale(1);
      }

      .item {
        animation: icon-anim 1s ease infinite;
        transform: translateX(-6px);

        @keyframes icon-anim {
          0% {
            transform: translateY(-6px);
          }
          50% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-6px);
          }
        }
      }

      .one {
        animation-duration: 2.5s;
      }
      .two {
        animation-duration: 4.5s;
      }
      .three {
        animation-duration: 2.25s;
      }

      .item-group {
        animation: icon-anim 2.5s ease infinite;
        transform: translateX(-6px);
      }
    }
  }

  .hero-stats {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 104px auto 0 auto;
    width: 100%;
    max-width: 1140px;
    padding: 66px 90px;
    background-color: white;

    &:after {
      content: "";
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      height: 100%;
      background: #0d1025;
      opacity: 0.1;
      filter: blur(114px);
      border-radius: 10px;
      z-index: -1;
    }

    .stat-item {
      display: flex;

      h3 {
        font-size: 25px;
        line-height: 22px;
        font-weight: 700;
      }

      span {
        font-size: 20px;
        line-height: 30px;
        color: #4f5665;
      }
      .stat-img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 55px;
        height: 55px;
        margin-right: 2rem;
        border-radius: 100%;
        background-color: #ffecec;
      }
    }

    .splitter {
      width: 2px;
      height: 125px;
      background-color: #eeeff2;
    }
  }
`;
