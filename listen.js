/*
Starts a server listenning for connections on a port number. 

The port communicates with other devices 

The port number is set to the value of process.env.PORT if it exists otherise to 9090 when running from the client side

*/

const app = require("./app");

const port = process.env.PORT || 9090;

app.listen(port, err => {
    console.log(`listenning on port ${port}...`);
})
