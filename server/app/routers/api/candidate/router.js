const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  edit,
  add,
  destroy,
  authenticate,
} = require("../../../controllers/candidateActions");

// Routes CRUD pour les candidats
router.get("/", browse);
router.get("/:id", read);
router.put("/:id", edit);
router.post("/", add);
router.delete("/:id", destroy);

// Route d'authentification
router.post("/login", authenticate);

module.exports = router;
