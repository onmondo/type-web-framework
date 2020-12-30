import { Model } from './Model';
interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}
export class User extends Model<UserProps> {

}