import * as React from "react";
import { Comment } from "./Comment";
export interface CommentListProps { data: any; }

export class CommentList extends React.Component<CommentListProps, {}>{
    render() {

        let commentNodes = this.props.data.map( (comment:any) => {
            return (
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            );
        });

        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );

        // return (
        //   <div className="commentList">
        //         <Comment author="Pete Hunt">This is one comment</Comment>
        //         <Comment author="Jordan Walke">This is *another* comment</Comment>
        //   </div>
        // );
    }
};