/**
 * sample message properties to be fetched from the server
 */
export interface PropsMessage {
    image: any;
    name: string;
    time: string;
    message: string;
    active?: boolean;
}