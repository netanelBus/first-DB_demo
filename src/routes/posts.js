const express = require("express");
const {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require("../services/posts.service");
const router = express.Router();

/* GET Posts listing. */
router.get("/", async (req, res) => {
  const posts = await getPosts();
  res.send(posts);
});

router.get("/:id", async (req, res) => {
  const post = await getPostById(req.params.id);
  res.send(post);
});

router.post("/", async (req, res) => {
  const post = await createPost(req.body);
  res.send(post);
});

router.put("/:id", async (req, res) => {
  const post = await updatePost(req.params.id, req.body);
  res.send(post);
});

router.delete("/:id", async (req, res) => {
  const post = await deletePost(req.params.id);
  res.send(post);
});

module.exports = router;

///sending addresses of the server