const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  getAllWork,
  getSignleTask,
  createTasks,
  editTasks,
  deleteTask,
} = require("../controllers/my_work");

router.route("/").get(getAllWork).post(auth, createTasks);
router
  .route("/:id")
  .get(getSignleTask)
  .patch(auth, editTasks)
  .delete(auth, deleteTask);

module.exports = router;
