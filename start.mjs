import User from './messager/user/user.mjs'
import MessageRouter from './messager/message/messageRouter.mjs'
import telegramBot from 'node-telegram-bot-api'

const telegramToken = '888347075:AAHc9RPRChgJo7_qjYi2WkWTYwEglvQjVjk'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
process.env.NTBA_FIX_319 = 1;

const bot = new telegramBot(telegramToken, { polling: true })

//Добавить бота , все его методы

var user = new User({ from: {}, chat: {} })
var messageRouter = new MessageRouter(user, text);

console.log(user.crap)