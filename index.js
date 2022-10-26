const fetch = require('node-fetch')
export default function log(logtype, message, info, pipe, urlLog) {
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
    fetch(urlLog, sendlog)
}
