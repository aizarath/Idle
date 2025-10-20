import React from "react";
import { Paperclip, Mic, SmilePlus, Send } from "lucide-react";

export const MessageInput = () => {
  return (
    <section className="fixed bottom-8 left-72 right-8 p-4 flex justify-between items-center bg-gray-800 gap-4">
      <button className="flex">
        <Paperclip />
      </button>
      <div className="outline-1 outline-gray-500 w-full p-1 gap-1">
        <div
          className="flex-grow input-div"
          contentEditable="true"
          data-placeholder="Aa"
        >
          &nbsp;
        </div>
        <button className="flex-shrink-0 p-1">
          <Send />
        </button>
      </div>
      <section className="flex">
        <button>
          <Mic />
        </button>
        <button>
          <SmilePlus />
        </button>
      </section>
    </section>
  );
};
