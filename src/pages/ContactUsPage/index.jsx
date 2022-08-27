import styled from "@emotion/styled";
import {colors} from '../../utils/constants';
import Navbar from "../../Components/Navbar";


const H4 = styled.h4`
    
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    color: ${colors.lightGray};
    `;

const ContactUsPage = () => {
    return (
        <>
            <Navbar currentRoute = "/contact" />
            <Wrapper>
                <H4>"Work in progress"</H4>
            </Wrapper>
        </>
       
    )
}
export default ContactUsPage;