import { User } from './models/User';

const user =  User.buildUser({
    name: 'John Raymond Blando',
    age: 34
})

user.on('change', () => {
    console.log(user);
});

user.save();