import User from '../user/user.mjs'

export default class MessageRouter {
    constructor(messageData) {
        this.route = 'default'
        this.data = messageData
        this.fromUser = messageData.from.id
        this.text = messageData.text
        console.log("message '" + this.text + "' from user " + this.fromUser)//logging user activity

        this.user = new User(messageData)

        this.setRouteForMessage()
    }
    setRouteForMessage() {
        switch (this.text) {
            case '/start':
                this.user.addNewUserInBD()
                break;
        }
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