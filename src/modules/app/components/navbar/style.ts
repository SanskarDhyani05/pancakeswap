import styled from "styled-components";
import { colors, screenSizes } from "../../../../shared/styles/theme";

export const Container = styled.div`
 
`;
export const NavContainerWrap = styled.div`
  background: white;
  height: 60px;
  position: fixed;
  width: auto;
  z-index: 100000;
  
`;

export const NavContainer = styled.div`
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0;
  max-width: 1600px;
  position: fixed;
  width: auto;
  z-index: 1000;
  margin: auto;
  right: 0;
  left: 0;
  border-bottom: 1px solid lightgrey;
  background: white;
  @media (min-width: ${screenSizes.mediaS}px) {
    height: 60px;
    flex-direction: row;
    align-items: center;
  }
`;

export const HoverTabs = styled.div`
  display: flex;
  cursor: pointer;
  list-style: none;
  margin-left: 30px;
`;
export const HoverWrap = styled.div`
  position: absolute;
  list-style: none;
  background: white;
  color: rgb(122 110 170);
  border-radius: 15px;
  border:1px solid lightgrey;
  top:50px;
  display: none;
`;
export const HoverList = styled.li`
  padding: 20px 50px;
  border-radius: 15px;
  &:hover {
    background: rgb(238 234 244);
  }
`;
export const NavTab = styled.li`
align-items: center;
position:relative;
    color: rgb(122, 110, 170);
    font-size: 16px;
    padding:16px;
  font-family: Kanit, sans-serif;
}
&:hover{
    background:rgb(238 234 244);
  border-radius :8px;
  cursor:pointer;
   ${HoverWrap}{
     display:block;
     z-index:1;
   }
  }`;

export const WalletWrap = styled.div`
  margin-right: 50px;
  display: none;
  @media (min-width: ${screenSizes.mediaS}px) {
    display: flex;
    margin-right: 20px;
  }
  @media (min-width: ${screenSizes.mediaS}px) {
    display: flex;
    margin-right: 40px;
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    margin-right: 60px;
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    margin-right: 80px;
  }
  @media (min-width: ${screenSizes.mediaXXL}px) {
    margin-right: 100px;
  }
`;

export const ToggleMenu = styled.img`
  display: block;
  margin: 20px;
  @media (min-width: ${screenSizes.mediaS}px) {
    display: none;
  }
`;

export const MobileOptions = styled.div`
display: block;
position: fixed;
background: #000;
    width: 100%;
    height: 100vh;
    top: 0;
    z-index: 10000;
    
@media (min-width: ${screenSizes.mediaS}px) {
none;
}
`;

export const MobileOptionHead = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavTabsMobile = styled.ul`
  list-style: none;
  transition: all 0.3s;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;
export const NavTabMobile = styled.li<any>`
  text-align: center;
  padding: 10px;
  cursor: pointer;
  position: relative;
  @media (min-width: ${screenSizes.mediaXL}px) {
    margin-left: 20px;
  }

  a {
    font-family: SemiBold;
    font-style: normal;
    font-weight: 600;
    font-size: 4px;
    line-height: 15px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${colors.white};
    opacity: 0.4;
    text-decoration: none;
    ${(props) =>
      props.isActiveTab
        ? `
        opacity: 1;
        color:${colors.neon};
    `
        : `
        color:${colors.white};
        opacity: 0.4;
      `}
  }
  &:hover {
    a {
      color: ${colors.neon};
      opacity: 1;
    }
  }
  img {
    position: absolute;
    top: 16px;
  }
`;

export const Separator = styled.div`
  background: rgba(255, 255, 255, 0.2);
  width: 0.5px;
  height: 20px;
  margin-top: 20px;
`;
export const Header = styled.div`
  font-size: 18px;
  margin-top: 10px;
  font-family: bold;
  cursor: pointer;
`;
export const Wrapper = styled.div`
  display: flex;
`;
export const Img = styled.img`
  height: 18px;
  margin-top: 9px;
  width: 18px;
  margin-right: 20px;
  cursor: pointer;
`;
export const HeadImage = styled.img`
  height: 25px;
  width: 25px;
  margin: 10px 7px 0 20px;
  cursor: pointer;
`;
