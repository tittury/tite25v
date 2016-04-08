
var http = require('http');
var irc = require('irc');

var bot = irc.Client('random.ircd.de', 'TiTe25v', {
  channels: ['#juuso_on_paras']
});	

var channel = '#juuso_on_paras';


  console.log('Connected to server');
  bot.join(channel, function(res) {
    console.log('Joined to channel');
    bot.say(channel, 'Terveisiä TiTen vuosijuhlilta. Tuon teille iloa ja kateutta välittämällä avatut oluet irkkiin perjantain laskettavaksi!');
  });

