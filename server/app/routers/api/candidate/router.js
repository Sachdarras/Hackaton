const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import candidate-related actions
const {
  browse,
  read,
  edit,
  add,
  destroy,
} = require("../../../controllers/candidateActions");

// Route to get a list of candidates
router.get("/", browse);

// Route to get a specific candidate by ID
router.get("/:id", read);

// Route to modify a specific candidate by ID
router.put("/:id", edit);

// Route to add a new candidate
router.post("/", add);

// Route to remove a new candidate by ID
router.delete("/:id", destroy);

/* ************************************************************************* */

module.exports = router;
