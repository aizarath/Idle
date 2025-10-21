import { MessageItem } from "./MessageItem";

export const MessageList = ({ messages }) => {
  return (
    <div className="flex-col">
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} isOwn={message.isOwn} />
      ))}
    </div>
  );
};
