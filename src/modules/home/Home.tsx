import React, { useState } from "react";
import { Button } from "../../shared/components/button";
import CustomModal from "../../shared/custom-modal";
import Navbar from "../app/components/navbar";
import ConnectWallet from "../../shared/connect-wallet";

import {
  Container,
  Wrapper,
  SubHeading,
  Header,
  Heading,
  TradeButton,
  ButtonWrap,
  Wrap,
  HeadWrap,
  Image,
  Content,
  WrapHeading,
  WrapHeading1,
  WrapSub,
  WrapSub1,
  InfoHeading,
  InfoWrap,
  InfoImage,
  InfoSubheading,
  UserWrap,
  TradeWrap,
  StakeWrap,
  TradeWrapper,
  TradeHeading,
  TradeSubheading,
  LearnTag,
  TradeHeader,
  ButtonWrapper,
  ExploreHeader,
  ExploreHeading,
  ExploreSubheading,
  ExploreWrapper,
  TradeButtonWrap,
  SyrupHeading,
  SyrupImg,
  SyrupSub,
  SyrupWrap,
  SyrupWrapper,
  SyrupDetail,
  SyrupSubheading,
  SyrupRate,
  SyrupDetailWrap,
  PrizeHeading,
  PrizeImg,
  PrizeSubheading,
  PrizeWrap,
  PrizeWrapper,
  LotteryHeading,
  LotterySubheading,
  LotteryWrapper,
  PredictionHeading,
  DetailContainer,
  PredictionSubheading,
  PredictionWrapper,
  BuyWrapper,
  BuyHeading,
  BuySubheading,
  BuyButtonWrap,
  BuyDetailHeading,
  BuyDetailSubheading,
  BuyDetailWrap,
  BuyDetailWrapper,
  StartHeading,
  StartSubheading,
  StartWrapper,
} from "./style";
import { useSelector, useDispatch } from "react-redux";
import history from "../app/components/history";
import web3 from "../blockchain/web3";
import { Login } from "../../logic/actions/wallet";
import { Paths } from "../app/components/routes/types";

