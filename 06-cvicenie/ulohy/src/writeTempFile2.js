module.exports = writeTempFile;

const fs = require("fs");
const os = require("os");
const path = require("path");
const async = require("async");

function writeTempFile(fileName, ...args /* data, options, callback*/ ) {
  let cb = args.pop();
  
  async.waterfall([
    (cb) => {
      let tempDir = path.join(os.tmpdir(), `${process.pid}-`);
      fs.mkdtemp(tempDir, (err, folder) => {
            
    },
    (folder,cb) => {
      // task 2
    }
  ], cb);
}