import { Model } from './Model';
import { Attributes } from './Attributes';
import { EventsHandler } from './EventsHandler';
import { ApiSync } from './ApiSync';
interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

const ROOT_URL = 'http://localhost:3000/users';
export class User extends Model<UserProps> {
    static buildUser(attributes: UserProps): User {
        return new User(
            new Attributes<UserProps>(attributes),
            new EventsHandler(),
            new ApiSync<UserProps>(ROOT_URL)
        );
    }
}