import styled from "styled-components";

export const Container = styled.div`
  background: rgb(250, 249, 250);
`;
export const LotteryHeader = styled.div`
  background: rgb(100 75 201);
  border-radius: 8px;
  padding: 40px;
  display: flex;
  flex-direction: column;
`;
export const LotteryHeading = styled.h1`
  color: rgb(255, 255, 255);
  font-size: 20px;
  margin-bottom: 10px;
  text-align: center;
  margin-top: 50px;
  font-family: bold;
`;
export const Amount = styled.h1`
  color: rgb(253, 171, 50);
  font-size: 45px;
  font-family: bold;
  margin-bottom: 10px;
  text-align: center;
`;
export const BuyButton = styled.button`
  margin: auto;
  background: linear-gradient(rgb(118, 69, 217) 0%, rgb(69, 42, 122) 100%);
  width: 200px;
  border: 0px;
  border-radius: 16px;
  box-shadow: rgb(14 14 44 / 40%) 0px -1px 0px 0px inset;
  cursor: pointer;
  margin-top: 30px;
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
  color: white;
  margin-top: 0;
`;
export const ButtonDiv = styled.div`
  background: rgb(255, 178, 55);
  margin: auto;
  padding: 30px;
  border-radius: 15px;
  margin-top: 50px;
`;

export const TicketHeading = styled.h1`
  color: rgb(255, 255, 255);
  font-size: 30px;
  font-family: bold;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 24px;
  margin: auto;
  margin-top: 100px;
`;
export const AmountDiv = styled.div`
  display: flex;
  margin: auto;
`;
export const DrawWrapper = styled.div`
  margin-left: 250px;
  margin-right: 250px;
  background: white;
  border-radius: 24px;
  margin-top: 50px;
`;
export const DrawHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background: linear-gradient(
    111.68deg,
    rgb(242, 236, 242) 0%,
    rgb(232, 242, 246) 100%
  );
  border-radius: 24px;
  padding: 16px 24px;
`;
export const DrawHeading = styled.div`
  color: rgb(40, 13, 95);
  font-size: 20px;
  font-family: bold;
  padding: 15px;
`;
export const DrawSub = styled.div`
  color: rgb(40, 13, 95);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  padding: 15px;
`;
export const PrizeAmount = styled.p`
  color: rgb(118, 69, 217);
  font-weight: 600;
  font-size: 40px;
  line-height: 1;
  margin-left: 30px;
`;
export const PrizeWrapper = styled.div`
  display: flex;
  padding: 10px 20px;
`;
export const TicketWrapper = styled.div`
  display: flex;
  padding: 10px 20px;
  margin-top: -25px;
  padding-bottom: 30px;
  border-bottom: 1px solid lightgrey;
`;
export const TicketButton = styled.button`
  border-radius: 16px;
  border: none;
  box-shadow: rgb(14 14 44 / 40%) 0px -1px 0px 0px inset;
  cursor: pointer;
  font-family: bold;
  font-size: 16px;
  opacity: 1;
  text-align: center;
  outline: 0px;
  transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;
  height: 48px;
  background-color: rgb(31, 199, 212);
  color: white;
  width: 150px;
  margin-left: 40px;
  margin-top: 15px;
  &:hover {
    opacity: 0.5;
  }
`;

export const DetailsWrapper = styled.div``;
export const DetailTag = styled.div`
  display: flex;
  height: 48px;
  margin-top: -20px;
  padding: 0px 24px;
  background-color: transparent;
  color: rgb(31, 199, 212);
  cursor: pointer;
  font-family: bold;
  justify-content: center;
`;
export const DetailImg = styled.img`
  height: 12px;
  width: 10px;
  margin: 6px 0px 0px 15px;
`;
export const DetailDiv = styled.div`
  background: rgb(250, 249, 250);
  padding: 24px;
  box-shadow: rgb(238 234 244) 0px 0px 5px inset;
  border-radius: 10px;
`;
export const DetailP = styled.div``;
export const DetailSub = styled.p`
  color: rgb(40, 13, 95);
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 24px;
  font-size: 14px;
  font-family: inherit;
`;
export const MatchWrap = styled.div`
  display: flex;
`;
export const MatchDiv = styled.div`
  margin-right: 100px;
`;
export const MatchHeading = styled.h3`
  color: rgb(118, 69, 217);
  font-size: 16px;
  font-family: bold;
`;
export const MatchAmount = styled.p`
  color: rgb(40, 13, 95);
  font-weight: 600;
  line-height: 1.5;
  font-size: 20px;
  margin-top: -13px;
  font-family: bold;
`;
export const ConnectDiv = styled.div`
  display: flex;
  background: linear-gradient(
    139.73deg,
    rgb(49, 61, 92) 0%,
    rgb(61, 42, 84) 100%
  );
  padding: 48px 0px;
`;
export const ConnectWrap = styled.div`
   margin: auto;
`;
export const ConnectHeading = styled.div`
  color: rgb(244, 238, 255);
  font-size: 20px;
  font-family:bold;
  margin-top: 40px;
  margin-bottom: 20px;
`;
export const RoundWrapper = styled.div`
  background: linear-gradient(rgb(203, 215, 239) 0%, rgb(154, 159, 208) 100%);
  padding: 30px;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
