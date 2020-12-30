import { Attributes } from './Attributes';
import { EventsHandler } from './EventsHandler';
import { Sync } from './Sync';

export class Model<T> {
    protected rootUrl: string = 'http://localhost:3000/users';
    protected attributes: Attributes<T>;
    protected events: EventsHandler = new EventsHandler();
    protected sync: Sync<T> = new Sync<T>(this.rootUrl);

    constructor(attributes: T) {
        this.attributes = new Attributes<T>(attributes)
    }
}