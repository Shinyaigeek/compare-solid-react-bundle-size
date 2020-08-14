import React from "react";

interface Props {
    title: string
}

export const Post = (props: Props) => {
    return <div className="post">{props.title}</div>
}