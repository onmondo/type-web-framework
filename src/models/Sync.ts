import { isEmpty } from 'lodash';
import axios, { AxiosPromise } from 'axios';

interface HasId {
    id?: number
}

export class Sync<T extends HasId> {
    constructor(private rootUrl: string) {}

    fetch(id: number): AxiosPromise<T> {
        return axios.get(`${this.rootUrl}/${id}`);
    }

    save(data: T): AxiosPromise<T> {
        const { id } = data;
        return isEmpty(id) 
            ? axios.post(this.rootUrl, data) 
            : axios.put(`${this.rootUrl}/${id}`, data);
    }
}