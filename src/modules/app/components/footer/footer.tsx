import React, { useState } from "react";
import history from "../history";
import { Paths } from "../routes/types";
import { FooterContainer, FooterWrapper, FooterTabs, FooterTab,ListHead, YellowTab ,LinkImg,LinkWrapper, Container, FooterEnd, LanguageWrap, BuyWrap} from "./style";
import { Wrapper,Img,HeadImage,Header } from "../navbar/style";
import { Button } from "../../../../shared/components/button";

const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        <FooterWrapper style={{ marginLeft: "100px" }}>
          <ListHead>About</ListHead>
          <FooterTabs>
            <FooterTab>
              <a>Contact</a>
            </FooterTab>
            <FooterTab>
              <a>Blog</a>
            </FooterTab>
            <FooterTab>
              <a>Community</a>
            </FooterTab>
            <FooterTab>
              <a>Cake Token</a>
            </FooterTab>
            <FooterTab>
              <a>__</a>
            </FooterTab>
            <YellowTab>
              <a>Online Store</a>
            </YellowTab>
          </FooterTabs>
        </FooterWrapper>
        <FooterWrapper>
          <ListHead>Help</ListHead>
          <FooterTabs>
            <FooterTab>
              <a>Customer Support</a>
            </FooterTab>
            <FooterTab>
              <a>Troubleshooting</a>
            </FooterTab>
            <FooterTab>
              <a>Guides</a>
            </FooterTab>
          </FooterTabs>
        </FooterWrapper>
        <FooterWrapper>
          <ListHead>Developers</ListHead>
          <FooterTabs>
            <FooterTab>
              <a>Github</a>
            </FooterTab>
            <FooterTab>
              <a>Documentation</a>
            </FooterTab>
            <FooterTab>
              <a>Bug Bounty</a>
            </FooterTab>
            <FooterTab>
              <a>Audits</a>
            </FooterTab>
            <FooterTab>
              <a>Careers</a>
            </FooterTab>
          </FooterTabs>
        </FooterWrapper>
        <FooterWrapper>
          <Wrapper style={{ marginTop: "10px" }}>
            <HeadImage
              src={require("../../../../assets/icons/download.png").default}
            />
            <Header style={{ color: "white", marginLeft: "5px" }}>
              PancakeSwap
            </Header>
          </Wrapper>
        </FooterWrapper>
      </FooterContainer>
      <LinkWrapper>
        <LinkImg
          src={require("../../../../assets/icons/twitter-footer.png").default}
        />
        <LinkImg
          src={require("../../../../assets/icons/telegram-footer.png").default}
        />
        <LinkImg src={require("../../../../assets/icons/reddit.png").default} />
        <LinkImg
          src={require("../../../../assets/icons/instagram.png").default}
        />
        <LinkImg src={require("../../../../assets/icons/github.png").default} />
      </LinkWrapper>
      <FooterEnd>
        <LanguageWrap>
          <LinkImg
            style={{ marginRight: "5px" }}
            src={require("../../../../assets/icons/sun.png").default}
          />
          <LinkImg
            src={require("../../../../assets/icons/night-mode.png").default}
          />
          <LinkImg
            style={{ marginRight: "10px" }}
            src={require("../../../../assets/icons/globe.png").default}
          />
          <span style={{ color: "rgb(184 173 210)", cursor: "pointer" }}>
            EN
          </span>
        </LanguageWrap>
        <BuyWrap>
          <LinkImg
            style={{ marginRight: "10px" }}
            src={require("../../../../assets/icons/pancake.png").default}
          />
          <span style={{ color: " rgb(122, 110, 170)" }}>$20.389</span>
          <Button
            style={{
              padding: "0 20px",
              marginTop: "-10px",
              marginLeft: "20px",
            }}
          >
            Buy Cake
          </Button>
        </BuyWrap>
      </FooterEnd>
    </Container>
  );
};

export default Footer;
