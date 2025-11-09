import { MessageItem } from "./MessageItem";

export const MessageList = ({ messages }) => {
  return (
    <div className="flex-col">
      {messages.length === 0 ? (
        <span>Craft the first message in the room!</span>
      ) : (
        messages.map((message) => (
          <MessageItem
            key={message.id}
            message={message}
            isOwn={message.isOwn}
          />
        ))
      )}
    </div>
  );
};
