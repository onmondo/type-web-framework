
import { isEmpty } from 'lodash';
import axios, { AxiosResponse } from 'axios';
interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

type Callback = () => void;

export class User {
    constructor(private data: UserProps) {}

    get(propname: string): (string | number) {
        return this.data[propname];
    }

    set(update: UserProps): void {
        Object.assign(this.data, update)
    }

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