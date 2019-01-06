var express = require('express');
let db = require('./config/db');
let config = require('./config/config')
let events = require('events');
let eventEmitter = new events.EventEmitter();

function startapp() {

    let app = express();
    require('./express')(app, config);
    require('./controller/index').loadControllers(app);
    require('./cluster')(app, config);
}
db.connectDatabase(config.mongoose, eventEmitter);
eventEmitter.once('connected-db', startapp);



