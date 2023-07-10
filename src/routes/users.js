const express = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../services/users.service");
const router = express.Router();

/* GET users listing. */
router.get("/", async (req, res) => {
  const users = await getUsers();
  res.send(users);
});

router.get("/:id", async (req, res) => {
  const user = await getUserById(req.params.id);
  res.send(user);
});

router.post("/", async (req, res) => {
  const user = await createUser(req.body);
  res.send(user);
});

router.put("/:id", async (req, res) => {
  const user = await updateUser(req.params.id, req.body);
  res.send(user);
});

router.delete("/:id", async (req, res) => {
  const user = await deleteUser(req.params.id);
  res.send(user);
});

module.exports = router;

///sending addresses of the server