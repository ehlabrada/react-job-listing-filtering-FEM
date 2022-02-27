import styled from "styled-components";

export const StyledCard = styled.li`
  width: 100%;
  height: 120px;
  padding: 10px 20px;
  border-radius: 10px;
  margin-bottom: 15px;
  box-shadow: 0px 0px 7px 1px rgba(125, 121, 125, 0.5);

  /* background-color: ${({ theme }) => theme.colors.lightGrayishCyan}; */
  background-color: white;

  display: flex;
  justify-content: space-between;
`;

export const CardDescriptionAndImg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardImg = styled.img`
  border-radius: 50%;
  width: 70px;
  margin-right: 15px;
`;

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 7px;
`;
export const BusinessInfo = styled.div`
  p {
    color: ${({ theme }) => theme.colors.desaturatedDarkCyan};
  }

  span {
    border-radius: 30px;
  }
`;

export const PositionTitle = styled.p`
  color: ${({ theme }) => theme.colors.veryDarkGrayishCyan};
  font-weight: 800;
  font-size: 1.2rem;

  &:hover {
    color: ${({ theme }) => theme.colors.desaturatedDarkCyan};
    cursor: pointer;
  }
`;

export const OtherDetails = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    color: ${({ theme }) => theme.colors.darkGrayishCyan};
    margin-right: 10px;
  }
`;

export const CardAbilities = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    background-color: ${({ theme }) =>
      theme.colors.lightGrayishCyanFilterTablets};
    color: ${({ theme }) => theme.colors.desaturatedDarkCyan};
    padding: 7px;
    margin-right: 15px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.desaturatedDarkCyan};
      color: ${({ theme }) => theme.colors.lightGrayishCyan};
    }
  }
`;
