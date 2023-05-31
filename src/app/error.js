"use client";
import React from "react";
const error = ({ error: { message }, reset }) => {
    return (
        <div>
            <p>This is an error page and the error is {message}</p>
            <p>
                Click <button onClick={() => reset()}>To reset</button>
            </p>
        </div>
    );
};

export default error;
