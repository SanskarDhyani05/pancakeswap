import styled from "styled-components";
import { isTypeAliasDeclaration } from "typescript";

export const Container = styled.div`
  background: white;
`;
export const HeaderWrap = styled.div``;
export const HeaderWrap1 = styled.div`
  display: flex;
  margin-top: 50px;
`;
export const HelpButton = styled.button`
  color: rgb(255, 255, 255);
  font-weight: 600;
  line-height: 1.5;
  font-size: 16px;
  height: 48px;
  padding: 0px 14px;
  background-color: rgb(122, 110, 170);
`;
export const ClaimWrapper = styled.div`
  border-radius: 30px;
  background: white;
  padding: 15px 30px;
  box-shadow: rgb(238 234 244) 0px 0px 5px inset;
`;
export const ClaimWrap = styled.div`
  display: flex;
  margin-top:30px;
`;
export const ClaimButton = styled.button`
  border-radius: 16px;
  border:none;
margin-left:50px;
padding:10px;
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
  height: 32 px;
  padding: 0 px 16 px;
  background-color: rgb(31, 199, 212);
  color: white;

`;
export const ClaimHeading = styled.h4`
  margin-right: 30px;
  font-family: Kanit, sans-serif;
  color: rgb(122, 110, 170); ;
`;
export const ClaimAmount = styled.div`
  color: rgb(40, 13, 95);
  font-family:bold;
`;
export const MainWrapper = styled.div`
  margin-top: 50px;
  margin-left: 100px;
  margin-right: 100px;
  border:1px solid lightgrey;
  border-radius:25px;
`;
export const MainRow =styled.div `
 display:flex;
 padding:5px 20px;
 border-bottom:1px solid lightgrey;
`;
export const Image =styled.img `
 height:30px;
 width:30px;
 margin:25px;
`;
export const ImgName = styled.h3`
  color: rgb(40, 13, 95);
  font-size: 16px;
  margin-right: 100px;
  margin-top:30px;
`;
export const ImgSub = styled.p``;
export const PoolWrap = styled.div`
  display: block;
  margin-right: 100px;
  font-family:bold;
`;
export const CakeProfit = styled.p`
  color: rgb(122, 110, 170);
  font-weight: 400;
  font-size: 12px;  
`;
export const APY = styled.p`
  margin-right: 100px;
  color: rgb(122, 110, 170);
  font-weight: 400;
  font-size: 12px;
  font-family:bold;
`;
export const Staked = styled.p``;
export const Amount = styled.p`
  color: rgb(189, 194, 196);
  font-weight: 600;
  font-size: 16px;
`;
export const DetailRow = styled.div`
  display: flex;
  background: rgb(233 234 235);
  padding:40px;
`;
export const DetailWrap =styled.div `
 display:block;
`;
export const LinkWrap =styled.div `
`;
export const RecentCakeProfit = styled.div`
  padding:16px;
  height:60px;
  width:350px;
  border: 2px solid lightgrey;
  border-radius: 16px;
  margin-left:150px;
  margin-top:20px;
`;
export const RecentName = styled.p`
  color: rgb(118, 69, 217);
  font-weight: 600;
  line-height: 1.5;
  text-transform: uppercase;
  font-size: 12px;
`;
export const StartStaking = styled.div`
  border: 2px solid rgb(238, 234, 244);
  border-radius:16px;
`;
export const ConnectWalletWrap = styled.div`
  border: 2px solid lightgrey;
  border-radius: 16px;
  width: 300px;
  height: 100px;
  padding: 10px 30px 30px;
  margin-left: 90px;
  height: 60px;
  margin-top: 15px;
`;
