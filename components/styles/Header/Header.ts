import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  left: 50%;
  transform: translateX(-50%);
  padding: 2rem 20px;
  width: 100%;
  max-width: 1280px;
  background-color: white;
  z-index: 1000;

  @media screen and (min-width: 760px) {
    padding: 2rem 0;
  }

  ul {
    display: none;

    @media screen and (min-width: 760px) {
      display: flex;
    }

    li {
      margin-right: 40px;
      color: #4f5665;
      cursor: pointer;
      transition: all 0.3s ease;

      &:nth-last-child(1) {
        margin-right: 0;
      }

      &:hover {
        color: #f53855;
      }
    }
  }

  .header-buttons {
    display: none;
    @media screen and (min-width: 760px) {
      display: flex;
    }
    button {
      padding: 13px 45px;
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
        border: 1px solid #f53855;
        transition: all 0.3s ease;

        &:hover {
          background: #f53855;
          color: white;
        }
      }
    }
  }

  .burger {
    @media screen and (min-width: 760px) {
      display: none;
    }
  }
`;
