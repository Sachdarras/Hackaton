// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all candidates from the database
    const candidates = await tables.candidate.readAll();

    // Respond with the candidates in JSON format
    res.json(candidates);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific candidate from the database based on the provided ID
    const candidate = await tables.candidate.read(req.params.id);

    // If the candidate is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the candidate in JSON format
    if (candidate == null) {
      res.sendStatus(404);
    } else {
      res.json(candidate);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  const candidate = { ...req.body, id: req.params.id };

  try {
    // Fetch a specific candidate from the database based on the provided ID
    await tables.candidate.update(candidate);

    // If the candidate is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the candidate in JSON format
    if (candidate == null) {
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
  // Extract the candidate data from the request body

  try {
    // Insert the candidate into the database
    const insertId = await tables.candidate.create(req.body);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted candidate
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  try {
    // Fetch a specific candidate from the database based on the provided ID
    const candidate = await tables.candidate.delete(req.params.id);

    // If the candidate is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the candidate in JSON format
    if (candidate == null) {
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
