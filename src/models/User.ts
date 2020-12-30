
import { isEmpty } from 'lodash';
import axios, { AxiosResponse } from 'axios';
import { EventHandler } from './EventHandler';
interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

type Callback = () => void;

export class User {
    constructor(private data: UserProps) {}

    public events: EventHandler = new EventHandler();

    get(propname: string): (string | number) {
        return this.data[propname];
    }

    set(update: UserProps): void {
        this.data = { ...this.data, ...update }
    }

    fetch(): void {
        axios.get(`http://localhost:3000/users/${this.get('id')}`)
            .then((response: AxiosResponse): void => {
                this.set(response.data);
            });
    }

    save(): void {
        const id = this.get('id')
        if(isEmpty(id)) {
            axios.post(`http://localhost:3000/users`, this.data);          
        } else {
            axios.put(`http://localhost:3000/users/${id}`, this.data);          
        }
    }
}