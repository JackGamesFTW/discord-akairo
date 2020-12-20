import { Command } from 'discord-akairo';
import { Message } from 'discord.js';

export default class PingCommand extends Command {
  constructor() {
    super('ping', {
      aliases: ['ping']
    });
  }

  async exec(msg: Message): Promise<Message> {
    return msg.reply(`Pong! ${Math.round(this.client.ws.ping)}ms`)
  }
}