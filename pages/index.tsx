import { List, Item } from "../components/List"

const Home = (): JSX.Element => {
    return (
        <>
            <h1>Emmet Abbreviation</h1>

            <List>
                <Item 
                    title={"TMDb API Wrapper — C99"}
                    date={new Date("2022-03-25")}
                    color={"#67B6AB"}
                    tags={["Web Dev", "Backend"]}
                    />
                <Item 
                    title={"Big O Notation Conference — Bandung, Indonesia"} 
                    date={new Date("2023-01-21")}
                    color={"#0976B4"}
                    tags={["Algorithm", "Competitive Programming"]}
                    />
                <Item 
                    title={"Intel Evo i7 — Ultra Milk"} 
                    date={new Date("2022-11-30")}
                    color={"#C23321"}
                    tags={["CPU", "Hardware"]}
                    />
                <Item 
                    title={"Linux with Rust kernels — Linus Torvalds"} 
                    date={new Date("2024-04-06")}
                    color={"#FFFFCC"}
                    tags={["OS", "Hardware"]}
                    />
                <Item 
                    title={"Tissue Garuda — Nice So Clean"} 
                    date={new Date("2022-08-15")}
                    color={"#8F4B87"}
                    tags={["Tissue"]}
                    />
            </List>
        </>
    )
}

export default Home