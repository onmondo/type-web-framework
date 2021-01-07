import { AxiosPromise, AxiosResponse } from 'axios';

type Callback = () => void;
interface ModelAttributes<T> {
    get<K extends keyof T>(key: K): T[K],
    getAll(): T,
    set(update: T): void,
}

interface Sync<T> {
    fetch(id: number): AxiosPromise<T>,
    save(data: T): AxiosPromise<T>,
}

interface Events {
    on(eventName: string, callback: Callback): void,
    trigger(eventName: string): void
}

interface HasId {
    id?: number
}
export class Model<T extends HasId> { 
    constructor(
            private attributes: ModelAttributes<T>,
            private events: Events,
            private sync: Sync<T>
        ) {}

    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    get get() {
        return this.attributes.get;
    }

    set(update: T): void {
        this.attributes.set(update);
        this.events.trigger('change');
    }

    fetch(): void {
        const id = this.get('id');

        if(typeof id !== 'number') {
            throw new Error('Cannot fetch without an id!');
        }

        this.sync.fetch(id)
            .then((response: AxiosResponse): void => {
                this.set(response.data);
            });
    }

    save(): void {
        this.sync.save(this.attributes.getAll())
            .then((response: AxiosResponse): void => {
                this.trigger('Record save!');
            })
            .catch(() => {
                this.trigger('error');
            });
    }    
}