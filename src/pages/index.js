import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Games from "../components/Games/Games";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
    return (
        <Layout>
            <Section grid>
                <Hero />
                <BgAnimation />
            </Section>
            <Projects />
            <Technologies />
            <Timeline />
            <Games />
        </Layout>
    );
};

export default Home;
