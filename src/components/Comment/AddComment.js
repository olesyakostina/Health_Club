import React, { useContext, useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { Button, Form } from "semantic-ui-react";
import { commentContext } from "../Context/CommentContext";
import { useAuth } from "../Context/AuthContext";
import "./Comment.css";

const AddComments = () => {
    const { currentUser } = useAuth();
    const { postNewComment, getComment } = useContext(commentContext);
    const [com, setCom] = useState({
        text: "",
        author: "",
    });

    const handleValues = (e) => {
        let newComment = {
            ...com,
            text: e.target.value,
            author: currentUser.email,
            uid: currentUser.uid,
            now: new Date().toLocaleString(),
        };
        setCom(newComment);
    };
    const sendComment = () => {
        postNewComment(com);
        getComment();
        setCom({
            text: "",
        });
    };

    return (
        <>
            <div className="form__btn">
                <Form reply>
                    <TextField
                        style={{
                            marginTop: "10px",
                            marginBottom: "10px",
                            borderRadius: "5px",
                        }}
                        variant={"outlined"}
                        fullWidth
                        rowsMax={2}
                        value={com.text}
                        onChange={(e) => handleValues(e)}
                    />

                    <Button
                        className="comment-button"
                        onClick={sendComment}
                        content="Add Comment"
                        labelPosition="left"
                        icon="edit"
                        primary
                    />
                </Form>
            </div>
        </>
    );
};

export default AddComments;
