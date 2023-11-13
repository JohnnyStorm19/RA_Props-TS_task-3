import { TMessageHistoryProps } from "../models";
import { Message } from "./Message";
import { Response } from "./Response";
import { Typing } from "./Typing";

export function MessageHistory({list = []}: TMessageHistoryProps) {
    if (list.length === 0) {
        return null;
    }
    return (
        <ul>
            {list.map(message => {
                if (message.type === 'message') {
                    return <Message key={message.id} messageData={message} from={message.from.name} />
                }
                if (message.type === 'response') {
                    return <Response key={message.id} messageData={message} from={message.from.name} />
                }
                if (message.type === 'typing') {
                    return <Typing key={message.id} messageData={message} from={message.from.name} />
                }
            })}
        </ul>
    )
}