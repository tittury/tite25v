var irc = require('irc')

var config = {
   channel: ['#juuso_on_paras'],
   server: 'irc.nebula.fi',
   port: 6667,
   nick: 'TiTe25v',
   userName: 'tite25v',
   realName: 'Gift for a TiTe by TiTTu ry <3',
   debug: true,
   floodProtection: true,
   floodProtectionDelay: 1000
};


// Set up the bot and connect to server
var bot = new irc.Client(config.server, config.nick, config);
console.log("Connected to:", config.server);
