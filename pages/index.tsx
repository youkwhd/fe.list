import { List, Item } from "../components/List"
import Link from "next/link"

const Home = (): JSX.Element => {
    return (
        <>
            <h1>React List Animation</h1>
            <br />

            <List>
                <Item 
                    title={"Developing Web Apps — Racket"}
                    date={new Date("2022-03-25")}
                    color={"#67B6AB"}
                    tags={["Web Dev", "Backend"]}
                    />
                <Item 
                    title={"Monad Conference — Bandung, Indonesia"} 
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
                    color={"#DFC800"}
                    tags={["OS", "Hardware"]}
                    />
                <Item 
                    title={"Tissue Garuda — Nice So Clean"} 
                    date={new Date("2022-08-15")}
                    color={"#8F4B87"}
                    tags={["Tissue"]}
                    />
            </List>

            <h1>Reference</h1>
            <ul>
                <li>Inspired by — <Link href="https://druh.in">https://druh.in</Link></li>
            </ul>
        </>
    )
}

export default Home