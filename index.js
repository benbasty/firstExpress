const express = require('express');
const app = express();
const port = 8080;

// app.use((req, res) => {
//     console.log("app using, got a new request");
// })
app.listen(port, () => {
    console.log(`app listening at https://localhost:${port}`);
})
app.get("/", (req, res) => {
    console.log("Hi Welcome to my new page!");
    res.send("<h1>Hi Welcome to my new page!</h1>");
})
app.get("/r/:parameters", ((req,res) => {
    console.log("This is a subpage!");
    const {parameters} = req.params;
    res.send(`<h1>This is a subpage about ${parameters}!</h1>`);
}))

app.get("/r/:parameters/:id", ((req,res) => {
    console.log("This is an id params");
    const { parameters, id } = req.params;
    res.send(`<h1>This is a subpage about ${parameters} and the id is about ${id}!</h1>`);
}))

app.get('/cats', ((req,res) => {
    console.log("Your cats will love this page!");
    res.send("<h1>Your cats will love this page!</h1>")
}))

app.get('/dogs', ((req,res) => {
    console.log("Your dogs will love this page!");
    res.send("<h1>Your dogs will love this page!</h1>")
}));

app.get('*', ((req,res) => {
    console.log("No one will love this page!");
    res.send("<h1>No one will love this page! Try again</h1>")
}));

