import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
    CompanyContainer,
    FooterWrapper,
    LinkColumn,
    LinkItem,
    LinkList,
    LinkTitle,
    Slogan,
    SocialContainer,
    SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
    return (
        <FooterWrapper>
            <LinkList>
                <LinkColumn>
                    <LinkTitle>Call</LinkTitle>
                    <LinkItem href="tel:+917607312226">
                        +91-760-731-2226
                    </LinkItem>
                </LinkColumn>
                <LinkColumn>
                    <LinkTitle>Email</LinkTitle>
                    <LinkItem href="mailto:chaudharyrajat80@gmail.com">
                        chaudharyrajat80@gmail.com
                    </LinkItem>
                </LinkColumn>
            </LinkList>
            <Slogan>© 2021 Rajat Chaudhary</Slogan>
        </FooterWrapper>
    );
};

export default Footer;
