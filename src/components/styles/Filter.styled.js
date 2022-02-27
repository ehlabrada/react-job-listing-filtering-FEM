import styled from "styled-components";

export const StyledFilter = styled.div`
  padding: 20px 40px;
  width: 100%;
  height: 70px;
  border-radius: 10px;
  background-color: white;

  margin-bottom: 20px;

  /* position: absolute;
  bottom: -35%;
  right: 20px;
  left: 20px; */

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Filters = styled.div`
  span {
    background-color: ${({ theme }) =>
      theme.colors.lightGrayishCyanFilterTablets};
    color: ${({ theme }) => theme.colors.desaturatedDarkCyan};
    padding: 7px;
    margin-right: 15px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const ClearFilter = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.desaturatedDarkCyan};

  &:hover {
    text-decoration: underline;
  }
`;
