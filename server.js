const express = require('express'); 
const helmet= require("helmet");
const morgan = require("morgan");

const post = require("./data/helpers/postDb");
const user = require("./data/helpers/userDb");

const server = express();
server.use(helmet());
server.use(express.json())

server.get('/', (req, res, next) => {
    res.send(`
      <h2>Hello</h2>
      <p>World</p>
      `);
  });
//==========================================================================================
//==========================================================================================

//------------GET METHOD FOR USER----------------
server.get("/api/users",(req,res)=>{
  user.get()
  .then(response=>{
    res.status(200).json(response)
  })
  .catch(err=>{
    res.status(500).json({error:"cannot GET data"})
  })
})

//------------GET METHOD FOR USER----------------
server.get("/api/users/:id",(req,res)=>{
  const { id }= req.params;
  user.getById(id)
  .then(response=>{
    res.status(200).json(response)
  })
  .catch(err=>{
    res.status(400).json({error:"cannot GET id data"})
  })
})
//------------GET METHOD FOR USER----------------
server.get("/api/users/:id/posts",(req,res)=>{
  user.getUserPosts()
  .then(response=>{
    res.status(200).json(response)
  })
  .catch(err=>{
    res.status(400).json({error: "cannot GET user id posts data"})
  })
})
//------------POST METHOD FOR USER----------------
server.post("/api/users",(req,res)=>{
    const newUser = req.body;
  user.insert(newUser)
  .catch(response=>{
    res.status(201).json(response)
  })
  .then(err=>{
    res.status(400).json({error: "cannot POST user data"})
  })
})
//------------DELETE METHOD FOR USER----------------
server.delete("/api/users/:id",(req,res)=>{
  const userId = req.params.id;
  user.remove(userId)
  .then(response=>{
    res.status(201).json(response)
  })
  .catch(err=>{
    res.status(400).json({error: "cannot DELETE user data"})
  })
})
//------------PUT METHOD FOR USER----------------
server.put("/api/users/:id",(req,res)=>{
  const userId = req.params.id;
  const userName = req.body;
  user.update(userId,userName)
  .then(response=>{
    res.status(200).json(response)
  })
  .catch(err=>{
    res.status(400).json({error: "cannot PUT data"})
  })
})


//==========================================================================================
//==========================================================================================

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
    const {id} = req.params;
  post.getById({id})
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
  console.log(newPost)
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
server.put("/api/posts/:id",(req,res)=>{
  const newPost = req.body;
  post.update(newPost)
  .then(response=>{
    res.status(200).json(response)
  })
  .catch(err=>{
    res.status(400).json({error: "cannot PUT data"})
  })
})

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