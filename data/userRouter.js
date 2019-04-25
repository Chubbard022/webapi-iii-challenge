const express =require("express");
const user = require("./helpers/userDb")

const router = express.Router();


//==========================================================================================
//==========================================================================================

//------------GET METHOD FOR USER----------------
router.get("/",(req,res)=>{
    user.get()
    .then(response=>{
      res.status(200).json(response)
    })
    .catch(err=>{
      res.status(500).json({error:"cannot GET data"})
    })
  })
  
  //------------GET METHOD FOR USER----------------
  router.get("/:id",(req,res)=>{
    const userID = req.params.id;
    user.getById(userID)
    .then(response=>{
      res.status(200).json(response)
    })
    .catch(err=>{
      res.status(400).json({error:"cannot GET id data"})
    })
  })
  //------------GET METHOD FOR USER----------------
  router.get("/:id/",(req,res)=>{
    const {user_id} = req.params;
    user.getUserPosts({user_id})
    .then(response=>{
      res.status(200).json(response)
    })
    .catch(err=>{
      res.status(400).json({error: "cannot GET user id posts data"})
    })
  })
  //------------POST METHOD FOR USER----------------
  router.post("/",(req,res)=>{
    const newPost = req.body;
    user.insert(newPost)
    .catch(response=>{
      res.json(response)
    })
    .then(err=>{
      res.status(400).json({error: "cannot POST user data"})
    })
  })
  //------------DELETE METHOD FOR USER----------------
  router.delete("/:id",(req,res)=>{
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
  router.put("/:id",(req,res)=>{
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
  module.exports = router