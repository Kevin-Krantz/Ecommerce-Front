"use client";

import Link from "next/link";
import styled from "styled-components";
import Facebook from "./icons/Facebook";
import Instagram from "./icons/Instagram";
import Twitter from "./icons/Twitter";
import Github from "./icons/Github";
import Linkedin from "./icons/Linkedin";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterColumn>
          <FooterTitle>COMPANY</FooterTitle>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Careers</FooterLink>
          <FooterLink href="#">Brand Center</FooterLink>
          <FooterLink href="#">Blog</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>HELP CENTER</FooterTitle>
          <FooterLink href="#">Discord Server</FooterLink>
          <FooterLink href="#">Twitter</FooterLink>
          <FooterLink href="#">Facebook</FooterLink>
          <FooterLink href="#">Contact Us</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>LEGAL</FooterTitle>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Licensing</FooterLink>
          <FooterLink href="#">Terms & Conditions</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>DOWNLOAD</FooterTitle>
          <FooterLink href="#">iOS</FooterLink>
          <FooterLink href="#">Android</FooterLink>
          <FooterLink href="#">Windows</FooterLink>
          <FooterLink href="#">MacOS</FooterLink>
        </FooterColumn>
      </FooterGrid>
      <FooterBottom>
        <CopyRight>© 2024 Lekbubblan™</CopyRight>
        <SocialIcons>
          <Facebook />
          <Instagram />
          <Twitter />
          <Github />
          <Linkedin />
        </SocialIcons>
      </FooterBottom>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background-color: #191716;
  padding: 1rem;
  text-align: center;

  @media only screen and (max-width: 600px) {
    position: relative;
    margin-bottom: 79px;
    z-index: -1;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #2c2c2c;
  margin-bottom: 1rem;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  color: #ffffff;
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  color: #aaa;
  margin-bottom: 0.5rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SocialIcons = styled.div`
  display: flex;
  & > *:not(:last-child) {
    margin-right: 20px;
  }

  @media only screen and (max-width: 600px) {
    & > *:not(:last-child) {
      margin-right: 0;
    }
  }
`;

const CopyRight = styled.div`
  color: #aaa;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
