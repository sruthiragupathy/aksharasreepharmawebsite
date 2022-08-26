import styled from "@emotion/styled";
import { useState } from "react";
import { colors } from '../utils/constants';

const Nav = styled.nav`
    position: sticky;
    top:0;
    left:0;
    right:0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;
    box-shadow: 0 3px 10px ${colors.boxShadowColor};
    background: #fff;
`;

const Logo = styled.div`
    font-family: 'Patua One', cursive; 
    font-size: 1.75rem;
    color: ${colors.primaryColor};
`;

const NavigationWrapper = styled.div`
    display: none;
    @media only screen and (min-width: 750px) {
        font-size: 1rem;
        cursor: pointer;
        display: flex;
        align-items: center;
    }
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

const HamburgerWrapper = styled.div`
    cursor: pointer;
    @media only screen and (min-width: 750px) {
        display: none;
    }
`;
    
const HamburgerLine = styled.span`
  display: block;
  width: 2rem;
  height: 3px;
  background: ${colors.textColor};
  margin-bottom: 5px;
  border-radius: 5px;
  transition: all 500ms linear;
  transform-origin: 5px 2px;
    &.click1 {
        transform: rotate(45deg);
    }

    &.click2 {
        opacity: 0;
    }

    &.click3 {
        transform: rotate(-45deg);
    }
`;

const MobileMenuWrapper = styled.div`
display: none;
&.mobile-menu-wrapper {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 6rem;
  height: 100vh;
  width: calc(100% - 1rem);
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  background: #fff;
  animation: dropdowngrowin 0.5s ease-in-out;
}
  
  @keyframes dropdowngrowin {
  0% {
    width: 20rem;
    left: 0;
    opacity: 0;
  }
  100% {
    width: calc(100% - 1rem);
    left: 50%;
    opacity: 1;
  }
 }
`;

const MobileLink = styled(Link)`
    padding: 1rem;
    &:hover {
        color: ${colors.primaryColor};
        border-bottom: 0px;
    }
`;

const Navbar = () => {
    const [isHamburgerMenuClicked, setIsHamburgerMenuClicked] = useState(false);
    const onHamburgerMenuClick = () => {
        if(isHamburgerMenuClicked) setIsHamburgerMenuClicked(false);
        else setIsHamburgerMenuClicked(true);
    }
    return (
        <>
        <Nav>
            <Logo>aksharasreepharma</Logo>
            <NavigationWrapper>
                <Link href = '/'>HOME</Link>
                <Link href = '/'>OUR PRODUCTS</Link>
                <Link href = '/'>CONTACT US</Link>
            </NavigationWrapper>
            <HamburgerWrapper onClick={onHamburgerMenuClick}>
                <HamburgerLine className={isHamburgerMenuClicked ? "click1":""}></HamburgerLine>
                <HamburgerLine className={isHamburgerMenuClicked ? "click2":""}></HamburgerLine>
                <HamburgerLine className={isHamburgerMenuClicked ? "click3":""}></HamburgerLine>
            </HamburgerWrapper>
        </Nav>
        <MobileMenuWrapper className = {isHamburgerMenuClicked ? "mobile-menu-wrapper" :""}>
            <MobileLink href = '/'>HOME</MobileLink>
            <MobileLink href = '/'>OUR PRODUCTS</MobileLink>
            <MobileLink href = '/'>CONTACT US</MobileLink>
        </MobileMenuWrapper>
        </>
    )
}

export default Navbar;