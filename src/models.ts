export type TFrom = {
    name: string;
}

export type TMessage = {
    id: string;
    from: TFrom,
    type: string,
    time: string,
    text?: string
}

export type TMessageProps = {
    messageData: TMessage;
    from: string;
}

export type TMessageHistoryProps = {
    list: TMessage[]
}