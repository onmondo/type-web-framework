import { User } from './models/User';

const user = new User({ id: 1 });

// user.fetch();

user.events.on('login', () => {
    console.log('users login');
});

user.events.trigger('login');