import { isEmpty } from 'lodash';

type Callback = () => void;
type Events = { [key: string]: Callback[] };

export class EventsHandler {
    private events: Events = {};

    on(eventName: string, callback: Callback): void {
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    trigger(eventName: string): void {
        const handlers = this.events[eventName];

        if(isEmpty(handlers)) {
            return;
        }

        handlers.forEach((callback) => {
            callback();
        });
    }
}