const express = require('express');
const app = express();
const port = 8080;

app.use((req, res) => {
    console.log("app using, got a new request");
})
app.get("/", (req, res) => {
    // console.log("app using, got a new request");
    res.send("<h1>Hi Welcome to my new page!</h1>");
})

app.listen(port, () => {
    console.log(`app listening at https://localhost:${port}`);
})