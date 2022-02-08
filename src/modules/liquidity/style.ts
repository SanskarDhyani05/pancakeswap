import styled from "styled-components";
import { colors, screenSizes } from "../../shared/styles/theme";

export const Container = styled.div`
  background: rgb(229 253 255);
  padding-bottom: 20px;
`;
export const LiquidityWrap = styled.div`
  background-color: rgb(238, 238, 238);
  padding: 24px;
`;
export const LiquiditySub = styled.p`
  color: rgb(122, 110, 170);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
`;
export const Input = styled.input`
  padding: 40px;
  outline: none;
  background: transparent;
  border: none;
  width: 90%;
  font-size: 15px;
  color: rgb(40, 13, 95);
`;
export const Slider = styled.span`
  display: flex;
  cursor: pointer;
  width: 50px;
  border-radius: 100px;
  height: 25px;
  top: 30px;
  left: 2px;
  background: rgb(231 227 235);
  position: relative;
  transition: background-color 0.2s, box-shadow 0.2s;
  margin-left: 40px;
  &:before {
    content: "";
    position: absolute;
    width: 21px;
    height: 25px;
    border-radius: 21px;
    transition: 0.2s;
    background: white;
  }

`;
export const InputWrapper = styled.label`
  position: relative;
`;
