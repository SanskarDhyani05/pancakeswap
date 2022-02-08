import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../../logic/actions/wallet";
import ConnectWallet from "../../shared/connect-wallet";
import { ThreeColumns } from "../../shared/styles/styled";
import history from "../app/components/history";
import { Paths } from "../app/components/routes/types";
import web3 from "../blockchain/web3";
import { LearnTag } from "../home/style";
import { ConnectWalletWrap } from "../pools/style";
import { Header, HeaderTag } from "../trade/style";
import {
  Amount,
  AmountDiv,
  ArrowImg,
  ArrowWrapper,
  BallColor,
  BallColor1,
  BallColor2,
  BallColor3,
  ButtonDiv,
  BuyButton,
  Circle,
  CircleDiv,
  CircleWrapper,
  ConnectDiv,
  ConnectHeading,
  ConnectWrap,
  Container,
  CorrectImg,
  CorrectWrap,
  CriteriaContainer,
  CriteriaSub,
  CriteriaWrap,
  CriteriaWrapper,
  DetailDiv,
  DetailImg,
  DetailP,
  DetailSub,
  DetailTag,
  Digit,
  DigitDiv,
  DigitWrap,
  DrawHeader,
  DrawHeading,
  DrawSub,
  DrawWrapper,
  First,
  FirstWrap,
  FundContainer,
  FundWrapper,
  List,
  LotteryHeader,
  LotteryHeading,
  MatchAmount,
  MatchDiv,
  MatchHeading,
  MatchWrap,
  Para,
  PrizeAmount,
  PrizeWrapper,
  RoundHeading,
  RoundNumberDiv,
  RoundWrapper,
  RulesHeader,
  RulesHeading,
  RulesSub,
  RulesWrapper,
  StepHeading,
  StepNumber,
  StepSub,
  StepWrapper,
  TicketButton,
  TicketHeading,
  TicketWrapper,
  WinningDiv,
  WinningRound,
  WinningSub,
  WinningWrap,
  WinningWrapper,
} from "./style";
const Lottery = (props: any) => {
  const toLottery = () => {
    history.push(Paths.lottery);
  };
  const [Details, setDetails] = useState(false);
  const [Details1, setDetails1] = useState(false);

  const DetailView = () => {
    setDetails(!Details);
  };

  const DetailView1 = () => {
    setDetails1(!Details1);
  };

  const [connectWallet, setConnectWallet] = React.useState(false);
  const { walletBalance, walletConnectCheck, address } = useSelector(
    (state: any) => state.wallet
  );
  const [activeLink, setActiveLink] = React.useState(history.location.pathname);
  const dispatch = useDispatch();
  const [walletAddress, setWalletAddress] = React.useState("");
  React.useEffect(() => {
    //@ts-ignore
    const walletConnect = JSON.parse(localStorage.getItem("walletConnected"));
    setConnectWallet(walletConnect);
    //@ts-ignore
    const address = JSON.parse(localStorage.getItem("address"));
    setWalletAddress(address);
    //@ts-ignore
  }, [
    connectWallet,
    setConnectWallet,
    // walletConnectCheck,
    localStorage.getItem("walletConnected"),
  ]);

  // get the address of account manually changed from metamask

  React.useEffect(() => {
    const changedAccountAddress = async () => {
      web3.currentProvider.on("accountsChanged", async function () {
        window.location.reload();
        let accounts = await web3.eth.getAccounts();
        localStorage.setItem("address", JSON.stringify(accounts));
        dispatch(Login(accounts));
      });
    };
    changedAccountAddress();
  }, []);

  React.useEffect(() => {
    let accounts = "";
    const changeAdd = async () => {
      accounts = await web3.eth.getAccounts();
      if (accounts.length) {
        accounts = await web3.utils.toChecksumAddress(accounts[0]);
        localStorage.setItem("address", JSON.stringify(accounts));
      }
    };
    changeAdd();
  }, [walletAddress]);

  return (
    <Container>
      <Header>
        <HeaderTag>Prediction</HeaderTag>
        <HeaderTag onClick={toLottery}>Lottery</HeaderTag>
      </Header>
      <LotteryHeader>
        <LotteryHeading>The Pancake Swap Lottery</LotteryHeading>
        <Amount>$230,815</Amount>
        <LotteryHeading style={{ marginTop: "0px" }}>
          {" "}
          in prizes!
        </LotteryHeading>
        <ButtonDiv>
          <BuyButton>Buy Tickets</BuyButton>
        </ButtonDiv>
        <TicketHeading>Get your tickets now !</TicketHeading>
        <AmountDiv>
          <Amount style={{ marginTop: "35px" }}> 3h 13m</Amount>
          <LotteryHeading style={{ marginLeft: "25px" }}>
            until the draw
          </LotteryHeading>
        </AmountDiv>
        <DrawWrapper>
          <DrawHeader>
            <DrawHeading>Next Draw</DrawHeading>
            <DrawSub>#275 | Draw: 17 Nov 2021, 17:30</DrawSub>
          </DrawHeader>
          <PrizeWrapper>
            <DrawHeading style={{ marginTop: "15px" }}>Prize Pot</DrawHeading>
            <PrizeAmount>~$141,203</PrizeAmount>
          </PrizeWrapper>
          <TicketWrapper>
            <DrawHeading>Your Tickets</DrawHeading>
            <TicketButton>Buy Tickets</TicketButton>
          </TicketWrapper>
          <DrawWrapper>
            <DetailTag onClick={DetailView}>
              Details
              <DetailImg
                src={require("../../assets/icons/arrow-down.png").default}
              />
            </DetailTag>
          </DrawWrapper>
          {Details && (
            <DetailDiv>
              <DetailP>
                <DetailSub>
                  Match the winning number in the same order to share prizes.
                  Current prizes up for grabs:
                </DetailSub>
              </DetailP>
              <MatchWrap>
                <MatchDiv>
                  <MatchHeading>Match first 1</MatchHeading>
                  <MatchAmount>178 Cake</MatchAmount>
                </MatchDiv>
                <MatchDiv>
                  <MatchHeading>Match first 2</MatchHeading>
                  <MatchAmount>178 Cake</MatchAmount>
                </MatchDiv>
                <MatchDiv>
                  <MatchHeading>Match first 3</MatchHeading>
                  <MatchAmount>178 Cake</MatchAmount>
                </MatchDiv>
                <MatchDiv>
                  <MatchHeading>Match first 4</MatchHeading>
                  <MatchAmount>178 Cake</MatchAmount>
                </MatchDiv>
              </MatchWrap>
              <MatchWrap>
                <MatchDiv>
                  <MatchHeading>Match first 1</MatchHeading>
                  <MatchAmount>178 Cake</MatchAmount>
                </MatchDiv>
                <MatchDiv>
                  <MatchHeading>Match first 2</MatchHeading>
                  <MatchAmount>178 Cake</MatchAmount>
                </MatchDiv>
                <MatchDiv>
                  <MatchHeading style={{ color: "rgb(237 75 158)" }}>
                    Burn
                  </MatchHeading>
                  <MatchAmount>1788 Cake</MatchAmount>
                </MatchDiv>
              </MatchWrap>
            </DetailDiv>
          )}
        </DrawWrapper>
      </LotteryHeader>
      <ConnectDiv>
        <ConnectWrap>
          <ConnectHeading>
            Connect your wallet
            <br /> to check if you've won!
          </ConnectHeading>
          <ConnectWallet
            connectWallet={connectWallet}
            walletAddress={walletAddress}
            setConnectWallet={setConnectWallet}
            walletBalance={walletBalance}
            checkWallet={props.checkWallet}
            closeWalletModal={() => null}
            setWalletAddress={setWalletAddress}
          />
        </ConnectWrap>
      </ConnectDiv>
      <RoundWrapper>
        <RoundHeading>Finished Rounds</RoundHeading>
        <WinningWrapper>
          <WinningWrap>
            <WinningRound>
              <div style={{ display: "flex" }}>
                <DrawHeading>Round</DrawHeading>
                <RoundNumberDiv>276</RoundNumberDiv>
              </div>
              <WinningSub>Drawn 18 Nov 2021, 05:30</WinningSub>
            </WinningRound>
            <ArrowWrapper>
              <ArrowImg src={require("../../assets/icons/arrow.png").default} />
              <ArrowImg src={require("../../assets/icons/arrow.png").default} />
              <ArrowImg src={require("../../assets/icons/arrow.png").default} />
            </ArrowWrapper>
          </WinningWrap>
          <WinningDiv>
            <DrawHeading>Winning Number</DrawHeading>
            <CircleWrapper>
              <Circle></Circle>
              <Circle></Circle>
              <Circle></Circle>
              <Circle></Circle>
              <Circle></Circle>
              <Circle></Circle>
            </CircleWrapper>
          </WinningDiv>
          <DrawWrapper>
            <DetailTag onClick={DetailView1}>
              Details
              <DetailImg
                src={require("../../assets/icons/arrow-down.png").default}
              />
            </DetailTag>
          </DrawWrapper>
          {Details1 && (
            <DetailDiv>
              <DetailP>
                <DetailSub>
                  Match the winning number in the same order to share prizes.
                  Current prizes up for grabs:
                </DetailSub>
              </DetailP>
              <MatchWrap>
                <MatchDiv>
                  <MatchHeading>Match first 1</MatchHeading>
                  <MatchAmount>178 Cake</MatchAmount>
                </MatchDiv>
                <MatchDiv>
                  <MatchHeading>Match first 2</MatchHeading>
                  <MatchAmount>178 Cake</MatchAmount>
                </MatchDiv>
                <MatchDiv>
                  <MatchHeading>Match first 3</MatchHeading>
                  <MatchAmount>178 Cake</MatchAmount>
                </MatchDiv>
                <MatchDiv>
                  <MatchHeading>Match first 4</MatchHeading>
                  <MatchAmount>178 Cake</MatchAmount>
                </MatchDiv>
              </MatchWrap>
              <MatchWrap>
                <MatchDiv>
                  <MatchHeading>Match first 1</MatchHeading>
                  <MatchAmount>178 Cake</MatchAmount>
                </MatchDiv>
                <MatchDiv>
                  <MatchHeading>Match first 2</MatchHeading>
                  <MatchAmount>178 Cake</MatchAmount>
                </MatchDiv>
                <MatchDiv>
                  <MatchHeading style={{ color: "rgb(237 75 158)" }}>
                    Burn
                  </MatchHeading>
                  <MatchAmount>1788 Cake</MatchAmount>
                </MatchDiv>
              </MatchWrap>
            </DetailDiv>
          )}
        </WinningWrapper>
      </RoundWrapper>

      <RulesWrapper>
        <RulesHeader>
          <RulesHeading>How to play</RulesHeading>
          <RulesSub>
            If the digits on your tickets match the winning numbers in the
            correct order, you win a portion of the prize pool.
          </RulesSub>
          <RulesSub>Simple!</RulesSub>
        </RulesHeader>
        <ThreeColumns style={{ margin: "20px 100px" }}>
          <StepWrapper>
            <StepNumber>Step 1</StepNumber>
            <StepHeading>Buy tickets</StepHeading>
            <StepSub>
              Prices are set when the round starts, equal to 5 USD in CAKE per
              ticket.
            </StepSub>
          </StepWrapper>
          <StepWrapper>
            <StepNumber>Step 2</StepNumber>
            <StepHeading>Wait for the draw</StepHeading>
            <StepSub>
              There are two draws every day: one every 12 hours.
            </StepSub>
          </StepWrapper>
          <StepWrapper>
            <StepNumber>Step 3</StepNumber>
            <StepHeading>Check for prizes</StepHeading>
            <StepSub>
              Once the round’s over, come back to the page and check to see if
              you’ve won!
            </StepSub>
          </StepWrapper>
        </ThreeColumns>
      </RulesWrapper>
      <CriteriaContainer>
        <CriteriaWrapper>
          <StepHeading>Winning Criteria</StepHeading>
          <CriteriaSub>
            The digits in your tickets must match in the correct order to win
          </CriteriaSub>
          <Para>
            Here’s an example lottery draw, with two tickets, A and B.
          </Para>
          <List>
            Ticket A: The first 3 digits and the last 2 digits match, but the
            4th digit is wrong, so this ticket only wins
            <br /> a “Match first 3” prize.
          </List>
          <List>
            Ticket B: Even though the last 5 digits match, the first digit is
            wrong, so this ticket doesn’t win a prize.
          </List>
          <Para>
            Prize brackets don’t ‘stack’: if you match the first 3 digits in
            order, you’ll only win prizes from the ‘Match 3’
            <br /> bracket, and not from ‘Match 1’ and ‘Match 2’.
          </Para>
        </CriteriaWrapper>
        <CriteriaWrap>
          <CircleDiv>
            <BallColor></BallColor>
            <BallColor1></BallColor1>
            <BallColor></BallColor>
            <BallColor2></BallColor2>
            <BallColor3></BallColor3>
            <BallColor></BallColor>
          </CircleDiv>
          <FirstWrap>
            <First>A</First>
            <DigitWrap>
              <CorrectWrap>
                <CorrectImg
                  src={require("../../assets/icons/check-mark.png").default}
                />
                <CorrectImg
                  src={require("../../assets/icons/check-mark.png").default}
                />
                <CorrectImg
                  src={require("../../assets/icons/check-mark.png").default}
                />
                <CorrectImg
                  src={require("../../assets/icons/check-mark.png").default}
                />
                <CorrectImg
                  src={require("../../assets/icons/check-mark.png").default}
                />
                <CorrectImg
                  src={require("../../assets/icons/check-mark.png").default}
                />
              </CorrectWrap>
              <DigitDiv>
                <Digit>9</Digit>
                <Digit>1</Digit>
                <Digit>3</Digit>
                <Digit>9</Digit>
                <Digit>6</Digit>
                <Digit>2</Digit>
              </DigitDiv>
            </DigitWrap>
          </FirstWrap>
          <FirstWrap>
            <First>B</First>
            <DigitWrap>
              <CorrectWrap>
                <CorrectImg
                  src={require("../../assets/icons/check-mark.png").default}
                />
                <CorrectImg
                  src={require("../../assets/icons/check-mark.png").default}
                />
                <CorrectImg
                  src={require("../../assets/icons/check-mark.png").default}
                />
                <CorrectImg
                  src={require("../../assets/icons/check-mark.png").default}
                />
                <CorrectImg
                  src={require("../../assets/icons/check-mark.png").default}
                />
                <CorrectImg
                  src={require("../../assets/icons/check-mark.png").default}
                />
              </CorrectWrap>
              <DigitDiv style={{ background: "lightgrey" }}>
                <Digit>0</Digit>
                <Digit>1</Digit>
                <Digit>3</Digit>
                <Digit>6</Digit>
                <Digit>6</Digit>
                <Digit>2</Digit>
              </DigitDiv>
            </DigitWrap>
          </FirstWrap>
        </CriteriaWrap>
      </CriteriaContainer>
      <FundContainer>
        <FundWrapper>
          <StepHeading>Prize Fund</StepHeading>
          <StepSub>
            The prizes for each lottery round come from three sources:
          </StepSub>
          <CriteriaSub>Ticket Purchases</CriteriaSub>
          <List>
            100% of the CAKE paid by people buying tickets that round goes back
            into the prize pools.
          </List>
          <CriteriaSub>Rollover Prizes</CriteriaSub>
          <List>
            After every round, if nobody wins in one of the prize brackets, the
            unclaimed CAKE for that bracket rolls over into the next round and
            are redistributed among the prize pools.
          </List>
          <CriteriaSub>Cake Injections</CriteriaSub>
          <List>
            An average total of 35,000 CAKE from the treasury is added to
            lottery rounds over the course of a week. This CAKE is of course
            also included in rollovers! Read more in our guide to CAKE
            Tokenomics
          </List>
        </FundWrapper>
      </FundContainer>
    </Container>
  );
};

export default Lottery;
