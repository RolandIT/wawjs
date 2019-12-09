const http = require("http");
const {pipeline } = require("stream");

const {
    createDeflate, createInflate,
    createGzip, createGunzip,
    createUnzip
} = require("zlib");
const fs = require("fs");

let savePath = "../Saves/test.txt";
let save = fs.createWriteStream(savePath);


let server = http.createServer();
server.listen(9999,"localhost")
      .on("request", (req,res) => {
            req.pipe(save);
            pipeline(req, createGzip(), res, (err) => {console.log(err)});
      });