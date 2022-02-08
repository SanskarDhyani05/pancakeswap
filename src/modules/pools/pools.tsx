import React, { useState } from "react";
import {
  Amount,
  APY,
  CakeProfit,
  PoolWrap,
  ClaimAmount,
  ClaimButton,
  ClaimHeading,
  ClaimWrap,
  ClaimWrapper,
  Container,
  HeaderWrap,
  HeaderWrap1,
  ImgName,
  MainRow,
  Image,
  MainWrapper,
  DetailRow,
  DetailWrap,
  RecentCakeProfit,
  RecentName,
  ConnectWalletWrap,
} from "./style";
import { Header, HeaderTag, HelpButton } from "../trade/style";
import {
  Heading,
  MainHeader,
  SubHeading,
  Wrapper,
  HeadWrap,
  Wrap,
  InputWrapper,
  Input,
  Slider,
  SwitchContainer,
  Label,
  ToggleSwitch,
  Checkbox,
  Inner,
  Img,
  Switch,
  SearchWrap,
  SearchDetails,
  Details,
  SortWrap,
  SortSub,
  SearchInput,
  SortDiv,
  SortWrapper,
} from "../farms/style";
import history from "../app/components/history";
import { Paths } from "../app/components/routes/types";
import { LearnTag } from "../home/style";
import ConnectWallet from "../../shared/connect-wallet";
import { useSelector, useDispatch } from "react-redux";
import web3 from "../blockchain/web3";
import { Login } from "../../logic/actions/wallet";
const Pools = (props: any) => {
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

  const [Detail, setDetail] = useState(false);
  const [Dt, setDt] = useState("Details");

  const ChangeDT = (Dt: any) => {
    setDt(Dt);
  };
  const toDetailView = () => {
    setDetail(!Detail);
  };
  const toFarms = () => {
    history.push(Paths.farms);
  };
  const toPools = () => {
    history.push(Paths.pools);
  };

  const [Toggled, setToggled] = useState(false);
  const [Sort, setSort] = useState(false);

  const SortView = () => {
    setSort(!Sort);
  };
  const ToggleMenu = () => {
    setToggled(!Toggled);
  };
  const [label, setLabel] = useState(false);

  const LabelMenu = () => {
    setLabel(!label);
  };

  return (
    <Container>
      <Header>
        <HeaderTag onClick={toFarms}>Farms</HeaderTag>
        <HeaderTag onClick={toPools}>Pools</HeaderTag>
      </Header>
      <MainHeader style={{ justifyContent: "space-between", display: "flex" }}>
        <HeaderWrap>
          <Heading>Syrup Pools </Heading>
          <SubHeading>Just stake some tokens to earn.</SubHeading>
          <SubHeading style={{ marginTop: "-20px" }}>
            High APR, low risk .
          </SubHeading>
        </HeaderWrap>
        <HeaderWrap1>
          <HelpButton>Help</HelpButton>
          <ClaimWrapper>
            <ClaimHeading>Auto CAKE Bounty</ClaimHeading>
            <ClaimWrap>
              <ClaimAmount>0.031</ClaimAmount>
              <ClaimButton>Claim</ClaimButton>
            </ClaimWrap>
          </ClaimWrapper>
        </HeaderWrap1>
      </MainHeader>

      <Wrapper>
        <HeadWrap>
          <Wrap>
            <Img src={require("../../assets/icons/grid.png").default} />
            <Img
              src={require("../../assets/icons/bullet-points.png").default}
            />
            <InputWrapper style={{ bottom: "30px" }} onChange={ToggleMenu}>
              <Input type="checkbox" />
              <Slider></Slider>
            </InputWrapper>
            <span
              style={{
                marginLeft: "20px",
                color: "rgb(40, 13, 95)",
                fontFamily: "Kanit, sans-serif",
              }}
            >
              Staked Only
            </span>
            <SwitchContainer onClick={LabelMenu}>
              {label}{" "}
              <ToggleSwitch>
                <Checkbox type="checkbox" name="label" id="label" />
                <Label>
                  <Inner />
                  <Switch />
                </Label>
              </ToggleSwitch>
            </SwitchContainer>
          </Wrap>
          <SearchWrap>
            <SearchDetails>
              <Details>SORT BY</Details>
              <SortWrap onClick={SortView}>
                <SortSub>Hot</SortSub>
                <Img
                  style={{
                    marginTop: "20px",
                    marginRight: "0",
                    height: "10px",
                    width: "10px",
                  }}
                  src={require("../../assets/icons/arrow-down.png").default}
                />
              </SortWrap>
              {Sort && (
                <SortWrapper>
                  <SortDiv>APR</SortDiv>
                  <SortDiv>Earned </SortDiv>
                  <SortDiv>Total Staked</SortDiv>
                </SortWrapper>
              )}
            </SearchDetails>
            <SearchDetails>
              <Details>SEARCH</Details>
              <SearchInput placeholder="Search Farms" />
            </SearchDetails>
          </SearchWrap>
        </HeadWrap>
      </Wrapper>
      <MainWrapper>
        <MainRow onClick={toDetailView}>
          <Image src={require("../../assets/icons/pancake.png").default} />
          <ImgName>Auto CAKE</ImgName>
          <PoolWrap>
            <CakeProfit>Recent Cake Profit</CakeProfit>
            <Amount>0.0</Amount>
          </PoolWrap>
          <APY>
            APY
            <Amount>72.06%</Amount>
          </APY>
          <PoolWrap>
            <CakeProfit>Total Staked</CakeProfit>
            <Amount>12345678 Cake</Amount>
          </PoolWrap>
          <PoolWrap>
            <CakeProfit>Ends In</CakeProfit>
            <Amount>_</Amount>
          </PoolWrap>
          <LearnTag style={{ marginLeft: "50px" }}>
            <a
              onClick={() => {
                ChangeDT("Hide");
              }}
            >
              {Dt}
            </a>
          </LearnTag>
        </MainRow>
        {Detail && (
          <DetailRow>
            <DetailWrap>
              <LearnTag>
                <a>See Token Info</a>
              </LearnTag>
              <LearnTag style={{ marginTop: "5px" }}>
                <a>View Project Site</a>
              </LearnTag>
              <LearnTag style={{ marginTop: "5px" }}>
                <a>View Contract</a>
              </LearnTag>
            </DetailWrap>
            <RecentCakeProfit>
              <RecentName>Recent Cake Profit</RecentName>
            </RecentCakeProfit>
            <ConnectWalletWrap>
              <div style={{ marginTop: "10px" }}>
                <span
                  style={{
                    color: " rgb(122, 110, 170)",
                    fontSize: "12px",
                    fontFamily: "bold",
                  }}
                >
                  Start staking
                </span>
                <ConnectWallet
                  connectWallet={connectWallet}
                  walletAddress={walletAddress}
                  setConnectWallet={setConnectWallet}
                  walletBalance={walletBalance}
                  checkWallet={props.checkWallet}
                  closeWalletModal={() => null}
                  setWalletAddress={setWalletAddress}
                />
              </div>
            </ConnectWalletWrap>
          </DetailRow>
        )}
        <MainRow>
          <Image src={require("../../assets/icons/pancake.png").default} />
          <ImgName>Auto CAKE</ImgName>
          <PoolWrap>
            <CakeProfit>Recent Cake Profit</CakeProfit>
            <Amount>0.0</Amount>
          </PoolWrap>
          <APY>
            APY
            <Amount>72.06%</Amount>
          </APY>
          <PoolWrap>
            <CakeProfit>Total Staked</CakeProfit>
            <Amount>12345678 Cake</Amount>
          </PoolWrap>
          <PoolWrap>
            <CakeProfit>Ends In</CakeProfit>
            <Amount>_</Amount>
          </PoolWrap>
          <LearnTag style={{ marginLeft: "50px" }}>
            <a>Details</a>
          </LearnTag>
        </MainRow>
        <MainRow>
          <Image src={require("../../assets/icons/pancake.png").default} />
          <ImgName>Auto CAKE</ImgName>
          <PoolWrap>
            <CakeProfit>Recent Cake Profit</CakeProfit>
            <Amount>0.0</Amount>
          </PoolWrap>
          <APY>
            APY
            <Amount>72.06%</Amount>
          </APY>
          <PoolWrap>
            <CakeProfit>Total Staked</CakeProfit>
            <Amount>12345678 Cake</Amount>
          </PoolWrap>
          <PoolWrap>
            <CakeProfit>Ends In</CakeProfit>
            <Amount>_</Amount>
          </PoolWrap>
          <LearnTag style={{ marginLeft: "50px" }}>
            <a>Details</a>
          </LearnTag>
        </MainRow>
        <MainRow>
          <Image src={require("../../assets/icons/pancake.png").default} />
          <ImgName>Auto CAKE</ImgName>
          <PoolWrap>
            <CakeProfit>Recent Cake Profit</CakeProfit>
            <Amount>0.0</Amount>
          </PoolWrap>
          <APY>
            APY
            <Amount>72.06%</Amount>
          </APY>
          <PoolWrap>
            <CakeProfit>Total Staked</CakeProfit>
            <Amount>12345678 Cake</Amount>
          </PoolWrap>
          <PoolWrap>
            <CakeProfit>Ends In</CakeProfit>
            <Amount>_</Amount>
          </PoolWrap>
          <LearnTag style={{ marginLeft: "50px" }}>
            <a>Details</a>
          </LearnTag>
        </MainRow>
        <MainRow>
          <Image src={require("../../assets/icons/pancake.png").default} />
          <ImgName>Auto CAKE</ImgName>
          <PoolWrap>
            <CakeProfit>Recent Cake Profit</CakeProfit>
            <Amount>0.0</Amount>
          </PoolWrap>
          <APY>
            APY
            <Amount>72.06%</Amount>
          </APY>
          <PoolWrap>
            <CakeProfit>Total Staked</CakeProfit>
            <Amount>12345678 Cake</Amount>
          </PoolWrap>
          <PoolWrap>
            <CakeProfit>Ends In</CakeProfit>
            <Amount>_</Amount>
          </PoolWrap>
          <LearnTag style={{ marginLeft: "50px" }}>
            <a>Details</a>
          </LearnTag>
        </MainRow>
        <MainRow>
          <Image src={require("../../assets/icons/pancake.png").default} />
          <ImgName>Auto CAKE</ImgName>
          <PoolWrap>
            <CakeProfit>Recent Cake Profit</CakeProfit>
            <Amount>0.0</Amount>
          </PoolWrap>
          <APY>
            APY
            <Amount>72.06%</Amount>
          </APY>
          <PoolWrap>
            <CakeProfit>Total Staked</CakeProfit>
            <Amount>12345678 Cake</Amount>
          </PoolWrap>
          <PoolWrap>
            <CakeProfit>Ends In</CakeProfit>
            <Amount>_</Amount>
          </PoolWrap>
          <LearnTag style={{ marginLeft: "50px" }}>
            <a>Details</a>
          </LearnTag>
        </MainRow>
        <MainRow>
          <Image src={require("../../assets/icons/pancake.png").default} />
          <ImgName>Auto CAKE</ImgName>
          <PoolWrap>
            <CakeProfit>Recent Cake Profit</CakeProfit>
            <Amount>0.0</Amount>
          </PoolWrap>
          <APY>
            APY
            <Amount>72.06%</Amount>
          </APY>
          <PoolWrap>
            <CakeProfit>Total Staked</CakeProfit>
            <Amount>12345678 Cake</Amount>
          </PoolWrap>
          <PoolWrap>
            <CakeProfit>Ends In</CakeProfit>
            <Amount>_</Amount>
          </PoolWrap>
          <LearnTag style={{ marginLeft: "50px" }}>
            <a>Details</a>
          </LearnTag>
        </MainRow>
      </MainWrapper>
    </Container>
  );
};

export default Pools;
