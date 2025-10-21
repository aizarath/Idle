import React from "react";
import { Snail } from "lucide-react";

export const MessageItem = ({ message, isOwn }) => {
  return (
    <div
      className={`${
        isOwn === false
          ? "justify-start text-left"
          : "flex-row-reverse text-right"
      }`}
    >
      <Snail className="pfp" />
      <section>
        <h5>{message.username}</h5>
        <article>{message.content}</article>
        {/* <span>{message.timestamp}</span> */}
      </section>
    </div>
  );
};
