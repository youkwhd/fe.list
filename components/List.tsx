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
        <ul style={{margin: 0, padding: 0}} className="List">
            {Children.map(childrenArr, (child, idx) => {
                return cloneElement(child as ReactElement, {
                    _idx: idx + 1,
                })
            })}
            <ItemCloser />
        </ul>
    )
}

const ItemCloser = (): JSX.Element => {
    return (
        <div style={{borderTop: "1px solid black", height: 30, backgroundColor: "white"}} className="Item-Closer"/>
    )
}

const Item = ({ title, date, color, tags, _idx }: ItemT): JSX.Element => {
    return (
        <li style={{position: "relative", transition: "top ease 0.4s",cursor: "pointer", borderTop: "1px solid black", backgroundColor: "white", listStyle: "none"}}>
            <div style={{display: "flex", height: "100%", alignItems: "center", width: "100%", justifyContent: "space-between", paddingBottom: 10, paddingTop: 10}}>
                <div style={{display: "flex", width: "50%"}}>
                    <span style={{marginRight: 10}}>0{_idx}</span>
                    <div style={{width: 15, height: 15, borderRadius: 2, backgroundColor: color, marginRight: 10}} />
                    <p style={{margin: 0}}>{title}</p>
                </div>
                <div style={{display: "flex", justifyContent: "flex-end", width: "50%"}}>
                    {tags.map((tag) => <span key={tag} style={{cursor: "pointer", fontSize: 10, marginRight: 8, border: "1px solid", borderRadius: 10, padding: 5}}>#{tag.toUpperCase()}</span>)}
                </div>
            </div>
            <div style={{position: "absolute", marginLeft: 53, marginTop: 10, width: "100%", zIndex: -1, bottom: -12, fontSize: 12, backgroundColor: "white"}} className="List-Date">
                <br />
                <span>{date.toLocaleString("default", {month: "long"})} '{date.getDate()}</span>
            </div>
        </li>
    )
}

export { List, Item }
