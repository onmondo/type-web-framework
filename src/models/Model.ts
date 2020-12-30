import { Attributes } from './Attributes';
import { EventsHandler } from './EventsHandler';
import { Sync } from './Sync';

export class Model<T> {
    protected rootUrl: string = 'http://localhost:3000/users';
    public attributes: Attributes<T>;
    public events: EventsHandler = new EventsHandler();
    public sync: Sync<T> =  new Sync<T>(this.rootUrl);

    constructor(attributes: T) {
        this.attributes = new Attributes<T>(attributes)
    }
}