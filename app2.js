// var counter = require("./counter");
// console.log(counter.lunNum(['java','ruby','c++']));
// console.log(counter.plus(3,5));
const EventEmitter = require("events");
class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();
myEmitter.on('event',(message)=>{
    console.log("触发了一个事件,"+message);
});
myEmitter.emit('event',"对！是的，没错！");