import React from "react";

import {
    Section,
    SectionText,
    SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { HeroSummary, ResumeLink } from "../../constants/constants";

const Hero = () => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                I'm Rajat Chaudhary
            </SectionTitle>
            <SectionText>{HeroSummary}</SectionText>
            <Button onClick={() => (window.location = ResumeLink)}>
                Resume
            </Button>
        </LeftSection>
    </Section>
);

export default Hero;