const Home = (props: any) => {
  const [showTokenModal, setShowTokenModal] = useState(false);
  const toTrade = () => {
    history.push(Paths.trade);
  };

  const handleToggleModal = () => {
    setShowTokenModal(false);
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
      <Wrapper>
        <HeadWrap>
          <Header>
            <Heading>
              The moon is made
              <br /> of pancakes
            </Heading>
            <SubHeading>
              Trade, earn, and win crypto on the most popular decentralized
              <br />
              platform in the galaxy.
            </SubHeading>
            <ButtonWrap>
              <Button style={{ width: "40%" }}>Connect Wallet</Button>
              <TradeButton>Trade Now</TradeButton>
            </ButtonWrap>
          </Header>
        </HeadWrap>
        <Wrap>
          <Content>
            <Image src={require("../../assets/icons/download.png").default} />
            <WrapHeading>Used by millions</WrapHeading>
            <WrapHeading1>Trusted with billions</WrapHeading1>
            <WrapSub>
              PancakeSwap has the most users of any decentralized platform,
              ever.
            </WrapSub>
            <WrapSub>
              And those users are now entrusting the platform with over $10
              billion in funds.
            </WrapSub>
            <WrapSub1>Will you join them ?</WrapSub1>
            <InfoWrap>
              <UserWrap>
                <InfoImage
                  src={require("../../assets/icons/group.png").default}
                />
                <InfoHeading>
                  2.8 million <br />
                  <span style={{ color: "rgb(118, 69, 217)" }}>users</span>
                </InfoHeading>
                <InfoSubheading>in the last 30 days</InfoSubheading>
              </UserWrap>
              <TradeWrap>
                <InfoImage
                  src={require("../../assets/icons/group.png").default}
                />
                <InfoHeading>
                  31 million <br />
                  <span style={{ color: "rgb(31 199 212)" }}>trades</span>
                </InfoHeading>
                <InfoSubheading> made in the last 30 days</InfoSubheading>
              </TradeWrap>
              <StakeWrap>
                <InfoImage
                  src={require("../../assets/icons/group.png").default}
                />
                <InfoHeading>
                  $10 billion <br />
                  <span style={{ color: "rgb(237 75 158)" }}>staked</span>
                </InfoHeading>
                <InfoSubheading>Total Value Locked</InfoSubheading>
              </StakeWrap>
            </InfoWrap>
          </Content>
        </Wrap>
        <TradeWrapper>
          <TradeHeader>
            <TradeHeading>
              <span style={{ color: "rgb(118 69 217)" }}>Trade</span> Anything.
              No <br />
              registration, no hassle.
            </TradeHeading>
            <TradeSubheading>
              Trade any token on Binance Smart Chain in seconds, just by <br />{" "}
              connecting your wallet.
            </TradeSubheading>
            <ButtonWrapper>
              <Button onClick={toTrade} style={{ width: "13%" }}>Trade Now </Button>
              <LearnTag>
                <a style={{ marginTop: "40px" }}>Learn</a>
              </LearnTag>
            </ButtonWrapper>
          </TradeHeader>
        </TradeWrapper>
        <ExploreWrapper>
          <ExploreHeader>
            <ExploreHeading>
              <span style={{ color: "rgb(118 69 217)" }}>Earn</span> passive
              income
              <br /> with crypto.
            </ExploreHeading>
            <ExploreSubheading>
              PancakeSwap makes it easy to make your crypto work for
              <br /> you.
            </ExploreSubheading>
            <TradeButtonWrap>
              <Button style={{ width: "15%" }}>Explore</Button>
              <LearnTag>
                <a>Learn</a>
              </LearnTag>
            </TradeButtonWrap>
          </ExploreHeader>
        </ExploreWrapper>
        <SyrupWrapper>
          <SyrupWrap>
            <SyrupHeading>
              Top <span style={{ color: "rgb(118 69 217)" }}>Syrup Pools</span>
            </SyrupHeading>
            <SyrupImg
              src={
                require("../../assets/icons/left-and-right-arrows.png").default
              }
            />
          </SyrupWrap>
          <SyrupDetailWrap>
            <SyrupSub>
              <SyrupSubheading>Auto Cake</SyrupSubheading>
              <SyrupRate>82.704 %</SyrupRate>
              <SyrupDetail>APR</SyrupDetail>
            </SyrupSub>
            <SyrupSub>
              <SyrupSubheading>Auto Cake</SyrupSubheading>
              <SyrupRate>82.704 %</SyrupRate>
              <SyrupDetail>APR</SyrupDetail>
            </SyrupSub>
            <SyrupSub>
              <SyrupSubheading>Auto Cake</SyrupSubheading>
              <SyrupRate>82.704 %</SyrupRate>
              <SyrupDetail>APR</SyrupDetail>
            </SyrupSub>
            <SyrupSub>
              <SyrupSubheading>Auto Cake</SyrupSubheading>
              <SyrupRate>82.704 %</SyrupRate>
              <SyrupDetail>APR</SyrupDetail>
            </SyrupSub>
            <SyrupSub>
              <SyrupSubheading>Auto Cake</SyrupSubheading>
              <SyrupRate>82.704 %</SyrupRate>
              <SyrupDetail>APR</SyrupDetail>
            </SyrupSub>
          </SyrupDetailWrap>
        </SyrupWrapper>
        <PrizeWrapper>
          <PrizeWrap>
            <PrizeHeading>
              <span style={{ color: "rgb(118 69 217)" }}>Win</span> millions in
              prizes
            </PrizeHeading>
            <PrizeSubheading>Probably fair, on-chain games.</PrizeSubheading>
            <PrizeSubheading>Win big with PancakeSwap.</PrizeSubheading>
            <DetailContainer>
              <PredictionWrapper>
                <PrizeImg
                  src={require("../../assets/icons/credit-card.png").default}
                />
                <PredictionSubheading style={{ marginTop: "20px" }}>
                  Prediction
                </PredictionSubheading>
                <PredictionHeading>$77 million</PredictionHeading>
                <PredictionSubheading>in BNB so far</PredictionSubheading>
                <PredictionSubheading
                  style={{ marginTop: "20px", fontFamily: "semi-bold" }}
                >
                  Will BND prize rise or fall? guess
                  <br /> correctly to win !
                </PredictionSubheading>
                <Button>Play </Button>
              </PredictionWrapper>
              <LotteryWrapper>
                <PrizeImg
                  src={require("../../assets/icons/credit-card.png").default}
                />
                <LotterySubheading style={{ marginTop: "20px" }}>
                  Lottery
                </LotterySubheading>
                <LotteryHeading>$210,826</LotteryHeading>
                <LotterySubheading>in CAKE prizes this round</LotterySubheading>
                <LotterySubheading
                  style={{ marginTop: "20px", fontFamily: "semi-bold" }}
                >
                  Buy tickets with CAKE, win CAKE
                  <br /> if your numbers match
                </LotterySubheading>
                <Button>Buy Tickets</Button>
              </LotteryWrapper>
            </DetailContainer>
          </PrizeWrap>
        </PrizeWrapper>
        <BuyWrapper>
          <BuyHeading>
            <span style={{ color: "rgb(118, 69, 217)" }}>CAKE</span> makes our
            world <br />
            go round.
          </BuyHeading>
          <BuySubheading>
            CAKE token is at the heart of the PancakeSwap ecosystem.
            <br /> Buy it, win it, farm it, spend it, stake it... heck, you can
            even
            <br /> vote with it!
          </BuySubheading>
          <BuyButtonWrap>
            <Button style={{ width: "15%" }}>Buy Cake</Button>
            <LearnTag>
              <a>Learn</a>
            </LearnTag>
          </BuyButtonWrap>
          <BuyDetailWrapper>
            <BuyDetailWrap>
              <BuyDetailHeading>Total Supply</BuyDetailHeading>
              <BuyDetailSubheading>222,678,78</BuyDetailSubheading>
            </BuyDetailWrap>
            <BuyDetailWrap>
              <BuyDetailHeading>Burned to date</BuyDetailHeading>
              <BuyDetailSubheading>222,678,78</BuyDetailSubheading>
            </BuyDetailWrap>
            <BuyDetailWrap>
              <BuyDetailHeading>Market cap</BuyDetailHeading>
              <BuyDetailSubheading>$ 4.6 million</BuyDetailSubheading>
            </BuyDetailWrap>
            <BuyDetailWrap>
              <BuyDetailHeading>Current emissions</BuyDetailHeading>
              <BuyDetailSubheading>15/Block</BuyDetailSubheading>
            </BuyDetailWrap>
          </BuyDetailWrapper>
        </BuyWrapper>
        <StartWrapper>
          <StartHeading>Start in seconds</StartHeading>
          <StartSubheading>
            Connect your crypto wallet to start using the app in seconds.
          </StartSubheading>
          <StartSubheading style={{ fontFamily: "bold", marginTop: "-10px" }}>
            No Registration needed
          </StartSubheading>
          <LearnTag>
            <a style={{ fontFamily: "bold" }}>Learn how to start</a>
          </LearnTag>
          <ConnectWallet style={{width:'30%'}}
            connectWallet={connectWallet}
            walletAddress={walletAddress}
            setConnectWallet={setConnectWallet}
            walletBalance={walletBalance}
            checkWallet={props.checkWallet}
            closeWalletModal={() => null}
            setWalletAddress={setWalletAddress}
          />
        </StartWrapper>
      </Wrapper>
      {/*<Button
        onClick={() => {
          setShowTokenModal(true);
        }}
      >
        Open Model
      </Button>

      <CustomModal
        heading="this is my model"
        show={showTokenModal}
        toggleModal={handleToggleModal}
      >
        This is my model
      </CustomModal>*/}
    </Container>
  );
};

export default Home;
