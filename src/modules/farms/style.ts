import styled from "styled-components";

export const Container = styled.div`
  background: white;
`;
export const MainHeader = styled.div`
  background: rgb(229 253 255);
  padding: 20px 100px;
`;
export const Heading = styled.h1`
  font-size: 50px;
  color: rgb(118 69 217);
  font-family: bold;
`;
export const SubHeading = styled.p`
  color: rgb(40, 13, 95);
  font-size: 22px;
  margin-top: -10px;
  font-family: bold;
`;
export const Wrapper = styled.div`
  margin-top: 50px;
  margin-left: 100px;
  margin-right: 100px;
`;
export const HeadWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding:0px 30px;
  margin-left:30px;
`;

export const Img = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 20px;
  cursor: pointer;
`;
export const Input = styled.input`
  position: absolute;
  left: -9999px;
  top: -9999px;

  &:checked + Span {
    background: green;
    &:before {
      left: calc(100% - 2px);
      transform: translateX(-100%);
    }
  }
`;
export const Slider = styled.span`
  display: flex;
  cursor: pointer;
  width: 50px;
  border-radius: 100px;
  height: 25px;
  top: 30px;
  left: 2px;
  background: rgb(231 227 235);
  position: relative;
  transition: background-color 0.2s, box-shadow 0.2s;
  margin-left: 40px;
  &:before {
    content: "";
    position: absolute;
    width: 21px;
    height: 25px;
    border-radius: 21px;
    transition: 0.2s;
    background: white;
  }
`;
export const InputWrapper = styled.label`
  position: relative;
`;
export const SwitchContainer = styled.div`
  text-align: center;
  position: relative;
  margin-left: 25px;
  bottom: 12px;
`;
export const ToggleSwitch = styled.div`
  position: relative;
  width: 75px;
  display: inline-block;
  text-align: left;
  top: 8px;
`;
export const Checkbox = styled.input`
  display: none;
  &:checked + Label + Inner {
    margin-left: 0;
  }
  &:checked + Label + Switch {
    right: 0px;
  }
`;
export const Label = styled.label`
  display: block;
  overflow: hidden;
  cursor: pointer;
  border: 0 solid #bbb;
  border-radius: 20px;
`;
export const Inner = styled.span`
  display: block;
  width: 200%;

  transition: margin 0.3s ease-in 0s;
  &:after {
    float: left;
    width: 50%;
    height: 36px;
    padding: 0;
    line-height: 36px;
    color: #fff;
    font-weight: bold;
    box-sizing: border-box;
    content: "NO";
    padding-right: 10px;
    background-color: #bbb;
    color: #fff;
    text-align: right;
  }
  &:before {
    content: "YES";
    padding-left: 10px;
    background-color: #060;
    color: #fff;
  }
`;
export const Switch = styled.span`
  display: block;
  width: 24px;
  margin: 5px;
  background: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 40px;
  border: 0 solid #bbb;
  border-radius: 20px;
  transition: all 0.3s ease-in 0s;
`;
export const Wrap = styled.div`
  display: flex;
`;
export const SearchWrap = styled.div`
  position: relative;
  bottom: 10px;
  display: flex;
`;

export const SortWrap = styled.div`
  border: 1px solid rgb(215, 202, 236);
  border-radius: 16px;
  background: rgb(238, 234, 244);
  transition: border-radius 0.15s ease 0s;
  height: 40px;
  padding: 0 16px;
  cursor: pointer;
  margin-top: -10px;
  display: flex;
  margin-right: 15px;
`;
export const SortSub = styled.p`
  margin-right: 50px;
`;
export const SortWrapper = styled.div`
  display: block;
  position:absolute;
  z-index:10;
  overflow:hidden;
  top:56px;
  border: 1px solid rgb(215, 202, 236);
  border-radius: 16px;
  background: rgb(238, 234, 244);
  transition: border-radius 0.15s ease 0s;
`;
export const SortDiv = styled.div`
  cursor: pointer;
  text-align: center;
  display: flex;
  padding: 10px 15px;
  &:hover {
    background: rgb(168 154 197);
  }
`;
export const SearchInput = styled.input`
  border: 1px solid rgb(215, 202, 236);
  border-radius: 16px;
  background: rgb(238, 234, 244);
  transition: border-radius 0.15s ease 0s;
  height: 40px;
  padding: 0 16px;
  cursor: pointer;
  outline-color: rgb(122 110 170);
  margin-top: -10px;
`;

