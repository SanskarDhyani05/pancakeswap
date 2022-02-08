import React, { useState } from "react";
import {
  Container,
  NavContainer,
  NavTab,
  WalletWrap,
  NavContainerWrap,
  Header,
  Wrapper,
  Img,
  HeadImage,
  HoverTabs,
  HoverWrap,
  HoverList,

} from "./style";
import { useSelector, useDispatch } from "react-redux";
import { Paths } from "../routes/types";
import history from "../history";
// import { getBalance, Login } from "../../../../logic/actions";
import ConnectWallet from "../../../../shared/connect-wallet";
import web3 from "../../../blockchain/web3";
import { Login } from "../../../../logic/actions/wallet";
import { Button } from "../../../../shared/components/button";
import { LinkImg } from "../footer/style";

const Navbar = (props: any) => {
  const [connectWallet, setConnectWallet] = React.useState(false);
  const { walletBalance, walletConnectCheck, address } = useSelector(
    (state: any) => state.wallet
  );
  const [activeLink, setActiveLink] = React.useState(history.location.pathname);
  const dispatch = useDispatch();
  const [walletAddress, setWalletAddress] = React.useState("");

 {/* React.useEffect(() => {
    const path = history.location.pathname;
    if (path === "/trade") {
      setActiveLink("Trade");
    } else if (path === "/pool") {
      setActiveLink("pool");
    } else if (path === "/farming") {
      setActiveLink("farming");
    } else if (path === "/referral") {
      setActiveLink("referral");
    }
    history.push(history.location.pathname);
  }, []);*/}

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

  const toHome = () => {
    history.push(Paths.home);
  };
  const toTrade = () => {
    history.push(Paths.trade);
  };
  const toLiquidity = () => {
    history.push(Paths.liquidity);
  };
  const toFarms = () => {
    history.push(Paths.farms);
  };
  const toPools = () => {
    history.push(Paths.pools);
  };
    const toLottery = () => {
      history.push(Paths.lottery);
    };

  return (
    <Container>
      <NavContainerWrap>
        <NavContainer>
          <Wrapper>
            <HeadImage
              src={require("../../../../assets/icons/download.png").default}
            />
            <Header onClick={toHome}>PancakeSwap</Header>
            <HoverTabs>
              <NavTab>
                Trade
                <HoverWrap>
                  <HoverList onClick={toTrade}>Exchange</HoverList>
                  <HoverList onClick={toLiquidity}>Liquidity</HoverList>
                </HoverWrap>
              </NavTab>
              <NavTab>
                Earn
                <HoverWrap>
                  <HoverList onClick={toFarms}>Farms</HoverList>
                  <HoverList onClick={toPools}>Pools</HoverList>
                </HoverWrap>
              </NavTab>
              <NavTab>
                Win
                <HoverWrap>
                  <HoverList>Prediction(BETA)</HoverList>
                  <HoverList onClick={toLottery}>Lottery</HoverList>
                </HoverWrap>
              </NavTab>
              <NavTab>
                NFT
                <HoverWrap>
                  <HoverList>OverView</HoverList>
                  <HoverList>Collections</HoverList>
                </HoverWrap>
              </NavTab>
              <NavTab>
                More ..
                <HoverWrap>
                  <HoverList>Info</HoverList>
                  <HoverList>IFO</HoverList>
                  <HoverList>Voting</HoverList>
                  <HoverList>Leaderboard</HoverList>
                  <HoverList>Blog</HoverList>
                  <HoverList>Docks</HoverList>
                </HoverWrap>
              </NavTab>
            </HoverTabs>
          </Wrapper>

          <WalletWrap>
            <LinkImg
              style={{ marginRight: "10px", marginTop: "10px" }}
              src={require("../../../../assets/icons/pancake.png").default}
            />
            <span style={{ color: "rgb(184 173 210)", marginTop: "10px" }}>
              $20.389
            </span>
            <Img
              style={{ marginLeft: "20px" }}
              src={require("../../../../assets/icons/globe.png").default}
            />
            <Img
              src={require("../../../../assets/icons/gear.png").default}
            />
            <ConnectWallet
              connectWallet={connectWallet}
              walletAddress={walletAddress}
              setConnectWallet={setConnectWallet}
              walletBalance={walletBalance}
              checkWallet={props.checkWallet}
              closeWalletModal={() => null}
              setWalletAddress={setWalletAddress}
            />
          </WalletWrap>
        </NavContainer>
      </NavContainerWrap>
    </Container>
  );
};

export default Navbar;
