import styled from "styled-components";

export const Features = styled.div`
  padding-top: 150px;

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
