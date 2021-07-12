import React from "react";

import {
    BlogCard,
    CardInfo,
    ExternalLinks,
    GridContainer,
    HeaderThree,
    Hr,
    Tag,
    TagList,
    TitleContent,
    UtilityList,
    Img,
} from "./ProjectsStyles";
import {
    Section,
    SectionDivider,
    SectionText,
    SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
    <Section nopadding id="projects">
        <SectionDivider />
        <SectionTitle main>Projects</SectionTitle>
        <GridContainer>
            {projects.map(
                ({
                    id,
                    image,
                    title,
                    description,
                    tags,
                    source,
                    visit,
                    company,
                }) => (
                    <BlogCard key={id}>
                        <Img src={image} />
                        <TitleContent>
                            <HeaderThree>{title}</HeaderThree>
                            <h4>({company})</h4>
                            <Hr />
                        </TitleContent>
                        <CardInfo>{description}</CardInfo>
                        <br />
                        <div>
                            <TitleContent>Tech Stack</TitleContent>
                            <TagList>
                                {tags.map((tag, i) => (
                                    <Tag key={i}>{tag}</Tag>
                                ))}
                            </TagList>
                        </div>
                        {/* {source && (
                            <UtilityList>
                                <ExternalLinks href={source}>
                                    Source
                                </ExternalLinks>
                            </UtilityList>
                        )} */}
                    </BlogCard>
                )
            )}
        </GridContainer>
    </Section>
);

export default Projects;
