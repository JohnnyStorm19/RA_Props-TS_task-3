import { TMessageProps } from "../models";

export function Typing({ messageData, from }: TMessageProps) {
    return (
        <div key={messageData.id} className="chat-typing">
            <span className="message-data-time">{messageData.time}</span> &nbsp; &nbsp;
            <span className="message-data-name">{from}</span>&nbsp; &nbsp;
            печатает...
        </div>
    )
}