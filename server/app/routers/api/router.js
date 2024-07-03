const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const candidateRouter = require("./candidate/router");

const entrepriseRouter = require("./entreprise/router");

const projetRouter = require("./projet/router");

router.use("/candidate", candidateRouter);

router.use("/entreprise", entrepriseRouter);

router.use("/projet", projetRouter);

/* ************************************************************************* */

module.exports = router;
