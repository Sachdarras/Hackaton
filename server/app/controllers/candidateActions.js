/* eslint-disable consistent-return */

const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const candidates = await tables.candidate.readAll();
    res.json(candidates);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  const { id } = req.params;
  try {
    const candidate = await tables.candidate.read(id);
    if (!candidate) {
      return res.sendStatus(404);
    }
    res.json(candidate);
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const { id } = req.params;
  const candidate = { ...req.body, id };
  try {
    await tables.candidate.update(candidate);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  try {
    const insertId = await tables.candidate.create(req.body);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  const { id } = req.params;
  try {
    await tables.candidate.delete(id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const authenticate = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const candidate = await tables.candidate.authenticate(email, password);
    if (!candidate) {
      return res
        .status(401)
        .json({ error: "Email ou mot de passe incorrect." });
    }
    res.status(200).json(candidate);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  authenticate,
};
