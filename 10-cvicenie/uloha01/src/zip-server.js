const http = require("http");
const {pipeline } = require("stream");

const {
    createDeflate, createInflate,
    createGzip, createGunzip,
    createUnzip
} = require("zlib");
const fs = require("fs");

let path = "test.txt";
let out = fs.createWriteStream(path);

let server = http.createServer();
server.listen(9999, "localhost")
    .on("request", (req, res) => {
        req.pipe(out);
        pipeline(req, createGzip(), res, (err) => {console.log(err)});
    });
