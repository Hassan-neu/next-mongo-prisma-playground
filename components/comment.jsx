import React from "react";

const Comment = ({ message }) => {
    const { role, content } = message;
    return (
        <div className="comment_wrapper">
            <div className="comment-role">{role === "user" ? "U" : "A"}</div>
            <div className="comment-message">{content}</div>
        </div>
    );
};

export default Comment;
