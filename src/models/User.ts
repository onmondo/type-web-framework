import { AxiosResponse } from 'axios';
import { Model } from './Model';
interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}
export class User extends Model<UserProps> {
    constructor(attributes: UserProps) {
        super(attributes);
    }

    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    get get() {
        return this.attributes.get;
    }

    set(update: UserProps): void {
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