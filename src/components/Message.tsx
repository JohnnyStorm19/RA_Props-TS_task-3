import { TMessageProps } from "../models";

export function Message({ messageData, from }: TMessageProps) {
  return (
    <li key={messageData.id}>
        <div className="message-data">
            <span className="message-data-name"></span>&nbsp; &nbsp;
            <span className="fa fa-circle online"></span> {from}
            <span className="message-data-time">{messageData.time}</span>
        </div>
        <div className="message my-message">
            {messageData.text}
        </div>
    </li>
  );
}
