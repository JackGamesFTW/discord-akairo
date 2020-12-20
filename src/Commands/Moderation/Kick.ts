import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class KickCommand extends Command {
  constructor() {
    super('kick', {
      aliases: ['kick'],
      args: [
        {
          id: 'user',
          type: 'member'
        }
      ],
      clientPermissions: ['KICK_MEMBERS'],
      userPermissions: ['KICK_MEMBERS'],
      channel: 'guild'
    });
  }

  async exec(msg: Message, args: any): Promise<Message> {
    if (!args.user) return msg.reply('No member was found with that name.');

    await args.user.kick();

    return msg.reply(`${args.user} has been kicked!`)
  }
}