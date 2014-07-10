tizenPM = require('./TizenPushMessaging').TizenPushMessager();



var app = {appID: "YOUR_APP_ID", appSecret: "SECRET_OF_APP"};
var device = {regID: "REG_ID_OF_DEVICE"};
var message = {text:"hello ercu", payLoad: "PAYLOAD_HERE"};

tizenPM.sendMessage(app, device, message, function(res){
    console.log(res);
});


