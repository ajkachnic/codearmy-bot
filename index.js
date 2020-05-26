require("dotenv").config();
const Client = require("discord.js").Client;

const bot = new Client();

let server = {
  guild: null,
  channels: {
    p: null,
  },
};
bot.once("ready", () => {
  server.guild = bot.guilds.get("587784980961296394");
  server.channels.p = server.guild.get("714540886008135770");
});
bot.on("message", async (msg) => {
  if (message.channel == server.channels.p) {
    const lastMessages = await message.channel.fetchMessages({ limit: 2 });
    const last = lastMessages.last();

    if (
      (!message.content.startsWith("p ") && message.content != "p") ||
      last.author === message.author
    ) {
      await message.delete();
    }

    return;
  }
});

bot.login(env.process.TOKEN);
