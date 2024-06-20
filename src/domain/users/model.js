let users = [
    { id: '1', username: 'Tom Soyer', age: 23},
    { id: '2', username: 'Green', age: 21},
    { id: '3', username: 'Gekelberry', age: 45},
    { id: '4', username: 'Karlson', age: 7},
    { id: '5', username: 'Garry', age: 15}
]

module.exports = {
    create: ({ username, age }) => {
        const newUser = {
            username,
            age,
            id: String(Date.now())
        }
        if(!users.find(user => user.username === users)){
            users.push(newUser)
        } else {
            throw new Error('Користувач вже існує')
        }
        return newUser;
    },

    removeById: ({ id}) => {
        const userIndex = users.findIndex(user => user.id === String(id));
        if(userIndex === -1) {
throw new Error('User don`t find')
        }
        users.splice(userIndex, 1)
        return id;
    },

    removeByUsername: ({ id }) => {},
    getAll: () => {
        return users
    },
    getById: ({id}) => {
        return users.find(user => user.id === id);
    },
}