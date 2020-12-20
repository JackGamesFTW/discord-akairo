import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class BanCommand extends Command {
  constructor() {
    super('ban', {
      aliases: ['ban'],
      args: [
        {
          id: 'user',
          type: 'member'
        }
      ],
      clientPermissions: ['BAN_MEMBERS'],
      userPermissions: ['BAN_MEMBERS'],
      channel: 'guild'
    });
  }

  async exec(msg: Message, args: any) {
    if (!args.user) return msg.reply('No member was found with that name.');

    await args.user.ban();

    return msg.reply(`${args.user} has been banned!`)
  }
}