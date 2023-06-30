import React from "react";

import {
    BlogCard,
    CardInfo,
    GridContainer,
    HeaderThree,
    Hr,
    TitleContent,
    UtilityList,
    ExternalLinks
} from "./GamesStyles";
import {
    Section,
    SectionDivider,
    SectionTitle,
} from "../../styles/GlobalComponents";
import { games } from "../../constants/constants";

const Games = () => (
    <Section nopadding id="games">
        <SectionDivider />
        <br />
        <SectionTitle>Games</SectionTitle>
        <GridContainer>
            {games.map(
                ({
                    id,
                    title,
                    description,
                    visit
                }) => (
                    <BlogCard key={id}>
                        <TitleContent>
                            <HeaderThree>{title}</HeaderThree>
                            <Hr />
                        </TitleContent>
                        <CardInfo>{description}</CardInfo>
                        {visit && (
                            <UtilityList>
                                <ExternalLinks href={visit} target="_blank">
                                    Play!
                                </ExternalLinks>
                            </UtilityList>
                        )}
                    </BlogCard>
                )
            )}
        </GridContainer>
    </Section>
);

export default Games;
