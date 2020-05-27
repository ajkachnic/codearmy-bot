require("dotenv").config();
const Discord = require("discord.js");

const client = new Discord.Client();
let server = {
  guild: null,
  channels: {
    p: null,
  },
};
client.login(process.env.TOKEN);

client.once("ready", () => {
  server.guild = client.guilds.get("587784980961296394");

  server.channels.p = client.channels.get("714540886008135770");
});

client.on("message", async (msg) => {
  if (msg.channel == server.channels.p) {
    const lastMessages = await msg.channel.fetchMessages({ limit: 2 });
    const last = lastMessages.last();

    if (
      (!msg.content.startsWith("p ") && msg.content != "p") ||
      last.author === msg.author
    ) {
      await msg.delete();
    }

    return;
  }
});
