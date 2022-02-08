import React, { useState } from "react";
import Web3 from "web3";
import { Router_address } from "../../abis/Router";
import { TokenA_add } from "../../abis/TokenA";
import { TokenB_add } from "../../abis/TokenB";
import { InstanceA, InstanceB, PairInstance, RouterInstance } from "../../instances";
import { Button } from "../../shared/components/button";
import history from "../app/components/history";
import { Paths } from "../app/components/routes/types";
import { LearnTag } from "../home/style";
import { InputWrapper, Input, Slider } from "../liquidity/style";
import {
  Wrapper,
  Wrap,
  ExchangeWrap,
  TitleWrap,
  Heading,
  SubHeading,
  Image,
  ImageWrap,
  TokenSwap,
  ButtonWrap,
  VersionWrap,
  VersionButton,
  HelpButton,
} from "../trade/style";

import { Container, ArrowImg, InputPrice } from "./style";


const toLiquidity = () => {
  history.push(Paths.liquidity);
};

const AddLiquidity = () => {
  
  const [Toggled, setToggled] = useState(false);

  const ToggleMenu = () => {
    setToggled(!Toggled);
  };



const [Price1, setPrice1] = useState(0);
const [Price2, setPrice2] = useState(0);

const web3 = new Web3(
  Web3.givenProvider || "https://data-seed-prebsc-2-s1.binance.org:8545/"
);

async function getAmount(price: any) {
  let getReserves = await PairInstance.methods.getReserves().call();
  let resA = getReserves._reserve0;
  let resB = getReserves._reserve1;
  console.log("RES A", resA);
  console.log("RES B", resB);

  let price1_wei = web3.utils.toWei(price.toString(), "ether");
  console.log("actual price", Price1);
  console.log("actual price in wei ", typeof price1_wei, price1_wei);

  let amountB = await RouterInstance.methods
    .quote(price1_wei, resA, resB)
    .call();

  console.log("amountB in wei", typeof amountB, amountB);

  let amountB_Eth = web3.utils.fromWei(amountB, "ether");
  console.log("amount B ETH", amountB_Eth);

  setPrice2(Number(amountB_Eth));
  setPrice1(price);
}

async function addLiquidity() {
  let priceB = web3.utils.toWei(Price2.toString(), "ether");
  let priceA = web3.utils.toWei(Price1.toString(), "ether");

  const [admin] = await web3.eth.getAccounts();
  console.log("admin address", typeof admin, admin);
  console.log("price A", Price1);
  console.log("price B", Price2);

  console.log("price A_wei", priceA);
  console.log("price B_wei", priceB);


  const MinBUSD = Price1 - (Price1 * 1) / 200;
  const MinBUST = Price2 - (Price2 * 1) / 200;
  // const MinBUSDConvert = (MinBUSD * Math.pow(10,18)).toString()
  // const MinBUSTConvert = (MinBUST * Math.pow(10,18)).toString()
  let MinBUSD_wei: string = web3.utils.toWei(MinBUSD.toString(), "ether");
  let MinBUST_wei: string = web3.utils.toWei(MinBUST.toString(), "ether");

  let DeadLine = (Math.round(new Date().getTime() / 1000) + 900).toString();

  let liq = await RouterInstance.methods
    .addLiquidity(
      TokenA_add,
      TokenB_add,
      priceA,
      priceB,
      MinBUSD_wei,
      MinBUST_wei,
      admin,
      DeadLine
    )
    .send({ from: admin }).then(async()=>{
        const LpToken_amount = await PairInstance.methods.balanceOf(admin).call();
        console.log("this is the lp tokens received",LpToken_amount);
      });

  console.log("this is the added liquidity",liq);
}

async function Approve() {
  const [admin,_] = await web3.eth.getAccounts();

  let price1_wei = web3.utils.toWei(Price1.toString(), "ether");
  let price2_wei = web3.utils.toWei(Price2.toString(), "ether");
  console.log(admin);
  // let ap1 = await Pair_.methods.approve(Router_address,price1_wei).call();
  // let ap2 = await Pair_.methods.approve(Router_address,price2_wei).call();
  // console.log("approve", ap1 );

  let t1 = await InstanceA.methods
    .approve(Router_address, price1_wei)
    .send({ from: admin });
  let t2 = await InstanceB.methods
    .approve(Router_address, price2_wei)
    .send({ from: admin });
  console.log("T1 T2", t1, t2);

  // let ap1 = await Pair_.methods.approve(Router_address,price1_wei).send({from:admin});
  // let ap2 = await Pair_.methods.approve(Router_address,price2_wei).send({from:admin});

  // console.log(ap1);
}

const Value = (e: any) => {
  let value = Number(e.target.value);
  console.log(value);
  getAmount(value);
};


  return (
    <Container>
      <Wrapper>
        <Wrap style={{ marginTop: "11px" }}>
          <ExchangeWrap>
            <ArrowImg src={require("../../assets/icons/arrow.png").default} />
            <TitleWrap>
              <Heading>Add Liquidity</Heading>
              <SubHeading>Add liquidity to receive LP tokens</SubHeading>
            </TitleWrap>
            <ImageWrap>
              <Image src={require("../../assets/icons/gear.png").default} />
              <Image src={require("../../assets/icons/clock.png").default} />
            </ImageWrap>
          </ExchangeWrap>
          <TokenSwap>
            <Input placeholder="BUSD" type="number" onChange={Value} />
          </TokenSwap>
          <span style={{ marginLeft: "220px" }}>+</span>
          <TokenSwap>
            <Input placeholder="BUST" type="number" value={Price2} />
          </TokenSwap>
          <Button style={{ margin: "20px" }} onClick={Approve}>
            Approve
          </Button>
          <Button style={{ margin: "20px" }} onClick={addLiquidity}>
            Add Liquidity
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

export default AddLiquidity;
