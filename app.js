var irc = require('irc');
var http = require('http');
var config =
  {
    userName: 'TiTe25v',
    realName: 'Gift for a TiTe by TiTTu ry <3',
    port: 6667,
    localAddress: null,
    debug: true,
    showErrors: true,
    autoRejoin: true,
    autoConnect: false,
    channels: ['#juuso_on_paras'],
    secure: false,
    selfSigned: false,
    certExpired: false,
    floodProtection: true,
    floodProtectionDelay: 1000,
    sasl: false,
    retryCount: 5,
    retryDelay: 20000,
    stripColors: false,
    channelPrefixes: "&#",
    messageSplit: 1028,
    encoding: ''
};

var amount = 0;

var bot = new irc.Client('irc.cc.tut.fi', config.userName, config);
bot.connect(1, function(res){
  console.log('Connected to server');
  bot.say(config.channels[0], 'Hello world! Olen TiTen 25v botti, jonka ainut tehtävä on välittää irkkiin vuosijuhlilla avattujen oluiden määrää. Spämmään kanavaa pari päivää, mutta olisi kannattanut tulla vujuille!');
});


bot.addListener('message', function(from, to, message) {
   if(  message.indexOf('Bot, do you have any good jokes?') > -1
     || message.indexOf('bot have good joke?') > -1
    ) {
        bot.say(to, 'Knock knock! vitun huora');
    }
});

var server = http.createServer(function (req, res) {
  if (req.method == 'POST') { 
    ++amount;
    bot.say(config.channels[0], '*psst*');
  }
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Bissejä korkattu "+amount+" kappaletta TietoTeekkarikillan 25. vuosijuhlilla!\n");
});

server.listen(8000, 'localhost');

process.stdin.resume();//so the program will not close instantly

process.on('SIGINT', function() {
  bot.disconnect('See you next year! HOJOHOJO TiTTu on paras :D ja viina');
  process.exit();
});
