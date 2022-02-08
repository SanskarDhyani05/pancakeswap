import styled from "styled-components";
import { colors, screenSizes } from "../../shared/styles/theme";

import backImage from "../../assets/image/Pancake-Swap.jpeg";
import backgroundImage from "../../assets/image/lilac-white-background.jpeg";
import backImage1 from "../../assets/image/CAKE.png";
import backImage2 from "../../assets/image/explore.png";
import backImage3 from "../../assets/image/balls.png";

export const Container = styled.div<any>``;
export const Wrapper = styled.div``;

export const HeadWrap = styled.div`
  background: url(${backImage});
  background-size: cover;
  height: 800px;
  position: relative;
`;
export const Header = styled.div<any>`
  position: absolute;
  margin-left: 200px;
  top: 200px;
`;
export const Heading = styled.h2`
  font-size: 64px;
  color: rgb(118 69 217);
`;
export const SubHeading = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 24px;
`;
export const ButtonWrap = styled.div`
  display: flex;
`;
export const TradeButton = styled.button`
  border: 2px solid rgb(31, 199, 212);
  box-shadow: none;
  color: rgb(31, 199, 212);
  align-items: center;
  border-radius: 16px;
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
  padding: 0px 24px;
  background-color: transparent;
  margin: 20px 0 0 8px;
  height: 41px;
  &:hover {
    background: rgb(31, 199, 212);
    color: white;
  }
`;
export const Wrap = styled.div`
  background: url(${backgroundImage});
  height: 800px;
  display: flex;
  flex-direction: column;
`;
export const Content = styled.div`
  margin-top: 100px;
  text-align: center;
`;
export const Image = styled.img`
  height: 50px;
  width: 50px;
`;
export const WrapHeading = styled.h2`
  font-size: 40px;
  color: rgb(40, 13, 95);
`;
export const WrapHeading1 = styled.h2`
  font-size: 40px;
  color: rgb(40, 13, 95);
  padding-right: 0px;
  margin-top: -30px;
`;
export const WrapSub = styled.p`
  color: rgb(122, 110, 170);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  margin-top: -15px;
`;
export const WrapSub1 = styled.p`
  color: rgb(122, 110, 170);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 32px;
  text-align: center;
`;
export const InfoWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const UserWrap = styled.div`
  background: white;
  padding: 24px 30px;
  margin-right: 20px;
  border-radius: 25px;
`;
export const TradeWrap = styled.div`
  background: white;
  padding: 24px 30px;
  margin-right: 20px;
  border-radius: 25px;
`;
export const StakeWrap = styled.div`
  background: white;
  padding: 24px 30px;
  border-radius: 25px;
`;
export const InfoImage = styled.img`
  height: 20px;
  width: 20px;
  margin-left: 200px;
`;
export const InfoHeading = styled.h3`
  color: rgb(40, 13, 95);
  font-size: 40px;
`;
export const InfoSubheading = styled.p`
  color: rgb(122, 110, 170);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;
