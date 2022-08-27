import styled from "@emotion/styled";
import Illustration from './homepage-illustration.svg';
import {colors} from '../../utils/constants';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from "react-router-dom";


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem 2rem;
     @media screen and (min-width: 768px) {
         flex-direction: row;
    }
    `;

const ImageWrapper = styled.div`
    width: 50%;
    @media screen and (min-width: 768px) {
     margin-right: 6rem;
    }
`;

const Image = styled.img`
  max-width: 100%;
  width: 800px;
  `; 

const CaptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 1.25rem;
    font-weight: light;
    margin-top: 2rem;
    @media screen and (min-width: 768px) {
        margin-top: 0;
        font-size: 2.75rem;
    }
`;

const CaptionText = styled.div`
`;

const CaptionSpan = styled.div`
    margin-top: 1rem;
    font-weight: bold;
`

const InnerWrapper = styled.div``;

const VisionWrapper = styled.div`
    width: 80%;
    margin: 3rem auto;
    @media screen and (min-width: 768px) {
        width: 60%;
        margin: 5rem auto;
    }
`;

const StyledH1 = styled.h1`
    color: ${colors.primaryColor};
`

const StyledDiv = styled.div`
    font-size: 1rem;
    text-align: justify;
    line-height: 1.6;
`;

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5rem;
`;

const StyledButton = styled(Link)`
    padding: 1rem 1.5rem;
    border-width: 0;
    background: ${colors.primaryColor};
    font-size: 1.25rem;
    font-weight: semibold;
    border-radius: 0.25rem;
    color: ${colors.lightText};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    :hover {
        background: ${colors.primaryColorHover};
    }
    `;

const Span = styled.span`
    margin-right: 1rem;
    `;
    
const Content = () => {
    return (<>
    <Wrapper>
        <ImageWrapper>
            <Image src={Illustration} alt='home page illustration' />
        </ImageWrapper>
        <CaptionWrapper>
            <CaptionText>Healthy doesn't have to be hard</CaptionText>
            <CaptionSpan>We make it easy</CaptionSpan>
        </CaptionWrapper>
    </Wrapper>
    <InnerWrapper>
        <VisionWrapper>
            <StyledH1>About us</StyledH1>
            <StyledDiv>Aksharasree pharma specializes in producing high quality medicines. 
                Our motto is to make quality medicine available to all at a reasonable price</StyledDiv>
        </VisionWrapper>
        <VisionWrapper>
            <StyledH1>Our Vision</StyledH1>
            <StyledDiv>Aksharasree pharma strives to become a recognized healthcare and pharmaceutical company through Innovation, Quality, and Competence. We work towards becoming the leading pharmaceutical player in the industry by assuring high-quality standards and cost-effective products. We want to mark our presence in society by creating a portfolio of low-cost medicines available to all.</StyledDiv>
        </VisionWrapper>
        <VisionWrapper>
            <StyledH1>Our Mission</StyledH1>
            <StyledDiv>Our mission is to uphold our social responsibilities of delivering the highest standard healthcare services to all segments of society without compromising on our core values of integrity, good ethics, and commitment. </StyledDiv>
        </VisionWrapper>
    </InnerWrapper>
    <ButtonWrapper>
        <StyledButton to="/products">
            <Span>View our products</Span>
            <ArrowRightAltIcon fontSize="large"/>
        </StyledButton>
    </ButtonWrapper>
    </>
    )
}

export default Content;