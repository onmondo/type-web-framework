import { isEmpty } from 'lodash';
import axios, { AxiosPromise } from 'axios';
import moment from 'moment';

interface HasId {
    id?: number
}

const PERSIST_DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';
const DEFAULT_PERSISTENCE_DATE = moment().format(PERSIST_DATE_FORMAT);
const DEFAULT_PERSIST_DELETE_STATS = false;

export class ApiSync<T extends HasId> {
    constructor(private rootUrl: string) {}

    fetch(id: number): AxiosPromise<T> {
        return axios.get(`${this.rootUrl}/${id}`);
    }

    save(data: T): AxiosPromise<T> {
        const { id } = data;
        return isEmpty(id) 
            ? axios.post(this.rootUrl, { 
                    ...data,
                    createdDate: DEFAULT_PERSISTENCE_DATE,
                    updatedDate: DEFAULT_PERSISTENCE_DATE,
                    isDeleted: DEFAULT_PERSIST_DELETE_STATS,
                }) 
            : axios.put(`${this.rootUrl}/${id}`, data);
    }
}