export const TradeWrapper = styled.div`
  background: url(${backImage1});
  height: 500px;
  background-size: cover;
`;
export const TradeHeader = styled.div`
  display: block;
  margin-left: 200px;
  margin-top: 200px;
`;
export const TradeHeading = styled.h1`
  color: rgb(40, 13, 95);
  font-weight: 600;
  line-height: 1.1;
  font-size: 40px;
  font-family: bold;
`;
export const TradeSubheading = styled.p`
  color: rgb(122, 110, 170);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 24px;
`;
export const LearnTag = styled.div`
  margin-top: 30px;
  margin-left: 20px;
  font-family: bold;
  a {
    color: rgb(31, 199, 212);
    font-size: 16px;
    &:hover {
      border-bottom: 1px solid rgb(31, 199, 212);
      cursor: pointer;
    }
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
`;
export const ExploreWrapper = styled.div`
  height: 700px;
`;
export const ExploreHeader = styled.div`
  margin-left: 700px;
  margin-top: 200px;
`;
export const ExploreHeading = styled.div`
  color: rgb(40, 13, 95);
  font-size: 40px;
  font-family: bold;
  line-height: 1.3;
  margin-bottom: 10px;
`;
export const ExploreSubheading = styled.div`
  color: rgb(122, 110, 170);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 10px;
`;
export const TradeButtonWrap = styled.div`
  display: flex;
`;
export const SyrupWrap = styled.div`
  display: flex;
`;
export const SyrupWrapper = styled.div`
  margin: -300px 0 0 200px;
`;
export const SyrupHeading = styled.h1`
  color: rgb(40, 13, 95);
  font-size: 18px;
`;
export const SyrupImg = styled.img`
  height: 15px;
  width: 15px;
  padding: 15px 0 0 20px;
  &:hover {
    opacity: 0.5;
  }
`;
export const SyrupSub = styled.div`
  display: block;
  margin-right: 150px;
`;
export const SyrupSubheading = styled.p`
  color: rgb(118 69 217);
  font-size: 12px;
  font-family: bold;
`;
export const SyrupRate = styled.p`
  color: rgb(40, 13, 95);
  font-size: 16px;
`;
export const SyrupDetail = styled.div``;
export const SyrupDetailWrap = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom:80px;
`;
export const PrizeWrapper= styled.div `
 background:url(${backImage3});
 background-size:cover;
 background-position:left;
 background:lightBlue;
 padding:80px 250px;
`;
export const PrizeWrap = styled.div`
  text-align: center;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgb(231, 227, 235);
  box-sizing: border-box;
  backdrop-filter: blur(12px);
  border-radius: 72px;
  padding:40px;
`;
export const PrizeHeading = styled.h1`
  color: rgb(40, 13, 95);
  font-size:40px;
`;
export const PrizeSubheading = styled.p`
  margin-top: -8px;
  color: rgb(122, 110, 170);
  font-size: 16px;
  font-weight: 400;
`;
export const DetailContainer =styled.div `
display:flex;
padding:20px 70px;
`;
export const PredictionWrapper = styled.div`
  background: rgb(255, 178, 55);
  border-radius: 24px;
  color: rgb(40, 13, 95);
  margin-left:100px;
  padding:25px;
`;
export const LotteryWrapper = styled.div`
  background: rgb(60, 23, 134);
  border-radius: 24px;
  margin-left:20px;
  padding:25px;
`;
export const PredictionHeading = styled.h1`
  font-size: 30px;
  margin-top: -10px;
`;
export const PredictionSubheading = styled.p`
 font-family:bold;
 margin-top:-18px;
`;
export const PrizeImg = styled.img`
height:25px;
widthL15px;
position:relative;
right:-100px;

`;
export const LotteryHeading = styled.h1`
  color: rgb(255, 178, 55);
  margin-top:-10px;
`;
export const LotterySubheading = styled.p`
  color: white;
  font-family: bold;
  margin-top: -10px;
`;
export const BuyWrapper = styled.div `
 padding-left:300px;
 padding-top:100px;
 background:url(${backImage1});
 background-size:cover;
background-position:top;

`;
export const BuyHeading = styled.h1`
  color: rgb(40, 13, 95);
  font-size:40px;
`;
export const BuySubheading = styled.div`
  color: rgb(122, 110, 170);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 24px;
`;
export const BuyButtonWrap =styled.div `
 display:flex;
 `;
export const BuyDetailWrap= styled.div `
 margin-right:100px;
`;
export const BuyDetailWrapper = styled.div`
  display: flex;
  margin-top:50px;
`;
export const BuyDetailHeading = styled.h4`
  color: rgb(122, 110, 170);
  font-size: 16px;
  font-weight: 400;
  font-family:bold;
`;
export const BuyDetailSubheading = styled.p`
  color: rgb(40, 13, 95);
  font-size: 22px;
  font-family: bold;
  margin-top:-15px;
  margin-bottom:80px;
`;
export const StartWrapper = styled.div`
  padding: 80px 200px;
  background: rgb(99 82 169);
  border-radius: 8px;
  text-align: center;
`;
export const StartHeading = styled.h2`
margin:auto;
color:white;
font-size:30px;
margin-bottom:30px;
`;
export const StartSubheading = styled.p`
 color:white;
 margin-bottom:24px;
 font-size:16px;
`;
