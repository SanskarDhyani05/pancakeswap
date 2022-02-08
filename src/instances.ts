import { Pair, Pair_Address } from "./abis/Pair";
import { Router, Router_address } from "./abis/Router";
import Web3 from "web3";
import { TokenA, TokenA_add } from "./abis/TokenA";
import { TokenB, TokenB_add } from "./abis/TokenB";

const web3 = new Web3(
  Web3.givenProvider || "https://data-seed-prebsc-2-s1.binance.org:8545/"
);

export const PairInstance = new web3.eth.Contract(Pair, Pair_Address);

export const RouterInstance = new web3.eth.Contract(Router, Router_address);

export const InstanceA = new web3.eth.Contract(TokenA, TokenA_add);

export const InstanceB = new web3.eth.Contract(TokenB, TokenB_add);
