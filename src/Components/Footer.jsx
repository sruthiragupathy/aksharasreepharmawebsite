import styled from "@emotion/styled";
import { colors } from '../utils/constants';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "react-router-dom";

const FooterWrapper = styled.footer`
    background: ${colors.primaryColor};
    padding: 2rem;
`;

const Text = styled.h3`
   color: ${colors.lightText};
   font-weight: bold;
`;

const SocialsWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   & a:not(:last-child) {
       padding-right: 3rem;
   }
`;

const SocialLink = styled.a`
   cursor: pointer;
    `;

const Footer = () => {
    return (
        <FooterWrapper>
            <Text>Connect with us</Text>
            <SocialsWrapper>
                <SocialLink target="_blank" href="https://instagram.com/aksharasreepharma?igshid=YmMyMTA2M2Y=">
                    <InstagramIcon fontSize="large" sx={{ color: `${colors.lightText}` }}/>
                </SocialLink>
                <SocialLink target="_blank" href="https://m.facebook.com/aksharasreepharma4goodlife/">
                    <FacebookIcon fontSize="large" sx={{ color: `${colors.lightText}` }}/>
                </SocialLink>
                <Link to="/contact">
                    <EmailIcon fontSize="large" sx={{ color: `${colors.lightText}` }}/>
                </Link>
            </SocialsWrapper>
        
        </FooterWrapper>
        )
    }

export default Footer;