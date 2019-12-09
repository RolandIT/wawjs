const http = require("http");
const fs = require("fs");

let url = "http://localhost:9999";
let savePath = "response.zip";
let save = fs.createWriteStream(savePath);
let request = http.request(url,{
    method: "POST"
})
.on("response", (res) => {
    res.pipe(save);
});
let input = fs.createReadStream(process.argv.slice(2)[0], {
    encoding: "utf8"
    
});
    
input.pipe(request);