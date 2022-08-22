import styled from "@emotion/styled";
import { colors } from '../utils/constants';

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;
    box-shadow: 0 3px 10px ${colors.boxShadowColor};
`;

const Logo = styled.div`
    font-family: 'Patua One', cursive; 
    font-size: 1.75rem;
    color: ${colors.primaryColor};
`;

const NavigationWrapper = styled.div`
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    
`;

const Link = styled.a`
    text-decoration: none;
    color: ${colors.textColor};
    cursor: pointer;
    font-weight: 600;
    padding: 0.5rem;
    margin-right: 1.5rem;
    display: inline-block;
    position: relative;
   &:hover {
        color: ${colors.primaryColor};
        border-bottom: 2px solid ${colors.primaryColor};
    }
`;

const Navbar = () => {
    return (
        <Nav>
            <Logo>aksharasreepharma</Logo>
            <NavigationWrapper>
                <Link href = '/'>HOME</Link>
                <Link href = '/'>OUR PRODUCTS</Link>
                <Link href = '/'>CONTACT US</Link>
            </NavigationWrapper>
        </Nav>
    )
}

export default Navbar;