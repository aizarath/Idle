import { useRef } from "react";
import { Paperclip, Mic, SmilePlus, Send } from "lucide-react";

export const MessageInput = ({ onSendMessage }) => {
  const contentRef = useRef(null);

  const handleSend = () => {
    const content = contentRef.current.textContent.trim();

    if (content && content !== "\u00A0") {
      onSendMessage(content);

      contentRef.current.textContent = "";
      contentRef.current.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section className="fixed bottom-8 left-72 right-8 p-4 flex justify-between items-center bg-gray-800 gap-4">
      <button className="flex">
        <Paperclip />
      </button>
      <div className="outline-1 outline-gray-500 w-full p-1 gap-1">
        <div
          ref={contentRef}
          className="flex-grow input-div"
          contentEditable="true"
          data-placeholder="Aa"
          onKeyDown={handleKeyDown}
          suppressContentEditableWarning={true}
        >
          &nbsp;
        </div>
        <button onClick={handleSend} className="flex-shrink-0 p-1">
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
