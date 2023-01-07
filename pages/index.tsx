import { List, Item } from "../components/List"

const Home = (): JSX.Element => {
    return (
        <>
            <h1>Emmet Abbreviation</h1>

            <List>
                <Item 
                    title={"TMDb API Wrapper — C99"}
                    color={"#67B6AB"}
                    tags={["Web Dev", "Backend"]}
                    />
                <Item 
                    title={"Big O Notation Conference — Bandung, Indonesia"} 
                    color={"#0976B4"}
                    tags={["Algorithm", "Competitive Programming"]}
                    />
                <Item 
                    title={"Intel Evo i7 — Ultra Milk"} 
                    color={"#C23321"}
                    tags={["CPU", "Hardware"]}
                    />
            </List>
        </>
    )
}

export default Home