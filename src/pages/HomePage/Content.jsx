import styled from "@emotion/styled";
import Illustration from './homepage-illustration.svg';
import {colors} from '../../utils/constants';


const Wrapper = styled.div`
    width: 100%;
    display: flex;
    margin: 3rem 2rem;
    `;

const ImageWrapper = styled.div`
    width: 50%;
    margin-right: 4rem;
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
    font-size: 2.75rem;
    font-weight: light;
    @media screen and (min-width: 768px) {
        margin-top: 0;
    }
`;

const CaptionText = styled.div`
`;

const CaptionSpan = styled.div`
    margin-top: 1rem;
    font-weight: bold;
`

const InnerWrapper = styled.div``;

const VisionWrapper = styled.div``;

const StyledH1 = styled.h1`
    color: ${colors.primaryColor};
`



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
            <p>Aksharasree pharma specializes in producing high quality medicines. Our motto is to make quality medicine available to all at a reasonable price</p>
        </VisionWrapper>
    </InnerWrapper>
    </>
    )
}

export default Content;