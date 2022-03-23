const http = require("http");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res)=>{
    //console.log(req)
    if (req.method === 'GET'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('GET');
    }

    if (req.method === 'POST'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('POST');
    }
});

server.address(hostname);
server.listen(port, ()=>{
    console.log(`server runnig at http://${hostname}:${port}`);
});