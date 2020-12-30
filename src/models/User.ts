import { Model } from './Model';
interface ModelProps {
    id?: number;
    name?: string;
    age?: number;
}

type Callback = () => void;

interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}
export class User extends Model<UserProps> {

}