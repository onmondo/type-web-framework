import axios from 'axios';
import { User } from './models/User';

axios.post('http://localhost:3000/users', {
    name: 'john',
    age: 33,
});

axios.get('http://localhost:3000/users');
