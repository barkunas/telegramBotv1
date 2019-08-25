import Crap from './crap.mjs'
import Rank from './rank.mjs'
import Mood from './mood.mjs'

export default class User {
  constructor(data) {
    var from = data.from;
    var chat = data.chat;
    this.chatId = chat.id;
    this.userId = from.id;
    this.stickerSet;
    this.firstName = from.first_name || 'empty';
    this.lastName = from.last_name || 'empty';
    this.username = from.username || 'empty';
    var crapValue = false;
    var rankValue = 0;
    var moodValue = 0;
    this.crap = new Crap(crapValue);
    this.rank = new Rank(rankValue);
    this.mood = new Mood(moodValue);
    console.log('создали пользователя')
  }
  addNewUserInBD() {
    console.log('типо создал нового пользователя в БД')
  }
}

/* data template
{ message_id: 5522,
  from:
   { id: 383918676,
     is_bot: false,
     first_name: 'SaleManager',
     username: 'barkuns',
     language_code: 'en' },
  chat:
   { id: 383918676,
     first_name: 'SaleManager',
     username: 'barkuns',
     type: 'private' },
  date: 1566552635,
  text: 'тестТестТест' }
*/