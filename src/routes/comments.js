const express = require("express");
const {
  getComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
} = require("../services/comments.service");
const router = express.Router();

/* GET comments listing. */
router.get("/", async (req, res) => {
  const comments = await getComments();
  res.send(comments);
});

router.get("/:id", async (req, res) => {
  const comment = await getCommentById(req.params.id);
  res.send(comment);
});

router.post("/", async (req, res) => {
  const comment = await createComment(req.body);
  res.send(comment);
});

router.put("/:id", async (req, res) => {
  const comment = await updateComment(req.params.id, req.body);
  res.send(comment);
});

router.delete("/:id", async (req, res) => {
  const comment = await deleteComment(req.params.id);
  res.send(comment);
});

module.exports = router;

///sending addresses of the server