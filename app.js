let artist = [{
    name:"Jimi Hendrix",
    places:"Little Wing",
    imgURL:"https://i.scdn.co/image/ab6761610000e5eb31f6ab67e6025de876475814",
   Albums:["The Jimi Hendrix Experience"]
 },
]
console.log(artist)
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const express = require('express');
const app = express();
const server = http.createServer(app);
app.get('/', (req, res) => {
    res.send(`<h1> Jimi Hendrix <h1>
    <h2>James Marshall "Jimi" Hendrix was an American musician, singer, and songwriter. Although his mainstream career spanned only four years, he is widely regarded as one of the most influential electric guitarists in the history of popular music, and one of the most celebrated musicians of the 20th century. <h2>
    <img src="https://i.scdn.co/image/ab6761610000e5eb31f6ab67e6025de876475814" alt="Jimi" width="600" height="600">`);
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});