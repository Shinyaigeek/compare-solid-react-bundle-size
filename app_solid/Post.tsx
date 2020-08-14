//@ts-ignore
import { Component } from "solid-js"

export const Post: Component<{
    title: string
}> = (props: {
    title: string
}) => {
    return (
        <div className="post">{props.title}</div>
    )
}