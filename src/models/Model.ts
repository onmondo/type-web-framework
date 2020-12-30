import { Attributes } from './Attributes';
import { EventsHandler } from './EventsHandler';
import { Sync } from './Sync';

export class Model<T> {
    public rootUrl: string = 'http://localhost:3000/users';
    constructor(private data: T) {}
    
    public events: EventsHandler = new EventsHandler();
    public sync: Sync<T> =  new Sync<T>(this.rootUrl);
    public attributes: Attributes<T> = new Attributes<T>(this.data);
}