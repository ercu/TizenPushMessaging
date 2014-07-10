tizenPM = require('../main/TizenPushMessaging').TizenPushMessager();



var app = {appID: "k0r8emMarb", appSecret: "6DE215DDF29198786F8F077E338426A8"};
var device = {regID: "04a148f4647ac73628a86bea4f9d1760f252904884209aada299408ed9360079eab849319622df1d02d47064e9045ecbff67"};
var message = {text:"hello ercu", payLoad: "Source=TsmXpert&Job=DeployNfc&ServiceId=529011"};

tizenPM.sendMessage(app, device, message, function(res){
    console.log(res);
});


