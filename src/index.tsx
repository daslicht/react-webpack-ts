import * as React from "react";
import * as ReactDOM from "react-dom";

import { CommentBox } from "./components/CommentBox/CommentBox";
import { Hello } from "./components/Hello/Hello";

 
let data = [
{id: 1, author: "Pete Hunt edited", text: "This is one comment"},
{id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

ReactDOM.render(
    <CommentBox data={data}  url="/api/comments" pollInterval={2000}/>,
    // <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);
