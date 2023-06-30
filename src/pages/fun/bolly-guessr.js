import { Layout } from "../../layout/Layout";
import { Section } from "../../styles/GlobalComponents";
import { BlogCard } from "./FunStyles";

const BollywoodMovieGuesser = () => {
    const movies = ["3 idiots", "Hollywood"];
    return (
        <Layout>
            <Section grid>
                <h1>Bolly Guessr</h1>
            </Section>
            <div style={{ "outline-style": "outset" }}>
                <div style={{ "outline-style": "outset" }}>
                    <h1>Guess the movie</h1>
                </div>
                <div style={{ "outline-style": "outset" }}>
                    <p>MOvie name with dashes</p>
                </div>
                <div style={{ "outline-style": "outset" }}>
                    <p>Description of the movie</p>
                </div>
            </div>
        </Layout>
    );
};

export default BollywoodMovieGuesser;
