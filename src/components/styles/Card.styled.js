import styled from "styled-components";

// export const CardWrapper = styled.li``

export const StyledCard = styled.li`
  width: 100%;
  /* height: 120px; */
  padding: 10px 20px;
  border-radius: 10px;
  margin-bottom: 15px;
  box-shadow: 0px 0px 7px 1px rgba(125, 121, 125, 0.5);
  border-left: ${({ featured, theme }) =>
    featured && `4px solid ${theme.colors.desaturatedDarkCyan}`};

  /* background-color: ${({ theme }) => theme.colors.lightGrayishCyan}; */
  background-color: white;

  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    /* width: 300p; */
    /* height: 250px; */
    margin-bottom: 50px;

    position: relative;
  }
`;

export const StripeLine = styled.div`
  height: 100%;
  width: 5px;
  background-color: red;
`;

export const CardDescriptionAndImg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
  }
`;

export const CardImg = styled.img`
  border-radius: 50%;
  width: 70px;
  margin-right: 15px;

  @media screen and (max-width: 768px) {
    display: none;
  }
  /* position: absolute; */
  /* top: 0; */
`;
export const CardImgMobile = styled.img`
  display: none;

  @media screen and (max-width: 768px) {
    width: 60px;
    display: block;
    position: absolute;
    top: -10%;
    left: 8%;
    /* margin-bottom: 80px; */
  }
`;

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 7px;
`;
export const BusinessInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;

  p {
    color: ${({ theme }) => theme.colors.desaturatedDarkCyan};
  }
`;

export const NewAndFeatured = styled.span`
  border-radius: 20px;
  padding: 5px;
  color: ${({ theme }) => theme.colors.lightGrayishCyan};
  background-color: ${(props) =>
    props.nuevo
      ? props.theme.colors.desaturatedDarkCyan
      : props.theme.colors.veryDarkGrayishCyan};
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

export const LineDivider = styled.hr`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    margin: 20px 0;
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

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    gap: 10px;
    justify-content: start;
  }
`;
