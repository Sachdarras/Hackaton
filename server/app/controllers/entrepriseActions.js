/* eslint-disable consistent-return */
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all entreprises from the database
    const entreprises = await tables.entreprise.readAll();

    // Respond with the entreprises in JSON format
    res.json(entreprises);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific entreprise from the database based on the provided ID
    const entreprise = await tables.entreprise.read(req.params.id);

    // If the entreprise is not found, respond with HTTP 404 (Not Found)
    if (entreprise == null) {
      return res.sendStatus(404);
    }

    // Respond with the entreprise in JSON format
    return res.json(entreprise);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  const entreprise = { ...req.body, id: req.params.id };

  try {
    // Fetch a specific entreprise from the database based on the provided ID
    await tables.entreprise.update(entreprise);

    // Respond with HTTP 204 (No Content) to indicate success
    return res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  try {
    // Insert the entreprise into the database
    const insertId = await tables.entreprise.create(req.body);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted entreprise
    return res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  try {
    // Fetch a specific entreprise from the database based on the provided ID
    await tables.entreprise.delete(req.params.id);

    // Respond with HTTP 204 (No Content) to indicate success
    return res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Authentication operation for entreprise
const authenticate = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const entreprise = await tables.entreprise.authenticate(email, password);
    if (!entreprise) {
      return res
        .status(401)
        .json({ error: "Email ou mot de passe incorrect." });
    }
    return res.status(200).json(entreprise);
  } catch (err) {
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  authenticate,
};
