import styled from "styled-components";

export const StyledContent = styled.section`
  padding: 5% 10%;
  min-width: 100%;

  background-color: ${({ theme }) => theme.colors.lightGrayishCyan};

  @media screen and (max-width: 768px) {
    padding: 20px 5%;
    padding-top: 40px;
  }
`;
