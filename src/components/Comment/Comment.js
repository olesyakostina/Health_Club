import React, { useContext, useEffect } from "react";
import AddComments from "./AddComment";
import CommentsList from "./CommentList";
import { commentContext } from "../Context/CommentContext";
import { Comment } from "semantic-ui-react";
import { useAuth } from "../Context/AuthContext";
import "./Comment.css";

const Comments = () => {
    const { getComment } = useContext(commentContext);
    const { currentUser } = useAuth();
    useEffect(() => {
        getComment();
    }, []);
    return (
        <div>
            <div className="comment-main">
                {" "}
                <Comment.Group>
                    <CommentsList />
                    {currentUser ? (
                        <AddComments />
                    ) : (
                        "Sign up or login to leave a comment"
                    )}
                </Comment.Group>
            </div>
        </div>
    );
};

export default Comments;
