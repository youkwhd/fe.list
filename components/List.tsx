import { Children, cloneElement, ReactElement } from "react"

type ListT = {
    children: JSX.Element | JSX.Element[]
}

type ItemT = {
    title: string
    date: Date
    color: string
    tags: string[]
    _idx?: number
}

const List = ({ children }: ListT): JSX.Element => {
    const childrenArr = Children.toArray(children)
    return (
        <ul style={{ margin: 0, padding: 0, borderBottom: "1px solid black"}} className="List">
            {Children.map(childrenArr, (child, idx) => {
                return cloneElement(child as ReactElement, {
                    _idx: idx + 1
                })
            })}
        </ul>
    )
}

const Item = ({ title, date, color, tags, _idx }: ItemT): JSX.Element => {
    console.log()
    return (
        <>
            <li style={{cursor: "pointer", borderTop: "1px solid black", backgroundColor: "white", listStyle: "none", display: "flex", justifyContent: "space-between", paddingBottom: 10, paddingTop: 10}}>
                <div style={{alignItems: "center"}}>
                    <div style={{display: "flex"}}>
                        <span style={{marginRight: 10}}>0{_idx}</span>
                        <div style={{width: 15, height: 15, borderRadius: 2, backgroundColor: color, marginRight: 10}} />
                        <p style={{margin: 0}}>{title}</p>
                    </div>
                    <br />
                    <span>— {date.toLocaleString("default", {month: "long"})} '{date.getDate()}</span>
                </div>
                <div style={{position: "relative"}}>
                    {tags.map((tag) => <span style={{cursor: "pointer", fontSize: 10, marginRight: 8, border: "1px solid", borderRadius: 10, padding: 5}}>#{tag.toUpperCase()}</span>)}
                </div>
            </li>
        </>
    )
}

export { List, Item }
