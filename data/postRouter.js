const express =require("express");
const post = require("./helpers/postDb")

const router = express.Router();


//==========================================================================================
//==========================================================================================

//------------GET METHOD FOR POST----------------
router.get("/",(req,res)=>{
    post.get()
    .then(posts=>{
      res.status(200).json(posts)
    })
    .catch(err=>{
      res.status(400).json({error: "cannot GET data"})
    })
  })
  //------------GET id METHOD FOR POST----------------
  router.get("/:id",(req,res)=>{
      const postID = req.params.id;
    post.getById(postID)
    .then(posts=>{
      res.status(200).json(posts)
    })
    .catch(err=>{
      err.status(400).json({error: "cannot GET id data"})
    })
  })
  //------------POST METHOD FOR POST----------------
  router.post("/",(req,res)=>{
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
  router.delete("/:id",(req,res)=>{
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
  router.put("/:id",(req,res)=>{
    const newPost = req.body;
    const postId = req.params.id;
    post.update(postId,newPost)
    .then(response=>{
      res.status(200).json(response)
    })
    .catch(err=>{
      res.status(400).json({error: "cannot PUT data"})
    })
  })

module.exports = router