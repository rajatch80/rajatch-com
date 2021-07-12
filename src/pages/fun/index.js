import { Layout } from "../../layout/Layout";
import {
    Section,
    SectionDivider,
    SectionTitle,
} from "../../styles/GlobalComponents";
import {
    GridContainer,
    BlogCard,
    TitleContent,
    HeaderThree,
    CardInfo,
    Hr,
    UtilityList,
    ExternalLinks,
} from "./FunStyles";
import { FunSegmentCards } from "../../constants/constants";

const Home = () => {
    return (
        <Layout>
            <Section nopadding id="fun">
                <SectionDivider />
                <SectionTitle main>Fun Segment</SectionTitle>
                <GridContainer>
                    {FunSegmentCards.map(
                        ({ id, title, description, source }) => (
                            <BlogCard key={id}>
                                <TitleContent>
                                    <HeaderThree>{title}</HeaderThree>
                                    <Hr />
                                </TitleContent>
                                <CardInfo>{description}</CardInfo>
                                <br />
                                <UtilityList>
                                    <ExternalLinks href={source}>
                                        Play
                                    </ExternalLinks>
                                </UtilityList>
                            </BlogCard>
                        )
                    )}
                </GridContainer>
            </Section>
        </Layout>
    );
};

export default Home;
