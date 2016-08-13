var events = require('events');
var eventEmitter = new events.EventEmitter()

var ringbell = fumction(){
	console.log("Ring ring ring");
}

eventEmitter.on('doorOpen',ringbell);
eventEmitter.on('bellrings', fumction(message){
	console.log(message);
})
eventEmitter.emit('doorOpen');
eventEmitter.emit('bellrings','Welcome to COE-III');