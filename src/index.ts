import { User } from './models/User';

const user = new User({});

console.log(user.get('name'));
console.log(user.get('age'));

user.set({name: 'newName'});

console.log(user.get('name'));
console.log(user.get('age'));

user.on('change', () => {
    console.log('user props changes!');
});

console.log(user);