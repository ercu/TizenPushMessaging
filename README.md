TizenPushMessaging
==================

This project is created to sending push messages to Tizen devices.

Implementation has been done using following tutorial:

https://developer.tizen.org/dev-guide/2.2.0/org.tizen.native.appprogramming/html/guide/messaging/push_messaging.htm


Example Usage:

  var app = {appID: "YOUR_APP_ID", appSecret: "SECRET_OF_APP"};
  var device = {regID: "REG_ID_OF_DEVICE"};
  var message = {text:"hello ercu", payLoad: "PAYLOAD_HERE"};
  
  tizenPM.sendMessage(app, device, message, function(res){
      console.log(res);
  });

