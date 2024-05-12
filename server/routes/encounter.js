const express = require("express");
const router = express.Router();
const sqlite3 = require("sqlite3").verbose();
const config = require("../config");

const db = new sqlite3.Database(config.dbPath);

// Get all encounters
router.get("/", (req, res) => {
  db.all(`SELECT * FROM encounter`, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    if (!rows || rows.length === 0) {
      res.status(404).json({ error: "No encounters found" });
      return;
    }

    const encouters = rows.map((row) => row);
    res.json(encouters);
  });
});

// Get encounter by Id
router.get("/:encounter_id", (req, res) => {
  const encounterId = req.params.encounter_id;
  if (!encounterId) {
    res.status(400).json({ error: "encounter_id parameter is required" });
    return;
  }

  db.all(`SELECT * FROM encounter WHERE id = ${encounterId}`, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    if (!rows || rows.length === 0) {
      res.status(404).json({ error: "No encounters found with the specified encounter_id" });
      return;
    }

    const encouters = rows.map((row) => row);
    res.json(encouters);
  });
});

// Get encounters by ID range
router.get("/range/:min/:max", (req, res) => {
  const minId = req.params.min;
  const maxId = req.params.max;

  if (!minId || !maxId) {
    res.status(400).json({ error: "Both min and max parameters are required" });
    return;
  }

  db.all(`SELECT * FROM encounter WHERE id BETWEEN ${minId} AND ${maxId}`, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    if (!rows || rows.length === 0) {
      res.status(404).json({ error: "No encounters found within the specified range" });
      return;
    }

    const encounters = rows.map((row) => row);
    res.json(encounters);
  });
});

router.get("/count", (req, res) => {
  db.all("SELECT COUNT(*) FROM encouter", (err, rows) => {
    const count = rows.map((row) => row);
    res.json(count);
  });
});

module.exports = router;
