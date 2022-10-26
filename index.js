const fetch = require('node-fetch')
exports.log = async function log(logtype, message, info, pipe, urlLog) {
    var timedate = new Date()
    var dataLog = JSON.stringify({
        "logtype": logtype,
        "message": message,
        "pipe": pipe,
        "info": info,
        "timedate":timedate
    });
    var sendlog = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: dataLog
    };
    await fetch(urlLog, sendlog)
}
