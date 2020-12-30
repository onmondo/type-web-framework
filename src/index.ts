import { User } from './models/User';

const user = new User({ id: 1 });

console.log(user.rootUrl);
const mine = user.sync.fetch(1);
console.log(mine);

user.events.on('login', () => {
    console.log('users login');
});

user.events.trigger('login');

user.attributes.set({ name: 'mon', age: 30 });

const name = user.attributes.get('name');

console.log(name);