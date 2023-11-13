import { TMessageProps } from "../models";

export function Response({ messageData , from}: TMessageProps) {
  return (

    <li key={messageData.id} className="clearfix">
        <div className="message-data align-right">
          <span className="message-data-time">{messageData.time}</span> &nbsp; &nbsp;
          <span className="message-data-name">{from}</span>
          <span className="fa fa-circle me"></span>
        </div>
        <div className="message other-message float-right">
          {messageData.text}
        </div>
    </li>
  );
}
