type ListT = {
    children: JSX.Element | JSX.Element[]
}

type ItemT = {
    title: string
    date?: Date
    color: string
    tags: string[]
}

const List = ({ children }: ListT): JSX.Element => {
    return (
        <ul style={{margin: 0, padding: 0}}>
            {children}
        </ul>
    )
}

const Item = ({ title, date, color, tags }: ItemT): JSX.Element => {
    return (
        <>
            <li style={{listStyle: "none", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20}}>
                <div style={{display: "flex", alignItems: "center"}}>
                    <div style={{width: 15, height: 15, borderRadius: 2, backgroundColor: color, marginRight: 10}} />
                    <p>{title}</p>
                </div>
                <div>
                    {tags.map((tag) => <span style={{fontSize: 10, marginRight: 8, border: "1px solid", borderRadius: 10, padding: 5}}>#{tag.toUpperCase()}</span>)}
                </div>
            </li>
        </>
    )
}

export {List, Item}