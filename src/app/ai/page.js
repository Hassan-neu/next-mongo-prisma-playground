"use client";

import { useChat } from "ai/react";
import Comment from "../../../components/comment";
export default function Chat() {
    const { messages, input, isLoading, handleInputChange, handleSubmit } =
        useChat();

    return (
        <div>
            <div className="comment_container">
                {messages.map((message) => (
                    <Comment key={message.id} message={message} />
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    Say something...
                    <input value={input} onChange={handleInputChange} />
                </label>
            </form>
        </div>
    );
}
