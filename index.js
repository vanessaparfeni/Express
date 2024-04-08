const express = require('express');
const friendsRouter = require('./routers/friends.router');
const path = require('path');
const usersRouter = require('./routers/users.router')
const authRouter = require('./routers/auth.router')

// const { sequelize } = require('./db');


const app = express();

const PORT = 4000;


const friends = [
    {
        id: 0,
        name: 'Albert Einstein'
    },
    {
        id: 1,
        name: 'Isaak Newton'
    }
];

module.exports = friends;

app.use('/friends', friendsRouter);
app.use('/users', usersRouter)



app.get('/', (req, res) => {
    res.send('It works!')
});
// app.use('messages', messagesRouter);
// app.use('/signup', authRouter.signup);
// app.use('/login', authRouter.login);
app.use('/auth', authRouter);



app.get('/photo', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'spbob.jpg'));
});

app.get('/friends', (req, res) => {
    res.send(JSON.stringify(friends))
});

app.get('/friends/:friendId', (req, res) => { 
        const id = Number(req.params.friendId);
        const friend = friends.find(f => f.id ===id);
        if (friend) {
            res.status(200).json(friend)
        } else {
            res.status(404).json({error: "Friend not found"})
        }
    });


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})