
const router = require("express").Router();
const { getUsers,createUser,updateUser,deleteUser} = require("./Controllers/User");



router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});
router.get("/users", getUsers);
router.post("/users/addUser", createUser);
router.put("/users/updateUser/:userID", updateUser);
router.delete("/users/deleteUser/:userID", deleteUser);


module.exports = router;