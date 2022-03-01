import styled from "styled-components";

export const StyledFilter = styled.div`
  padding: 20px 40px;
  width: 80%;
  height: 70px;
  border-radius: 10px;
  background-color: white;

  margin-top: -35px;

  z-index: 999;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: auto;
    margin-bottom: 40px;
    width: 90%;
  }
`;

export const Filters = styled.div`
  /* span {
    background-color: ${({ theme }) =>
    theme.colors.lightGrayishCyanFilterTablets};
    color: ${({ theme }) => theme.colors.desaturatedDarkCyan};
    padding: 7px;
    margin-right: 15px;
    border-radius: 5px;
    cursor: pointer;
    position: relative; */

  /* } */

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    /* height: auto; */
    gap: 5px;
  }
`;

export const SingleFilter = styled.button`
  background-color: ${({ theme }) =>
    theme.colors.lightGrayishCyanFilterTablets};
  color: ${({ theme }) => theme.colors.desaturatedDarkCyan};
  padding: 7px;
  margin-right: 25px;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  padding-right: 40px;
  outline: none;
  border: none;

  span {
    margin-left: 7px;
    background-color: red;
    height: 100%;
    width: 30px;
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.desaturatedDarkCyan};
    border-radius: 0 5px 5px 0;

    img {
      vertical-align: middle;
      position: absolute;
      top: 30%;
      right: 25%;

      @media screen and (max-width: 768px) {
        top: 25%;
      }
    }
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
