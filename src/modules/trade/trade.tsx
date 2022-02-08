import React, { Component,useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../shared/components/button";
import history from "../app/components/history";
import ConnectWallet from "../../shared/connect-wallet";
import { Paths } from "../app/components/routes/types";
import { LearnTag, TradeWrap } from "../home/style";
import {
  Container,
  ExchangeWrap,
  Header,
  HeaderTag,
  Heading,
  ImageWrap,
  SubHeading,
  TitleWrap,
  Wrapper,
  Image,
  Wrap,
  TokenSwap,
  HelpButton,
  ButtonWrap,
  VersionWrap,
  VersionButton,
} from "./style";
import { Input, InputWrapper, Slider } from "../liquidity/style";
import { ToggleMenu } from "../app/components/navbar/style";

 

const Trade = (props: any) => {

    const toTrade = () => {
      history.push(Paths.trade);
    };
    const toLiquidity = () => {
      history.push(Paths.liquidity);
    };
  const [Toggled, setToggled] = useState(false);

  const ToggleMenu = () => {
    setToggled(!Toggled);
  };
  return (
    <Container>
      <Header>
        <HeaderTag onClick={toTrade}>Exchange</HeaderTag>
        <HeaderTag onClick={toLiquidity}>Liquidity</HeaderTag>
      </Header>
      <Wrapper>
        <Wrap>
          <ExchangeWrap>
            <TitleWrap>
              <Heading>Exchange</Heading>
              <SubHeading>Trade tokens in an instant</SubHeading>
            </TitleWrap>
            <ImageWrap>
              <Image src={require("../../assets/icons/gear.png").default} />
              <Image src={require("../../assets/icons/clock.png").default} />
            </ImageWrap>
          </ExchangeWrap>
          <TokenSwap></TokenSwap>
          <Image
            style={{ marginLeft: "200px" }}
            src={require("../../assets/icons/arrow-down.png").default}
          />
          <TokenSwap></TokenSwap>
          <Button style={{ width: "90%", marginLeft: "20px" }}>
            Connect Wallet
          </Button>
        </Wrap>
      </Wrapper>
      <ButtonWrap>
        <VersionWrap>
          <InputWrapper onChange={ToggleMenu}>
            <Input type="checkbox" />
            <Slider></Slider>
          </InputWrapper>
          <LearnTag>
            <a>Convert ERC-20 to BEP-20</a>
          </LearnTag>
        </VersionWrap>
        <HelpButton>Need Help ?</HelpButton>
      </ButtonWrap>
    </Container>
  );
};

export default Trade;
