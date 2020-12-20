require('dotenv').config();
import Bot from './Bot';

new Bot().login(process.env.BOT_TOKEN);
