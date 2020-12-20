import { AkairoClient, CommandHandler, ListenerHandler } from 'discord-akairo';

export default class Bot extends AkairoClient {
  public commandHandler: CommandHandler;
  public listenerHandler: ListenerHandler;

  constructor() {
    super({
      ownerID: process.env.BOT_OWNER_ID
    }, {
      disableMentions: 'everyone'
    });

    this.commandHandler = new CommandHandler(this, {
      directory: './src/Commands/',
      prefix: '?'
    });

    this.listenerHandler = new ListenerHandler(this, {
      directory: './src/Listeners/'
    });

    this.commandHandler.useListenerHandler(this.listenerHandler);
    this.commandHandler.loadAll();
    this.listenerHandler.loadAll();
  }
}