export const SearchDetails = styled.div`
  margin-top: -15px;
`;
export const Details = styled.p`
  color: rgb(40, 13, 95);
  font-size: 12px;
`;
export const BodyContainer = styled.div`
  margin-top: 50px;
  margin-left: 100px;
  margin-right: 100px;
  display:flex;
  padding:0 30px;
`;
export const BodyWrapper = styled.div`
   padding: 24px;
   width: 300px;
   border:2px solid lightBlue;
    overflow: inherit;
    background: rgb(255, 255, 255);
    border-radius: 24px;
    margin-right:20px;
    margin-left:30px;
`;
export const TokenWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TokenImage = styled.img`
  height: 50px;
  width: 50px;
  margin-left:20px;
  margin-top:10px;
`;
export const TitleWrapper = styled.div`
  display: flex;
  margin-top: -15px;
  flex-direction: column;
`;
export const TokenTitle = styled.h4`
  font-size: 20px;
  margin-left:10px;
  color: rgb(40, 13, 95);
`;
export const TokenButtonWrap = styled.div`
  display: flex;
  margin-top:-17px;
`;
export const TokenButton = styled.button`
  text-align:center;
  width:80px;
  border-radius: 16px;
  height: 28px;
  padding: 0px 8px;
  font-size: 14px;
  color: rgb(118, 69, 217);
  background: rgb(250, 249, 250);
  border-radius: 8px;
  border: 2px solid rgb(118, 69, 217);
  margin-right:7px;

`;
export const TokenButton2 = styled.button`
  -webkit-box-align: center;
  align-items: center;
  border-radius: 16px;
  color: rgb(255, 255, 255);
  display: inline-flex;
  font-weight: 400;
  white-space: nowrap;
  border-radius: 8px;
  height: 28px;
  padding: 0px 8px;
  font-size: 14px;
  background-color: rgb(118, 69, 217);
`;
export const APR = styled.div `
 display:flex;
 justify-content:space-between;
 padding:10px;
`;
export const APRTag = styled.p`
  color: rgb(40, 13, 95);
  font-size: 16px;
`;
export const Amount = styled.p`
  color: rgb(40, 13, 95);
  font-size: 16px;
  font-family:bold;
`;
export const Cake=styled.div `
`;
export const CakeTitle = styled.p`
  color: rgb(118 69 217);
  font-weight: 600;
  line-height: 1.5;
  text-transform: uppercase;
  font-size: 12px;
`;
export const CakeAmount = styled.p`
  font-size: 20px;
  color: rgb(189, 194, 196);
  margin-top:-5px;
`;
export const HarvestButton = styled.button`
  background-color: rgb(233, 234, 235);
  border-color: rgb(233, 234, 235);
  height: 48px;
  padding: 0px 24px;
  left:200px;
  bottom:65px;
  position:relative;
  border-radius:16px;
  box-shadow: none;
  color: rgb(189, 194, 196);
  cursor: not-allowed;
`;
export const DetailWrapper =styled.div `

`;
export const DetailTitle = styled.h2`
  font-size: 16px;
  color: rgb(31 199 212);
  text-align:center;
  cursor:pointer;
`;
export const DetailHeading = styled.h4`
  color: rgb(40, 13, 95);
  font-size: 14px;
`;
export const DetailWrap = styled.div`
 display:flex;
 justify-content:space-between;
`;
export const DetailView =styled.div `
`
export const SwitchWrap = styled.div`
  display: flex;
  background: rgb(238 234 244);
  margin-left: 20px;
  border-radius: 15px;
  cursor: pointer;
  height: 35px;
  opacity: 1;
  border: 1px solid rgb(215, 202, 236);
`;
export const AnchorTag = styled.a`
  color: rgb(122 110 170);
  font-family: bold;
  border-radius: 20px;
  padding: 5px 10px;
  &:hover {
    opacity: 0.5;
  }
`;
export const AnchorTag1 = styled.a`
  background: rgb(122 110 170);
  color: white;
  font-family: bold;
  padding: 5px 20px;
  border-radius: 20px;
  &:hover {
    opacity: 0.5;
  }
`;
