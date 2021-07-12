import React from "react";
import { DiFirebase, DiReact, AiFillTool, DiNodejs } from "react-icons/di";
import {
    Section,
    SectionDivider,
    SectionText,
    SectionTitle,
} from "../../styles/GlobalComponents";
import {
    List,
    ListContainer,
    ListItem,
    ListParagraph,
    ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
    <Section id="tech">
        <SectionDivider />
        <br />
        <SectionTitle>Technologies</SectionTitle>
        <List>
            <ListItem>
                <DiNodejs size="3rem" />
                <ListContainer>
                    <ListTitle>Back-End</ListTitle>
                    <ListParagraph>
                        Python, GoLang, Node.js, Django, Express.js, MongoDB,
                        PostgreSQL, ElasticSearch, ArangoDB
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiFirebase size="3rem" />
                <ListContainer>
                    <ListTitle>Data Engineering</ListTitle>
                    <ListParagraph>
                        Kafka, RabbitMQ, Hadoop, Spark, Scala, Celery
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiReact size="3rem" />
                <ListContainer>
                    <ListTitle>Front-End</ListTitle>
                    <ListParagraph>
                        React.js, HTML, CSS, React Native
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            {/* <ListItem>
                <AiFillTool size="3rem" />
                <ListContainer>
                    <ListTitle>Front-End</ListTitle>
                    <ListParagraph>
                        React.js, HTML, CSS, React Native
                    </ListParagraph>
                </ListContainer>
            </ListItem> */}
        </List>
    </Section>
);

export default Technologies;
