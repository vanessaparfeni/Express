const express =  require('express');
const {
    getMessages,
    postMessage
} = require('../controllers/messages.controller');

const authMiddleware = require(' ../middlewares/auth.middleware')

const messagesRouter = express.Router() 
messagesRouter.use(authMiddleware) 

messagesRouter.post ('/', postMessage) 
messagesRouter.get('/', getMessages);

module.exports = messagesRouter;