`;
export const RoundHeading = styled.h1`
  color: rgb(40, 13, 95);
  font-size:30px;
  margin:auto;
  margin-bottom:40px;
`;
export const WinningWrapper = styled.div`
  margin-left: 250px;
  margin-right: 250px;
  background: white;
  border-radius:16px;
 
`;
export const WinningWrap = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgrey;
  padding: 10px 20px;
`;
export const RoundNumberDiv = styled.div`
  background-color: rgb(238, 234, 244);
  border-radius: 16px;
  box-shadow: rgb(74 74 104 / 10%) 0px 2px 2px -1px inset;
  color: rgb(40, 13, 95);
  font-size: 16px;
  outline: 0px;
  height:20px;
  padding:10px;
  margin-top:7px;
  border: 1px solid rgb(215, 202, 236);
`;
export const WinningRound =styled.div `

`;
export const ArrowWrapper =styled.div `
margin-top:25px;
`;
export const WinningSub = styled.p`
  color: rgb(40, 13, 95);
  font-weight: 400;
  line-height: 1.5;
  font-size: 14px;
  padding:15px;
  margin-top:-12px;
  font-family:inherit;
`;
export const ArrowImg =styled.img `
height:20px;
width:20px;
padding-right:30px;
`;

export const WinningDiv = styled.div`
  display: flex;
  border-bottom: 1px solid lightgrey;
  padding: 20px;
`;
export const CircleWrapper= styled.div `
display:flex;
margin:10px 100px;
`;
export const Circle = styled.circle`
  display: block;
  background: pink;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  margin-right: 20px;
`;

export const RulesWrapper = styled.div`
  background: rgb(250, 249, 250);
  padding: 14px 0px 48px;
`;
export const RulesHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-top:40px;
`;
export const RulesHeading = styled.h1`
  color: rgb(118, 69, 217);
  font-size:40px;
  margin:auto;
  margin-bottom:25px;
`;
export const RulesSub = styled.p`
  margin: auto;
  color: rgb(40, 13, 95);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  font-family: Kanit, sans-serif;
`;
export const StepWrapper = styled.div`
  padding: 24px;
  background: rgb(255, 255, 255);
  border-radius: 24px;
  border:1px solid lightgrey;
`;
export const StepHeading = styled.h2`
  color: rgb(118, 69, 217);
`;
export const StepSub = styled.p`
  color: rgb(122, 110, 170);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`; 
export const StepNumber = styled.p`
  color: rgb(40, 13, 95);
  font-weight: 600;
  line-height: 1.5;
  text-transform: uppercase;
  margin-bottom: 16px;
  font-size: 12px;
  text-align: right;
`;
export const CriteriaContainer =styled.div ` 
display:flex;
`;
export const CriteriaWrapper = styled.div`
  margin: 30px 100px;
  background: rgb(250, 249, 250);
  border:1px solid lightgrey;
  border-left:none;
  border-right:none;
  padding: 30px 0;
`;
export const CriteriaSub = styled.p`
  color: rgb(40, 13, 95);
  font-size: 20px;
  font-family: bold;
  background: rgb(250, 249, 250);
  font-weight: 600;
  line-height: 1.1;
`;
export const Para = styled.p`
  color: rgb(122, 110, 170);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 16px;
`;
export const List = styled.li`
  color: rgb(122, 110, 170);
  font-size: 16px;
  line-height: 1.5;
`;
export const CriteriaWrap = styled.div`
  border: 1px solid lightgrey;
  padding: 24px;
  background: rgb(255, 255, 255);
  border-radius: 24px;
  height: 200px;
  margin-top: 100px;
`;
export const CircleDiv = styled.div `
display:flex;
margin-top:20px;
margin-left:20px;
`;
export const BallColor= styled.circle `
height:20px;
width:20px;
background:green;
border-radius:50%;
margin-right:7px;
`;
export const BallColor1 = styled.circle`
  height: 20px;
  width: 20px;
  background: blue;
  border-radius: 50%;
  margin-right: 7px;
`;
export const BallColor2 = styled.circle`
  height: 20px;
  width: 20px;
  background: yellow;
  border-radius: 50%;
  margin-right: 7px;
`;
export const BallColor3 = styled.circle`
  height: 20px;
  width: 20px;
  background: red;
  border-radius: 50%;
  margin-right: 7px;
`;
export const FirstWrap =styled.div `
 display:flex;

`;
export const First = styled.p`
  color: rgb(118, 69, 217);
  font-size: 16px;
  font-weight: 600;
  margin-right: 20px;
  margin-top:30px;
`;
export const DigitWrap =styled.div `
 display:block;
 margin-top:20px;
 margin-left:10px;
`;
export const DigitDiv =styled.div `
 display:flex;
 margin-top:-10px;
`;
export const Digit = styled.p`
  margin-right: 30px;
  color: rgb(40 13 95);
  font-family: "Bold";
`;
export const NumberWrap =styled.div `
`;
export const CorrectWrap =styled.div `
 display:flex;
`;
export const CorrectImg = styled.img `
 height:10px;
 width:10px;
 margin-right:30px;
 margin-bottom:5px;
`;
export const FundContainer = styled.div`
  display: flex;
  margin: 10px 100px;
`;
export const FundWrapper =styled.div `
`;
export const FundWrap =styled.div `
`;
