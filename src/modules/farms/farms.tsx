import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../../shared/components/button";
import history from "../app/components/history";
import { Paths } from "../app/components/routes/types";
import { LearnTag } from "../home/style";
import { Header, HeaderTag } from "../trade/style";
import web3 from "../blockchain/web3";
import ConnectWallet from "../../shared/connect-wallet";
import { Login } from "../../logic/actions/wallet";
import {
  Container,
  Heading,
  HeadWrap,
  Img,
  MainHeader,
  SubHeading,
  Wrapper,
  InputWrapper,
  Slider,
  Input,
  SwitchContainer,
  ToggleSwitch,
  Checkbox,
  Label,
  Inner,
  Switch,
  Wrap,
  SearchWrap,
  SortWrap,
  SortSub,
  SearchInput,
  SearchDetails,
  Details,
  BodyWrapper,
  BodyContainer,
  TokenButton,
  TokenButton2,
  TokenImage,
  TokenTitle,
  TokenWrapper,
  TitleWrapper,
  TokenButtonWrap,
  APR,
  APRTag,
  Amount,
  Cake,
  CakeTitle,
  CakeAmount,
  HarvestButton,
  DetailWrapper,
  DetailTitle,
  DetailView,
  DetailWrap,
  DetailHeading,
  SortDiv,
  SortWrapper,
  SwitchWrap,
  AnchorTag,
  AnchorTag1,
} from "./style";

