import {
  BusinessInfo,
  CardAbilities,
  CardDescription,
  CardDescriptionAndImg,
  CardImg,
  CardImgMobile,
  LineDivider,
  NewAndFeatured,
  OtherDetails,
  PositionTitle,
  StyledCard,
} from "./styles/Card.styled";

const Card = (props) => {
  if (props.filters.every((filter) => props.tags.includes(filter))) {
    return (
      <StyledCard featured={props.featured}>
        <CardDescriptionAndImg>
          <CardImg src={props.logo} alt="logo-img" />
          <CardImgMobile src={props.logo} alt="logo-img" />
          <CardDescription>
            <BusinessInfo>
              <p>{props.company}</p>
              {props.new && (
                <NewAndFeatured nuevo={props.new}>New</NewAndFeatured>
              )}
              {props.featured && <NewAndFeatured>Featured</NewAndFeatured>}
            </BusinessInfo>
            <PositionTitle>{props.position}</PositionTitle>
            <OtherDetails>
              <p>{props.postedAt}</p>
              <p>{props.contract}</p>
              <p>{props.location}</p>
            </OtherDetails>
          </CardDescription>
        </CardDescriptionAndImg>
        <LineDivider />
        <CardAbilities>
          <span onClick={() => props.handleAddFilters(props.role)}>
            {props.role}
          </span>
          <span onClick={() => props.handleAddFilters(props.level)}>
            {props.level}
          </span>
          {props.languages.map((language, index) => (
            <span onClick={() => props.handleAddFilters(language)} key={index}>
              {language}
            </span>
          ))}
          {props.tools.map((tool, index) => (
            <span onClick={() => props.handleAddFilters(tool)} key={index}>
              {tool}
            </span>
          ))}
        </CardAbilities>
      </StyledCard>
    );
  } else {
    return "";
  }
};

export default Card;
