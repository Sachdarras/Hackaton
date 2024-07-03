// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all projets from the database
    const projets = await tables.projet.readAll();

    // Respond with the projets in JSON format
    res.json(projets);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific projet from the database based on the provided ID
    const projet = await tables.projet.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the projet in JSON format
    if (projet == null) {
      res.sendStatus(404);
    } else {
      res.json(projet);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  const projet = { ...req.body, id: req.params.id };

  try {
    // Fetch a specific proje from the database based on the provided ID
    await tables.projet.update(projet);

    // If the projet is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the projet in JSON format
    if (projet == null) {
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
  // Extract the projet data from the request body

  try {
    // Insert the projet into the database
    const insertId = await tables.projet.create(req.body);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted projet
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  try {
    // Fetch a specific projet from the database based on the provided ID
    const projet = await tables.projet.delete(req.params.id);

    // If the projet is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the projet in JSON format
    if (projet == null) {
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
