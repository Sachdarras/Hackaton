const express = require("express");

const router = express.Router();

// Import entreprise-related actions
const {
  browse,
  read,
  edit,
  add,
  destroy,
  authenticate, // Import de la fonction d'authentification des entreprises
} = require("../../../controllers/entrepriseActions");

// Route to get a list of entreprises
router.get("/", browse);

// Route to get a specific entreprise by ID
router.get("/:id", read);

// Route to modify a specific entreprise by ID
router.put("/:id", edit);

// Route to add a new entreprise
router.post("/", add);

// Route to remove a new entreprise by ID
router.delete("/:id", destroy);

// Route d'authentification des entreprises
router.post("/login", authenticate);

module.exports = router;
