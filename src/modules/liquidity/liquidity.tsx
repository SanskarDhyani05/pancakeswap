import React, { useState } from "react";
import { Button } from "../../shared/components/button";
import history from "../app/components/history";
import { Paths } from "../app/components/routes/types";
import { LearnTag } from "../home/style";
import {
  ExchangeWrap,
  Header,
  HeaderTag,
  Heading,
  SubHeading,
  TitleWrap,
  Wrap,
  Wrapper,
  Image,
  ImageWrap,
  ButtonWrap,
  VersionButton,
  VersionWrap,
  HelpButton,
} from "../trade/style";
import {
  Container,
  InputWrapper,
  LiquiditySub,
  LiquidityWrap,
  Input,
  Slider,
} from "./style";

const toTrade = () => {
  history.push(Paths.trade);
};
const toLiquidity = () => {
  history.push(Paths.liquidity);
};
const toAddLiquidity = () => {
  history.push(Paths.addLiquidity);
};
const Liquidity = () => {
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
              <Heading>Liquidity</Heading>
              <SubHeading>Remove liquidity to receive tokens back</SubHeading>
            </TitleWrap>
            <ImageWrap>
              <Image src={require("../../assets/icons/gear.png").default} />
              <Image src={require("../../assets/icons/clock.png").default} />
            </ImageWrap>
          </ExchangeWrap>
          <LiquidityWrap>
            <LiquiditySub>
              Connect to a wallet to view your liquidity
            </LiquiditySub>
          </LiquidityWrap>
          <Button
            onClick={toAddLiquidity}
            style={{ width: "90%", marginLeft: "20px" }}
          >
            + Add Liquidity
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

export default Liquidity;
