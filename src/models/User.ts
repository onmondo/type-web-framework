
interface UserProps {
    name?: string;
    age?: number;
}

type Callback = () => void;
type Events = { [key: string]: Callback[] };

export class User {
    private events: Events = {};

    constructor(private data: UserProps) {}

    get(propname: string): (string | number) {
        return this.data[propname];
    }

    set(update: UserProps): void {
        Object.assign(this.data, update)
    }

    on(eventName: string, callback: Callback) {
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }
}