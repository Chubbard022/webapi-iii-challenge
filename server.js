const express = require('express'); 
const helmet= require("helmet");
const morgan = require("morgan");

const post = require("./data/helpers/postDb");
const user = require("./data/helpers/userDb");

const server = express();
server.use(helmet());

server.get('/', (req, res, next) => {
    res.send(`
      <h2>Hello</h2>
      <p>World</p>
      `);
  });

//------------GET METHOD FOR POST----------------
server.get("/api/posts",(req,res)=>{
  post.get()
  .then(posts=>{
    res.status(200).json(posts)
  })
  .catch(err=>{
    res.status(400).json({error: "cannot GET data"})
  })
})
//------------GET id METHOD FOR POST----------------
server.get("/api/posts/:id",(req,res)=>{
    const postId = req.params.id;
  post.getById(postId)
  .then(posts=>{
    res.status(200).json(posts)
  })
  .catch(err=>{
    err.status(400).json({error: "cannot GET id data"})
  })
})
//------------POST METHOD FOR POST----------------
server.post("/api/posts",(req,res)=>{
      const newPost = req.body;
  post.insert(newPost)
  .then(response=>{
    res.json(response)
  })
  .catch(err=>{
    res.status(400).json({error: "cannot POST data"})
  })
})
//------------DELETE METHOD FOR POST----------------
server.delete("/api/posts/:id",(req,res)=>{
  const postId = req.params.id;
  const postText = req.body;

  post.remove(postId,postText)
  .then(response=>{
    res.status(204).json(response)
  })
  .catch(err=>{
    res.status(400).json({error:"cannot DELETE data" })
  })
  
})
//------------PUT METHOD FOR POST----------------


module.exports = server;




// //------------GET METHOD USER----------------
// server.get("/user",(req,res)=>{
//   user.get()
//   .then(user=>{
//     res.status(201).json(user)
//   })
//   .catch(err=>{
//     res.status(400).json({error: "cannot GET data"})
//   })
// })