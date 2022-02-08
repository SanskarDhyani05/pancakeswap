import styled from "styled-components";
import { colors, screenSizes } from "../../shared/styles/theme";

export const Container = styled.div`
  background: rgb(229 253 255);
  padding-bottom:20px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: center;
  background:white;
`;
export const HeaderTag = styled.h3`
  color: rgb(118, 69, 217);
  font-size: 16px;
  font-weight: 600;
  padding: 10px;
  margin-right: 10px;
  cursor:pointer;
  &:hover{
    background:rgb(238 234 244);
  }
`;
export const Wrapper = styled.div`
padding-top:50px;

`;
export const Wrap = styled.div`
  background: white;
  margin-top: 20px;
  margin: 30px 500px;
  border-radius: 25px;
  border: 1px solid lightgrey;
`;
export const ExchangeWrap = styled.div`
  justify-content:space-between;
  display:flex;
  padding:20px;
  border-bottom: 1px solid lightgrey;
`;
export const TitleWrap= styled.div`
display:block
`;
export const Heading = styled.h3`
  color: rgb(40, 13, 95);
  font-size:20px;
`;
export const SubHeading = styled.p`
  color: rgb(122, 110, 170);
  margin-top:-10px;
  font-size:15px;
`;
export const ImageWrap =styled.div `
display:flex;
margin-top:20px;
`;
export const Image = styled.img`
height:20px;
width:20px;
margin-left:40px;
&:hover{
    opacity:0.5;
    cursor:pointer;
}
`;
export const TokenSwap = styled.div`
background:rgb(238 234 244);
height:100px;
margin:10px;
border-radius:20px;
`;
export const HelpButton = styled.button`
  align-items: center;
  margin-right:40px;
  margin-top:50px;
  border: 0px;
  border-radius: 16px;
  box-shadow: rgb(14 14 44 / 40%) 0px -1px 0px 0px inset;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  -webkit-box-pack: center;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: 1;
  outline: 0px;
  transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;
  height: 48px;
  padding: 0px 24px;
  background-color: rgb(122, 110, 170);
  color: rgb(255, 255, 255);
  &:hover {
    opacity: 0.6;
  }
`;
export const ButtonWrap= styled.div `
 display:flex;
 justify-content:space-between;
`;
export const VersionWrap =styled.div `
display:flex;
`;
export const VersionButton = styled.button`
  align-items: center;
  border: 0px;
  border-radius: 16px;
  box-shadow: rgb(14 14 44 / 40%) 0px -1px 0px 0px inset;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  -webkit-box-pack: center;
  justify-content: center;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: 1;
  outline: 0px;
  transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;
  height: 48px;
  padding: 0px 24px;
  background-color: rgb(122, 110, 170);
  color: rgb(255, 255, 255);
  margin-top: 15px;
  margin-left:50px;
  &:hover {
    opacity: 0.6;
  }
`;
