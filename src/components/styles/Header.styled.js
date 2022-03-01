import styled from "styled-components";

import bgImgDesktop from "../../images/bg-header-desktop.svg";
import bgImgMobile from "../../images/bg-header-mobile.svg";

export const StyledHeader = styled.header`
  height: 120px;
  min-width: 100%;
  padding: 30px 70px;
  position: relative;

  background-color: ${({ theme }) => theme.colors.desaturatedDarkCyan};

  background-image: url(${bgImgDesktop});
  background-repeat: no-repeat;
  background-size: 100% 100%;

  @media screen and (max-width: 768px) {
    background-image: url(${bgImgMobile});
    padding: 30px 30px;
    height: auto;

    display: flex;
    /* align-items: center; */
    justify-content: center;
  }
`;
