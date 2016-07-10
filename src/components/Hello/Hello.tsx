import * as React from "react";
import * as CommentBox from "../CommentBox/CommentBox";
export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return   <h1>Hello from {this.props.compiler} and {this.props.framework}!!!</h1>;
    }
}
