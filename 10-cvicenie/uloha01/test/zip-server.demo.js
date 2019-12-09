require("../src/zip-server.js");
const fork = require('child_process').fork;
const client = "../uloha01/src/zip-client.js";
fork(client, ["../uloha01/test/test1.txt"]);
let chp = fork(client, ["../uloha01/test/test2.txt"]);
setTimeout(chp.kill, 1);


