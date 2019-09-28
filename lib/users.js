const _ = require('lodash');

const UsersDB = [
    {
        username: 'Cthon98', // User username
        password: 'hunter2', // User password
    }
];

const login = (username, password) => {
    const user = _.find(UsersDB, { username });
    if (!user) throw new Error('User not found!');

    const hasValidPassword = (user.password === password);
    if (!hasValidPassword) throw new Error('Invalid password');

    return _.omit(user, 'password'); // only using username for generating json tokens
};

module.exports = {
    login,
};
