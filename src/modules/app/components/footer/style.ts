import styled from "styled-components";
import { colors, screenSizes } from "../../../../shared/styles/theme";

export const Container = styled.div`
  background: rgb(39, 38, 44);
`;  
export const FooterContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction:column;
  
  @media (min-width: ${screenSizes.mediaS}px) {
  flex-direction:row;
    padding: 20px 40px;
  }
  p {
    font-family: Regular;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    text-align: center;
    color: ${colors.white};
  }

  a {
    margin-right: 20px;
  }
  img {
    margin-top: 6px;
  }
`;

export const FooterWrapper = styled.div`
 margin-right:120px;
 margin-top:20px;
`;
export const FooterTabs= styled.ul`
 list-style:none;
`;
export const FooterTab = styled.li`
margin-bottom:15px;
font-size:16px;
a{
 color:white;
 &:hover{
   cursor:pointer;
   border-bottom:1px solid white;
 }
}
`;
export const ListHead = styled.h3`
  color: rgb(154, 106, 255);
  font-weight: 600;
  text-transform: uppercase;
  margin-left:40px;
  font-size:16px;
`;
export const YellowTab = styled.li`
  margin-bottom: 15px;
  font-size: 16px;
  a {
    color: rgb(255 178 55);
    &:hover {
      cursor: pointer;
      border-bottom: 1px solid rgb(255 178 55);
    }
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  margin-left: 175px;
  padding-bottom:25px;
  border-bottom: 1px solid rgb(56, 50, 65);
`;

export  const LinkImg= styled.img `
height:22px;
width:22px;
margin-right:30px;
cursor:pointer;
`;
export const FooterEnd = styled.div`
  display: flex;
  margin-left: 175px;
  margin-top:30px;
  padding-bottom:10px;
  justify-content: space-between;
`;
export const LanguageWrap =styled.div `
`;
export const BuyWrap =styled.div `
display:flex;
margin-right:100px;
`;