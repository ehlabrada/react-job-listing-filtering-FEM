import styled from "styled-components";

export const StyledContent = styled.section`
  padding: 30px 70px;
  background-color: ${({ theme }) => theme.colors.lightGrayishCyan};

  @media screen and (max-width: 768px) {
    padding: 30px 30px;
    padding-top: 40px;
  }
`;
