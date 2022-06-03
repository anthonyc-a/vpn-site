import styled from "styled-components";

export const Container = styled.section`
  width: calc(100% - 40px);
  max-width: 1280px;
  margin: 0 20px;

  @media screen and (min-width: 760px) {
    margin: 0 auto;
  }
`;
