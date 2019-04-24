const express = require('express'); 

const post = require("./data/helpers/postDb");
const user = require("./data/helpers/userDb");

const server = express();

server.get('/', (req, res, next) => {
    res.send(`
      <h2>Hello</h2>
      <p>World</p>
      `);
  });

//------------GET METHOD POST----------------
server.get("/posts",(req,res)=>{
  post.get()
  .then(posts=>{
    res.status(201).json(posts)
  })
  .catch(err=>{
    res.status(400).json({error: "cannot GET data"})
  })
})

//------------GET METHOD USER----------------
server.get("/user",(req,res)=>{
  post.get()
  .then(user=>{
    res.status(201).json(user)
  })
  .catch(err=>{
    res.status(400).json({error: "cannot GET data"})
  })
})

module.exports = server;
