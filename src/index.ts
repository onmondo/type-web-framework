import { User } from './models/User';

// Persist Data
// const user = new User({ name: 'jo', age: 0 });
// user.on('save', () => {
//     console.log(user);
// });

// user.save();

// ===========================================

// Pull Data
const user = new User({ id: 7 })
user.on('change', () => {
    console.log(user);
});

user.fetch();