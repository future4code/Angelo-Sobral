export enum TYPE {
    NORMAL = "NORMAL",
    EVENTO = "EVENTO"
}

export type post = {
    id: string;
    photo: string;
    description: string;
    created_at: string;
    type: TYPE;
    user_id: string;
}

export type postData = {
    photo: string;
    description: string;
    type: TYPE;
}