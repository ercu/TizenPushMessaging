TizenPushMessaging
==================

This node.js project is created for sending push messages (aka notification) to Tizen devices.

Implementation has been done using following tutorial:

https://developer.tizen.org/dev-guide/2.2.0/org.tizen.native.appprogramming/html/guide/messaging/push_server_api.htm


Example Usage:
```javascript
  var app = {appID: "YOUR_APP_ID", appSecret: "SECRET_OF_APP"};
  var device = {regID: "REG_ID_OF_DEVICE"};
  var message = {text:"hello ercu", payLoad: "PAYLOAD_HERE"};
  
  tizenPM.sendMessage(app, device, message, function(res){
      console.log(res);
  });
```

Response for callback of sendMessage function is same as Tizen Guide. For success message, callback response will be:

```javascript
 {
    "regID":"0001ec732aebb16fa3872b98db344bbeeb2d910fe08f69200a184c0249c069a2093fb6caff38527bc212ada3fd8db69ec157",
    "requestID":"000001",
    "statusCode":1000,
    "statusMsg":"Success"
  }
```
