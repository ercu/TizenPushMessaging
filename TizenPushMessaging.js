var https = require('https');
var url = require('url');
var nodeuuid = require('node-uuid');

function TizenMessage() {
    this.message = "";
}

TizenMessage.prototype.addItem = function (key, value) {
    this.message += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
}

TizenMessage.prototype.getMessage = function () {
    if (this.message[this.message.length - 1] == "&")
        this.message = this.message.substring(0, this.message.length - 2);

    return this.message;
}



function TizenPushMessager() {

    this.urls = {
        "00": "https://useast.push.samsungosp.com:8088/spp/pns/api/push",
        "01": "https://uswest.push.samsungosp.com:8088/spp/pns/api/push",
        "02": "https://apsoutheast.push.samsungosp.com:8088/spp/pns/api/push",
        "03": "https://euwest.push.samsungosp.com:8088/spp/pns/api/push",
        "04": "https://apnortheast.push.samsungosp.com:8088/spp/pns/api/push",
        "05": "https://apkorea.push.samsungosp.com:8088/spp/pns/api/push",
        "06": "https://apchina.push.samsungosp.com:8088/spp/pns/api/push",
        "7c": "https://175.41.248.50:8088/spp/pns/api/push",
    }


}

TizenPushMessager.prototype.sendMessage = function (app, device, message, callback) {
    var urlToSend = this.urls[device.regID.substring(0, 2)];

    var urlParsed = url.parse(urlToSend);

    var options = {
        host: urlParsed.hostname,
        port: urlParsed.port,
        path: urlParsed.pathname,
        rejectUnauthorized: false,
        method: 'POST',
        headers: {
            'appID': app.appID,
            "appSecret": app.appSecret
        }
    };


    var tizenMessage = new TizenMessage();
    tizenMessage.addItem("action", "LAUNCH");
    tizenMessage.addItem("alertMessage", message.text);

    var bodyToSend = {
        regID: device.regID,
        requestID: nodeuuid.v1(),
        message: tizenMessage.getMessage(),
        appData: message.payLoad
    };

    requestCallback = function (response) {
        var str = ''
        response.on('data', function (chunk) {
            str += chunk;
        });

        response.on('end', function () {
            //console.log(str);
            if(callback)
                callback(JSON.parse(str));
        });
    }

    var req = https.request(options, requestCallback);

    //console.log(JSON.stringify(bodyToSend));
    req.write(JSON.stringify(bodyToSend));
    req.end();

};



exports.TizenPushMessager = function () {
    return new TizenPushMessager();
}
