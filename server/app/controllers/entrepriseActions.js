// Import access to database tables
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
    // Otherwise, respond with the entreprise in JSON format
    if (entreprise == null) {
      res.sendStatus(404);
    } else {
      res.json(entreprise);
    }
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

    // If the entreprise is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the entreprise in JSON format
    if (entreprise == null) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the entreprise data from the request body

  try {
    // Insert the entreprise into the database
    const insertId = await tables.entreprise.create(req.body);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted entreprise
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  try {
    // Fetch a specific entreprise from the database based on the provided ID
    const entreprise = await tables.entreprise.delete(req.params.id);

    // If the entreprise is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the entreprise in JSON format
    if (entreprise == null) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
