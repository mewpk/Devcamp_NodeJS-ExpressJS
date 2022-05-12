const express = require('express');
const app = express();

app.get('/', (req, res) => {
 res.send('Hello World!');
 
});

app.use((req,res)=>{
    res.type("text/plain");
    res.status(404)
    res.send("404 - Not Found")
    console.log(req.os)
})


app.listen(3000, () => {
 console.log('server started on port 3000!');
});