const Farms = (props: any) => {
  const toFarms = () => {
    history.push(Paths.farms);
  };
  const toPools = () => {
    history.push(Paths.pools);
  };
  const [Toggled, setToggled] = useState(false);
  const [Detail, setDetail] = useState(false);
  const [Detail1, setDetail1] = useState(false);
  const [Detail2, setDetail2] = useState(false);
  const [showTokenModal, setShowTokenModal] = useState(false);
  const [Sort, setSort] = useState(false);
  const [Switch, setSwitch] = useState(false);

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

  const openSortView = () => {
    setSort(!Sort);
  };
  const SwitchView = () => {
    setSwitch(!Switch);
  };
  const openDetailView = () => {
    setDetail(!Detail);
  };

  const openDetailView1 = () => {
    setDetail1(!Detail1);
  };

  const openDetailView2 = () => {
    setDetail2(!Detail2);
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
      <MainHeader>
        <Heading>Farms </Heading>
        <SubHeading>
          Stake LP tokens to earn
          <LearnTag style={{ marginTop: "2px", marginLeft: "0" }}>
            <a>Community Auctions</a>
          </LearnTag>
        </SubHeading>
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
            <span style={{ marginLeft: "20px", color: "rgb(40, 13, 95)" }}>
              Staked Only
            </span>
            <SwitchWrap>
              <AnchorTag>Live</AnchorTag>
              <AnchorTag1>Finished</AnchorTag1>
            </SwitchWrap>
          </Wrap>
          <SearchWrap>
            <SearchDetails>
              <Details>SORT BY</Details>
              <SortWrap onClick={openSortView}>
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
      <BodyContainer>
        <BodyWrapper>
          <TokenWrapper>
            <TokenImage
              src={require("../../assets/icons/pancake.png").default}
            />
            <TitleWrapper>
              <TokenTitle>CAKE-BNB</TokenTitle>
              <TokenButtonWrap>
                <TokenButton> Core</TokenButton>
                <TokenButton2>40X</TokenButton2>
              </TokenButtonWrap>
            </TitleWrapper>
          </TokenWrapper>
          <APR>
            <APRTag>APR :</APRTag>
            <Amount>43.04%</Amount>
          </APR>
          <APR style={{ marginTop: "-50px" }}>
            <APRTag>Earn :</APRTag>
            <Amount>Cake + Fees</Amount>
          </APR>
          <Cake>
            <CakeTitle>CAKE EARNED</CakeTitle>
            <CakeAmount>0.000</CakeAmount>
          </Cake>
          <HarvestButton>Harvest</HarvestButton>
          <CakeTitle style={{ marginTop: "-40px" }}>
            Cake-BNb LP staked
          </CakeTitle>
          <ConnectWallet
            style={{ width: "30%" }}
            connectWallet={connectWallet}
            walletAddress={walletAddress}
            setConnectWallet={setConnectWallet}
            walletBalance={walletBalance}
            checkWallet={props.checkWallet}
            closeWalletModal={() => null}
            setWalletAddress={setWalletAddress}
          />
          <DetailWrapper>
            <DetailTitle onClick={openDetailView}>Details</DetailTitle>
            {Detail && (
              <DetailView>
                <DetailWrap>
                  <DetailHeading>Total Liquidity :</DetailHeading>
                  <DetailHeading>$666678.92</DetailHeading>
                </DetailWrap>
                <LearnTag style={{ marginTop: "-7px" }}>
                  <a>Get Cake-BNB LP</a>
                </LearnTag>
                <LearnTag style={{ marginTop: "0px" }}>
                  <a>View Contact</a>
                </LearnTag>
                <LearnTag style={{ marginTop: "0px" }}>
                  <a>See Pair Info</a>
                </LearnTag>
              </DetailView>
            )}
          </DetailWrapper>
        </BodyWrapper>

        <BodyWrapper>
          <TokenWrapper>
            <TokenImage
              src={require("../../assets/icons/pancake.png").default}
            />
            <TitleWrapper>
              <TokenTitle>CAKE-BNB</TokenTitle>
              <TokenButtonWrap>
                <TokenButton> Core</TokenButton>
                <TokenButton2>40X</TokenButton2>
              </TokenButtonWrap>
            </TitleWrapper>
          </TokenWrapper>
          <APR>
            <APRTag>APR :</APRTag>
            <Amount>43.04%</Amount>
          </APR>
          <APR style={{ marginTop: "-50px" }}>
            <APRTag>Earn :</APRTag>
            <Amount>Cake + Fees</Amount>
          </APR>
          <Cake>
            <CakeTitle>CAKE EARNED</CakeTitle>
            <CakeAmount>0.000</CakeAmount>
          </Cake>
          <HarvestButton>Harvest</HarvestButton>
          <CakeTitle style={{ marginTop: "-40px" }}>
            Cake-BNb LP staked
          </CakeTitle>
          <ConnectWallet
            style={{ width: "30%" }}
            connectWallet={connectWallet}
            walletAddress={walletAddress}
            setConnectWallet={setConnectWallet}
            walletBalance={walletBalance}
            checkWallet={props.checkWallet}
            closeWalletModal={() => null}
            setWalletAddress={setWalletAddress}
          />
          <DetailWrapper>
            <DetailTitle onClick={openDetailView1}>Details</DetailTitle>
            {Detail1 && (
              <DetailView>
                <DetailWrap>
                  <DetailHeading>Total Liquidity :</DetailHeading>
                  <DetailHeading>$666678.92</DetailHeading>
                </DetailWrap>
                <LearnTag style={{ marginTop: "-7px" }}>
                  <a>Get Cake-BNB LP</a>
                </LearnTag>
                <LearnTag style={{ marginTop: "0px" }}>
                  <a>View Contact</a>
                </LearnTag>
                <LearnTag style={{ marginTop: "0px" }}>
                  <a>See Pair Info</a>
                </LearnTag>
              </DetailView>
            )}
          </DetailWrapper>
        </BodyWrapper>
        <BodyWrapper>
          <TokenWrapper>
            <TokenImage
              src={require("../../assets/icons/pancake.png").default}
            />
            <TitleWrapper>
              <TokenTitle>CAKE-BNB</TokenTitle>
              <TokenButtonWrap>
                <TokenButton> Core</TokenButton>
                <TokenButton2>40X</TokenButton2>
              </TokenButtonWrap>
            </TitleWrapper>
          </TokenWrapper>
          <APR>
            <APRTag>APR :</APRTag>
            <Amount>43.04%</Amount>
          </APR>
          <APR style={{ marginTop: "-50px" }}>
            <APRTag>Earn :</APRTag>
            <Amount>Cake + Fees</Amount>
          </APR>
          <Cake>
            <CakeTitle>CAKE EARNED</CakeTitle>
            <CakeAmount>0.000</CakeAmount>
          </Cake>
          <HarvestButton>Harvest</HarvestButton>
          <CakeTitle style={{ marginTop: "-40px" }}>
            Cake-BNb LP staked
          </CakeTitle>

          <ConnectWallet
            style={{ width: "30%" }}
            connectWallet={connectWallet}
            walletAddress={walletAddress}
            setConnectWallet={setConnectWallet}
            walletBalance={walletBalance}
            checkWallet={props.checkWallet}
            closeWalletModal={() => null}
            setWalletAddress={setWalletAddress}
          />
          <DetailWrapper>
            <DetailTitle onClick={openDetailView2}>Details</DetailTitle>
            {Detail2 && (
              <DetailView>
                <DetailWrap>
                  <DetailHeading>Total Liquidity :</DetailHeading>
                  <DetailHeading>$666678.92</DetailHeading>
                </DetailWrap>
                <LearnTag style={{ marginTop: "-7px" }}>
                  <a>Get Cake-BNB LP</a>
                </LearnTag>
                <LearnTag style={{ marginTop: "0px" }}>
                  <a>View Contact</a>
                </LearnTag>
                <LearnTag style={{ marginTop: "0px" }}>
                  <a>See Pair Info</a>
                </LearnTag>
              </DetailView>
            )}
          </DetailWrapper>
        </BodyWrapper>
      </BodyContainer>
    </Container>
  );
};

export default Farms;
