import MessageRouter from './messager/message/messageRouter.mjs'
import telegramBot from 'node-telegram-bot-api'
import Token from './token.mjs'

const token = new Token();
const telegramToken = token.getToken();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
process.env.NTBA_FIX_319 = 1;

const bot = new telegramBot(telegramToken, { polling: true })

//Добавить бота , все его методы

var text = "тестовый текст"



bot.on("message", (data) => {
    var messageRouter = new MessageRouter(data);
})

console.log("start server")