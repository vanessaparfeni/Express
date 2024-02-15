const express = require('express');
const friendsRouter = require('./routers/friends.router');

const friendsRouter = express.Router()

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


friendsRouter.post('/', postFriend)
friendsRouter.get('/', getFriends);
friendsRouter.get('/:friendId', getFriend);

app.use('/friends', friendsRouter);



app.get('/', (req, res) => {
    res.send('It works!')
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